"use client";

import React from "react";
import styles from "./WhyInvest.module.css";

export default function WhyInvest() {
  const points = [
    { icon: "🚀", title: "RAPID INFRASTRUCTURE", subtitle: "GROWTH" },
    { icon: "🏢", title: "INCREASING INDUSTRIAL", subtitle: "DEVELOPMENT" },
    { icon: "📍", title: "RISING PROPERTY DEMAND NEAR", subtitle: "NCR" },
    { icon: "💼", title: "BETTER AFFORDABILITY THAN", subtitle: "GURGAON" },
    { icon: "📈", title: "EXCELLENT LONG-TERM", subtitle: "APPRECIATION" },
    { icon: "🔄", title: "STRONG RESALE & RENTAL", subtitle: "OPTIONS" }
  ];

  // image_8f9e66.jpg के अनुसार गैलरी इमेजेज का डेटा
  const galleryImages = [
    { src: "/gallery/siteimage1.webp", alt: "Project Entrance View" },
    { src: "/gallery/siteimage2.webp", alt: "Aerial View of Township" },
    { src: "/gallery/siteimage3.webp", alt: "Clubhouse Gate View" },
    { src: "/gallery/siteimage4.webp", alt: "Green Plots Layout Grid" },
    { src: "/gallery/siteimage5.webp", alt: "Main Gate Security Setup" },
    { src: "/gallery/siteimage6.webp", alt: "Night Perspective View" }
  ];

  return (
    <>
      {/* SECTION 1: WHY INVEST */}
      <section className={styles.investSection}>
        <div className={styles.investContainer}>
          
          {/* Left Column */}
          <div className={styles.leftContent}>
            <div className={styles.potentialBadge}>
              HIGH FUTURE APPRECIATION POTENTIAL
            </div>
            
            <h2 className={styles.mainTitle}>
              WHY INVEST IN DDJAY <br />
              PLOTS <br />
              <span className={styles.greenHighlight}>IN  Kharkhoda  Sector 6?</span>
            </h2>
            
            <p className={styles.description}>
               Kharkhoda  Sector 6 is rapidly emerging as a major real estate and industrial hotspot 
              because of its strategic connectivity and upcoming developments.
            </p>
            
            <div className={styles.pointsGrid}>
              {points.map((point, index) => (
                <div key={index} className={styles.pointCard}>
                  <div className={styles.iconBox}>{point.icon}</div>
                  <div className={styles.pointTextBox}>
                    <span className={styles.pointTitle}>{point.title}</span>
                    <span className={styles.pointSubtitle}>{point.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightCardWrapper}>
            <div className={styles.investmentCard}>
              <div className={styles.cardHeader}>
                <span className={styles.lightningIcon}>⚡</span>
                <h3>PRIME INVESTMENT ZONE</h3>
              </div>
              
              <p className={styles.cardMainText}>
                Real estate experts consider plots near <strong>**Reliance MET City**</strong> and plots near 
                <strong>**KMP Expressway**</strong> among the most promising investment opportunities in Haryana.
              </p>
              
              <div className={styles.pricingDivider}></div>
              <div className={styles.priceRow}>
                <span className={styles.priceLabel}>INVESTMENT STARTS FROM</span>
                <span className={styles.priceValue}>₹65 Lakh*</span>
              </div>
              
              <div className={styles.pricingDivider}></div>
              <div className={styles.priceRow}>
                <span className={styles.priceLabel}>REGISTRATION AMOUNT</span>
                <span className={styles.registrationValue}>₹31,000/-*</span>
              </div>
              
              <div className={styles.pricingDivider}></div>
              <button className={styles.closedBtn} disabled>
                REGISTRATION OPEN
              </button>
            </div>
          </div>

        </div>
      </section>

      <div className={styles.topAlertBar}>
        <div className={styles.alertBarContainer}>
          <div className={styles.alertLeftText}>
            <strong>Premium DDJAY Plots in Sector 6.</strong> <br />
            <span>Registration Amount – ₹31,000/- Only*</span>
            <button className={styles.miniClosedBtn}>REGISTRATION OPEN</button>
          </div>
          <div className={styles.reraApprovedStamp}>
            <div className={styles.stampCircle}>
              <span>RERA</span>
              <strong>APPROVED</strong>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================================
          SECTION 3: IMAGE GALLERY WORK (image_8f9e66.jpg)
         ========================================================== */}
      <section className={styles.gallerySection}>
        <div className={styles.galleryHeader}>
          <h2 className={styles.galleryTitle}>Gallery</h2>
        </div>

        <div className={styles.galleryGridContainer}>
          {galleryImages.map((img, index) => (
            <div key={index} className={styles.galleryCard}>
              <div className={styles.artisticLabel}>ARTISTIC IMAGE</div>
              <img src={img.src} alt={img.alt} className={styles.galleryImg} />
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================================
          SECTION 4: BOTTOM SPECIFICATION INFOBAR (image_8f9e66.jpg)
         ========================================================== */}
      <div className={styles.bottomInfoBar}>
        <div className={styles.infoBarContainer}>
          
          <div className={styles.infoBarItem}>
            <h4>Plots Starting</h4>
            <p>Price ₹65 Lakh*</p>
          </div>
          
          <span className={styles.barVerticalDivider}></span>

          <div className={styles.infoBarItem}>
            <h4>Architecture</h4>
            <p>Stilt + 4 Floors</p>
          </div>

          <span className={styles.barVerticalDivider}></span>

          <div className={styles.infoBarItem}>
            <h4>Community</h4>
            <p>Gated with 24/7 Security</p>
          </div>

          <span className={styles.barVerticalDivider}></span>

          <div className={styles.infoBarItem}>
            <h4>HRERA-NO</h4>
            <p>HRERA-PKL-SNP-797-2025</p>
          </div>

        </div>
      </div>
    </>
  );
}