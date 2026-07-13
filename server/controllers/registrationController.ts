import { Request, Response } from 'express';
import Registration from '../models/Registration';

// Use require with an any-typed fallback to avoid TypeScript errors
const nodemailer: any = require("nodemailer");

interface MulterRequest extends Request {
  files?: {
    [fieldname: string]: Express.Multer.File[];
  } | Express.Multer.File[];
}

// Email Send karne ka Helper Function (Bank Details के साथ)
const sendThankYouEmail = async (userEmail: string, userName: string) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "janawasyojanakharkhoda@gmail.com", 
        pass: process.env.GMAIL_APP_PASSWORD, // Ensure this is 100% set up in your server's .env file
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
          <p>We have successfully received your application details along with your documents (Aadhaar & PAN Card) for the premium <strong>DDJAY Plots</strong> residential allocation.</p>
          
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
    
    if (!multerReq.files || Array.isArray(multerReq.files)) {
      return res.status(400).json({ 
        success: false, 
        message: "Both Aadhaar and PAN cards are required documents." 
      });
    }

    const files = multerReq.files as { [fieldname: string]: Express.Multer.File[] };
    
    const aadhaarFile = files['aadhaarUrl']?.[0];
    const panFile = files['panUrl']?.[0];

    if (!aadhaarFile || !panFile) {
      return res.status(400).json({ 
        success: false, 
        message: "Both Aadhaar and PAN cards are required documents." 
      });
    }

    const { name, email, phone, paymentMethod } = req.body;

    // FIX: Using the dynamic disk storage file properties created by multer
    const permanentAadhaarUrl = `uploads/${aadhaarFile.filename}`;
    const permanentPanUrl = `uploads/${panFile.filename}`;

    const newRegistration = new Registration({
      name,
      email,
      phone,
      aadhaarUrl: permanentAadhaarUrl, 
      panUrl: permanentPanUrl,         
      paymentMethod: paymentMethod || 'bank_transfer',
      paymentStatus: 'Pending',
      amount: 31000
    });

    // 1. Save data to database
    await newRegistration.save();

    // 2. Trigger the email helper right here
    try {
      await sendThankYouEmail(email, name);
    } catch (emailErr) {
      console.error("Database entry saved, but notification email failed:", emailErr);
    }

    return res.status(200).json({ 
      success: true, 
      message: "Registration submitted successfully!" 
    });

  } catch (error) {
    console.error("Backend Error:", error);
    return res.status(500).json({ 
      success: false, 
      message: "Internal Server Error" 
    });
  }
};