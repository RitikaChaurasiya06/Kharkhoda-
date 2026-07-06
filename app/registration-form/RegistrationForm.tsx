"use client";

import React, { useState } from "react";
import styles from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    aadhaarFile: null as File | null,
    panFile: null as File | null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: "aadhaarFile" | "panFile") => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData((prev) => ({ ...prev, [field]: e.target.files![0] }));
    }
  }; 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.aadhaarFile || !formData.panFile) {
      alert("Please upload both Aadhaar and PAN card files before submitting.");
      return;
    }

    try {
      const data = new FormData();

      // Text fields append karein
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("paymentMethod", "qr"); // Schema ke hisab se 'qr' fixed bhej rahe hain

      // File fields ko Schema keys ke mutabik bhej rahe hain (aadhaarUrl aur panUrl)
      data.append("aadhaarUrl", formData.aadhaarFile);
      data.append("panUrl", formData.panFile);

      const response = await fetch("http://localhost:5000/api/v1/register", {
        method: "POST",
        body: data, // Browser iska header boundary khud handle karega
      });

      const text = await response.text();

      console.log("Status:", response.status);
      console.log("Response:", text);

      if (!response.ok) {
        let serverErrorMsg = "Server Error";
        try {
          const parsedErr = JSON.parse(text);
          if (parsedErr.message) serverErrorMsg = parsedErr.message;
        } catch {
          // JSON string nahi hai response
        }
        alert(serverErrorMsg);
        return;
      }

      const result = JSON.parse(text);
      alert(result.message || "Registration completed successfully!");
      
    } catch (error) {
      console.error("Network Error:", error);
      alert("Network Error: Could not connect to the registration server.");
    }
  };

  return (
    <section className={styles.formSection}>
      <div className={styles.formContainer}>
        
        {/* Left Informational Column */}
        <div className={styles.infoColumn}>
          <div className={styles.badge}>SECURE BOOKING PORTAL</div>
          <h2 className={styles.mainTitle}>
            Book Your Premium <br />
            <span className={styles.greenText}>DDJAY Plot Today</span>
          </h2>
          <p className={styles.subtitle}>
            Secure your allotment in Sector 27, Jhajjar by filling out the official registration form. 
            Please ensure all documents match your official records.
          </p>

          <div className={styles.summaryCard}>
            <div className={styles.summaryRow}>
              <span>Booking Token Amount</span>
              <strong>₹31,000/-*</strong>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.summaryRow}>
              <span>Project Status</span>
              <span className={styles.approvedText}>Govt Approved</span>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.summaryRow}>
              <span>Allotment Type</span>
              <span>Deen Dayal Jan Awas Yojna</span>
            </div>
          </div>

          <div className={styles.secureNotice}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a5c41" strokeWidth="2.5">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <span>256-Bit SSL Encrypted & Secure Payment Gateway</span>
          </div>
        </div>

        {/* Right Form Column */}
        <div className={styles.formColumn}>
          <form onSubmit={handleSubmit} className={styles.registrationForm}>
            
            <h3 className={styles.formHeaderTitle}>Registration Details</h3>

            {/* Applicant Name */}
            <div className={styles.inputGroup}>
              <label htmlFor="name">Applicant Full Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter your full name" 
                required 
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            {/* Email Address */}
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email Address *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Enter email address" 
                required 
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            {/* Phone Number */}
            <div className={styles.inputGroup}>
              <label htmlFor="phone">Phone Number (WhatsApp Preferred) *</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                placeholder="Enter 10-digit mobile number" 
                required 
                pattern="[0-9]{10}"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            {/* Documents Upload Row */}
            <div className={styles.documentRow}>
              {/* Aadhaar Upload */}
              <div className={styles.inputGroup}>
                <label htmlFor="aadhaarFile">Upload Aadhaar Card (Front & Back) *</label>
                <div className={styles.fileUploadWrapper}>
                  <input 
                    type="file" 
                    id="aadhaarFile" 
                    accept="image/*,.pdf" 
                    required
                    onChange={(e) => handleFileChange(e, "aadhaarFile")}
                    style={{ display: "none" }}
                  />
                  <label htmlFor="aadhaarFile" className={styles.fileLabel}>
                    {formData.aadhaarFile ? formData.aadhaarFile.name : "Choose File (PDF/JPG)"}
                  </label>
                </div>
              </div>

              {/* PAN Upload */}
              <div className={styles.inputGroup}>
                <label htmlFor="panFile">Upload PAN Card *</label>
                <div className={styles.fileUploadWrapper}>
                  <input 
                    type="file" 
                    id="panFile" 
                    accept="image/*,.pdf" 
                    required
                    onChange={(e) => handleFileChange(e, "panFile")}
                    style={{ display: "none" }}
                  />
                  <label htmlFor="panFile" className={styles.fileLabel}>
                    {formData.panFile ? formData.panFile.name : "Choose File (PDF/JPG)"}
                  </label>
                </div>
              </div>
            </div>

            <div className={styles.paymentSelectionBox}>
              <label className={styles.sectionLabel}>Payment Method</label>
              <div className={styles.paymentDetailsBox}>
                <div className={styles.qrPlaceholderBox}>
                  <div className={styles.dummyQrCode}>
                    {/* <span>QR CODE PLACEHOLDER</span> */}
                    <img src="/Qr.jpeg" alt="Dynamic QR Code" className={styles.qrImage} />
                  </div>
                  <p className={styles.qrInstructions}>
                    Scan this dynamic QR code using any UPI App (GPay, PhonePe, Paytm) to pay <strong>₹31,000/-</strong> securely.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className={styles.submitBtn}>
              Process Payment (₹31,000)
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}