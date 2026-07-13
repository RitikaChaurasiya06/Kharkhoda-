import { Request, Response } from 'express';
import Registration from '../models/Registration';

const nodemailer: any = require("nodemailer");

interface MulterRequest extends Request {
  files?: any;
}

const sendThankYouEmail = async (userEmail: string, userName: string) => {
  try {
    if (!process.env.GMAIL_APP_PASSWORD) {
      console.error("🛑 CRITICAL: GMAIL_APP_PASSWORD is missing in backend environment variables.");
      return;
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "janawasyojanakharkhoda@gmail.com", 
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Deen Dayal Jan Awas Yojna" <janawasyojanakharkhoda@gmail.com>`,
      to: userEmail,
      subject: `Registration Successful & Bank Payment Details - DDJAY Plot`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; line-height: 1.6; color: #333;">
          <h2 style="color: #1a5c41; text-align: center;">Thank You for Registering!</h2>
          <p>Dear <strong>${userName}</strong>,</p>
          <p>We have successfully received your application details along with your documents for the premium <strong>DDJAY Plots</strong> residential allocation.</p>
          
          <div style="background-color: #f4f9f6; padding: 18px; border-left: 4px solid #1a5c41; margin: 20px 0; border-radius: 4px;">
            <h3 style="margin-top: 0; color: #1a5c41; font-size: 16px;">Next Step: Complete Your Secure Token Payment</h3>
            <p style="margin: 6px 0;">To process your booking allotment, please securely transfer the booking token amount via Net Banking / IMPS / NEFT to the official bank account mentioned below:</p>
            
            <hr style="border: none; border-top: 1px dashed #cbdad2; margin: 12px 0;" />
            
            <p style="margin: 4px 0;"><strong>Bank Name:</strong> Punjab National Bank (PNB)</p>
            <p style="margin: 4px 0;"><strong>Account Name:</strong> Arveen Build Estate LLP -Escrow Collection – Arveen Build Estate LLP</p>
            <p style="margin: 4px 0;"><strong>Account Number:</strong> 1522002900000276</p>
            <p style="margin: 4px 0;"><strong>IFSC Code:</strong> PUNB0152200</p>
            <p style="margin: 4px 0;"><strong>Booking Token Amount:</strong> ₹31,000/-</p>
          </div>

          <p><strong>Note:</strong> Our verification team will review your submitted documents shortly. Your temporary registration status is currently <strong>Under Review</strong> and will be confirmed once the token transfer is verified by our desk representative.</p>
          
          <p style="margin-top: 30px;">Best Regards,<br /><strong>Allotment Committee Desk</strong><br />Deen Dayal Jan Awas Yojna</p>
          <hr style="border: none; border-top: 1px solid #eeeeee; margin: 20px 0;" />
          <p style="font-size: 11px; color: #777777; text-align: center;">This is an automated administrative notification regarding your active booking. Please do not reply directly to this mail.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Informative Email securely transmitted to: ${userEmail}`);
  } catch (error) {
    console.error("Nodemailer execution encountered an error:", error);
  }
};

export const registerUser = async (req: Request, res: Response) => {
  try {
    const multerReq = req as MulterRequest;
    
    if (!multerReq.files || typeof multerReq.files !== 'object') {
      return res.status(400).json({ 
        success: false, 
        message: "Missing document uploads or dynamic form data." 
      });
    }

    const aadhaarFile = multerReq.files['aadhaarUrl']?.[0];
    const panFile = multerReq.files['panUrl']?.[0];

    if (!aadhaarFile || !panFile) {
      return res.status(400).json({ 
        success: false, 
        message: "Both Aadhaar and PAN cards are required documents." 
      });
    }

    const { name, email, phone, paymentMethod } = req.body;

    // Convert raw memory buffers directly to Base64 data strings safely
    const aadhaarBase64 = `data:${aadhaarFile.mimetype};base64,${aadhaarFile.buffer.toString('base64')}`;
    const panBase64 = `data:${panFile.mimetype};base64,${panFile.buffer.toString('base64')}`;

    let newRegistration;
    try {
      newRegistration = new Registration({
        name,
        email,
        phone: String(phone), 
        aadhaarUrl: aadhaarBase64, 
        panUrl: panBase64,         
        paymentMethod: paymentMethod || 'bank_transfer',
        paymentStatus: 'Pending',
        amount: 31000
      });

      await newRegistration.save();
    } catch (dbError: any) {
      console.error("🛑 MONGODB ALLOCATION CRASH:", dbError.message);
      return res.status(500).json({
        success: false,
        message: `Database Validation Error: ${dbError.message}`
      });
    }

    // Trigger async non-blocking task context
    sendThankYouEmail(email, name).catch(err => {
      console.error("Async context background email processing crashed:", err);
    });

    return res.status(200).json({ 
      success: true, 
      message: "Registration submitted successfully!" 
    });

  } catch (error) {
    console.error("🔥 SYSTEM INTERNAL ERROR TRACE:", error);
    return res.status(500).json({ 
      success: false, 
      message: "Internal Server Error occurred on backend processing stacks." 
    });
  }
};