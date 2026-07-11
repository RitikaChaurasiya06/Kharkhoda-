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

  // State to manage Thank You screen visibility
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setIsSubmitting(true);
    const data = new FormData();

    // Text fields
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("paymentMethod", "bank_transfer"); // Schema के अनुसार सही वैल्यू

    // File fields (Key का नाम वही होना चाहिए जो backend में Multer accepts कर रहा है)
    data.append("aadhaarUrl", formData.aadhaarFile);
    data.append("panUrl", formData.panFile);

    const response = await fetch("http://localhost:5000/api/v1/register", {
      method: "POST",
      body: data, // ध्यान दें: FormData के साथ Headers में 'Content-Type' नहीं लिखते, browser अपने आप सेट करता है
    });

    const result = await response.json().catch(() => null);
    setIsSubmitting(false);

    if (!response.ok) {
      alert(result?.message || "Something went wrong on the server.");
      return;
    }

    // Clear form
    setFormData({
      name: "",
      email: "",
      phone: "",
      aadhaarFile: null,
      panFile: null,
    });

    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 5000);
    
  } catch (error) {
    setIsSubmitting(false);
    console.error("Network Error:", error);
    alert("Network Error: Could not connect to the backend server. Make sure your backend is running on port 5000.");
  }
};

  return (
    <section className={styles.formSection}>
      {/* Dynamic Thank You Screen Overlay */}
      {showThankYou && (
        <div className={styles.thankYouOverlay}>
          <div className={styles.thankYouCard}>
            <div className={styles.successCheckIcon}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#1a5c41" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className={styles.thankYouTitle}>Thank You!</h2>
            <p className={styles.thankYouMessage}>
              Your registration and documents have been received successfully. 
              A confirmation email has been sent to your registered address.
            </p>
            <div className={styles.timerProgressBox}>
              <div className={styles.progressBar}></div>
              <p className={styles.timerNotice}>Closing automatically in 5 seconds...</p>
            </div>
          </div>
        </div>
      )}

      <div className={styles.formContainer}>
        
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                    onChange={(e) => handleFileChange(e, "aadhaarFile")}
                    style={{ display: "none" }}
                    disabled={isSubmitting}
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
                    onChange={(e) => handleFileChange(e, "panFile")}
                    style={{ display: "none" }}
                    disabled={isSubmitting}
                  />
                  <label htmlFor="panFile" className={styles.fileLabel}>
                    {formData.panFile ? formData.panFile.name : "Choose File (PDF/JPG)"}
                  </label>
                </div>
              </div>
            </div>

            {/* Bank Transfer Details Box */}
            <div className={styles.paymentSelectionBox}>
              <label className={styles.sectionLabel}>Payment Method: Bank Transfer</label>
              <div className={styles.paymentDetailsBox} style={{ padding: "15px", backgroundColor: "#f9f9f9", borderRadius: "6px", border: "1px dashed #ccc", fontSize: "14px", color: "#333", lineHeight: "1.6" }}>
                <p style={{ margin: "0 0 8px 0", fontWeight: "bold", color: "#1a5c41" }}>Punjab National Bank (PNB)</p>
                <p style={{ margin: "4px 0" }}><strong>Account Name:</strong> Arveen Build Estate LLP -Escrow Collection – Arveen Build Estate LLP</p>
                <p style={{ margin: "4px 0" }}><strong>Account No:</strong> 1522002900000276</p>
                <p style={{ margin: "4px 0" }}><strong>IFSC Code:</strong> PUNB0152200</p>
                <p style={{ margin: "8px 0 0 0", fontStyle: "italic", fontSize: "12px", color: "#666" }}>* Please transfer ₹31,000/- to the escrow account above to process your booking.</p>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
              {isSubmitting ? "Processing..." : "Process Payment (₹31,000)"}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}