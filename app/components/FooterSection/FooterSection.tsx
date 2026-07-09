"use client";

import React, { useState } from "react";
import styles from "./FooterSection.module.css";

export default function FooterSection() {
  // FAQs को मैनेज करने के लिए स्टेट (डिफ़ॉल्ट रूप से पहला प्रश्न ओपन रहेगा)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      q: "1. What are DDJAY Plots in Sector 6  Kharkhoda ?",
      a: "DDJAY Plots in Sector 6  Kharkhoda  are residential plots developed under the Deen Dayal Jan Awas Yojana (DDJAY), offering planned infrastructure and flexible home construction options."
    },
    {
      q: "2. Is the project government approved?",
      a: "Yes, the project is fully government approved and complies with all state development regulations under the DDJAY policy."
    },
    {
      q: "3. What is the RERA number of the project?",
      a: "The registered RERA number for this plotted development is HRERA-PKL-SNP-797-2025."
    },
    {
      q: "4. What is the starting investment amount?",
      a: "The premium residential plots investment in this sector starts from ₹65 Lakh* onwards."
    },
    {
      q: "5. What is the registration amount?",
      a: "The registration amount to book a plot is booking token of ₹29,000/- Only*."
    },
    {
      q: "6. What construction is permitted on these plots?",
      a: "According to Haryana government DDJAY rules, construction of Stilt + 4 Floors is permitted on these residential plots."
    }
  ];

  return (
    <>
      {/* ==========================================================
          SECTION 1: ACCORDION FAQS (image_900384.png)
         ========================================================== */}
      <section className={styles.faqSection}>
        <div className={styles.faqWrapper}>
          <div className={styles.faqBadge}>FAQS</div>
          
          <h2 className={styles.faqMainHeading}>
            Frequently Asked Questions
            <span className={styles.headingUnderline}></span>
          </h2>

          <div className={styles.accordionContainer}>
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className={styles.accordionItem}>
                  <button 
                    className={styles.accordionHeader} 
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <span className={`${styles.arrowIcon} ${isOpen ? styles.arrowUp : ""}`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </button>
                  
                  <div className={`${styles.accordionBody} ${isOpen ? styles.bodyOpen : ""}`}>
                    <div className={styles.accordionContent}>
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 2: OFFICIAL GREEN FOOTER (image_9003c2.png)
         ========================================================== */}
      <footer className={styles.footerContainer}>
        <div className={styles.footerContentWrapper}>
          
          {/* Disclaimer Text Block */}
          <div className={styles.disclaimerBlock}>
            <p className={styles.disclaimerText}>
              <strong>OFFICIAL PROJECT DISCLAIMER</strong> This website is an informational platform for residential plotted projects offered under the development in Sector 6,  Kharkhoda . Marketing and customer facilitation services are provided by OM SHIVA REAL ESTATE PRIVATE LIMITED. This is not an official government website.
            </p>
          </div>

          {/* Footer Links */}
          <div className={styles.footerLinksRow}>
            <a href="#privacy" className={styles.footerLink}>PRIVACY POLICY</a>
            <a href="#disclaimer" className={styles.footerLink}>DISCLAIMER</a>
            <a href="#refund" className={styles.footerLink}>REFUND POLICY</a>
          </div>

          <hr className={styles.footerHorizontalLine} />

          {/* RERA and Presentation Details */}
          <div className={styles.metaDetailsBlock}>
            <h3 className={styles.reraNumberText}>RERA No. - HRERA-PKL-SNP-797-2025</h3>
            <h4 className={styles.presentedByText}>PRESENTED BY: OM SHIVA REAL ESTATE PRIVATE LIMITED</h4>
            
            <p className={styles.copyrightText}>
              © Copyright 2026 | All Rights Reserved |  Kharkhoda 
            </p>
            
            <p className={styles.legalNoticeText}>
              By continuing to use this website, you acknowledge that all visual assets and data are for representation purposes only according to the HRERA guidelines.
            </p>
          </div>

        </div>
      </footer>
    </>
  );
}