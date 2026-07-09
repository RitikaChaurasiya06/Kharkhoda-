"use client";

import styles from "./About.module.css";

export default function AboutProject() {
  return (
    <>
      {/* ==========================================
          1. PREMIUM LIVING SECTION (Top Block)
         ========================================== */}
      <div className={styles.aboutContainer}>
        <div className={styles.aboutContentGrid}>
          
          {/* Left Block Image Frame */}
          <div className={styles.imageWrapper}>
            <img 
              src="/Banner/siteimage1.webp" 
              alt="Premium DDJAY Plots Entry Layout" 
              className={styles.projectImage} 
            />
            <div className={styles.developmentStatusTag}>
              DEVELOPMENT STATUS: Professional Surveying & Land Demarcation in Progress
            </div>
          </div>

          {/* Right Block Descriptions */}
          <div className={styles.textWrapper}>
            <span className={styles.miniTagLine}>THE FUTURE OF PREMIUM LIVING</span>
            <h2 className={styles.sectionHeading}>Premium DDJAY Plots in Sector 6</h2>
            <div className={styles.greenUnderlineShort}></div>
            
            <p className={styles.descriptionText}>
              Welcome to , a premium gated community offering DDJAY plots in  Kharkhoda  Sector 6 with world-class amenities, modern infrastructure, and excellent future appreciation potential.
            </p>
            
            <p className={styles.descriptionText}>
              Why settle for an apartment when you can own the sky? Our township offers <strong>Independent Floor Registry</strong>, giving you total control over every level of your multi-generational mansion or high-yield asset.
            </p>

            <p className={styles.descriptionText}>
              Located at the <strong>Crossroads of Connectivity</strong>, enjoy direct access to the KMP Expressway, linking you to Delhi and IGI Airport in record time.
            </p>

            {/* Checkmark Perks Grid */}
            <div className={styles.ticksGrid}>
              <div className={styles.tickItem}>
                <span className={styles.checkmark}>✓</span> Ultra-Realistic Urban Planning
              </div>
              <div className={styles.tickItem}>
                <span className={styles.checkmark}>✓</span> High Appreciation Vibe
              </div>
              <div className={styles.tickItem}>
                <span className={styles.checkmark}>✓</span> Modern Professional Ziqi
              </div>
              <div className={styles.tickItem}>
                <span className={styles.checkmark}>✓</span> DX Quality Infrastructure
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ==========================================
          2. ABOUT THE PROJECT SECTION (Bottom Block from image_835f6e.jpg)
         ========================================== */}
      <div className={styles.projectDetailsContainer}>
        <div className={styles.projectDetailsContent}>
          
          <span className={styles.projectMiniTag}>ABOUT THE PROJECT</span>
          
          <h2 className={styles.projectMainHeading}>
            DDJAY Plots in Sector 6  Kharkhoda : <span className={styles.headingHighlight}>A Planned Investment Opportunity</span>
          </h2>
          <div className={styles.greenUnderlineLong}></div>

          <p className={styles.projectParagraph}>
            DDJAY Plots in Sector 6 are attracting attention from homebuyers and investors looking for well-planned residential developments in  Kharkhoda . Developed under the Deen Dayal Jan Awas Yojana (DDJAY), these plots offer an opportunity to own land in a growing region of Haryana with improving infrastructure and connectivity.
          </p>
          <p className={styles.projectParagraph}>
            Located in a developing residential corridor, DDJAY Plots  Kharkhoda  provide a suitable option for individuals who want the flexibility of constructing their own home while benefiting from an organized township environment. The project follows government guidelines and offers modern planning, internal roads, green spaces, and essential infrastructure designed to support long-term residential growth.
          </p>
          <p className={styles.projectParagraph}>
            One of the key highlights of the development is its <span className={styles.highlightText}>  Stilt + 4 Floors architectural approval.</span> This provision allows plot owners to maximize land utilization by constructing multiple floors, making it suitable for extended families or future rental income opportunities. Such flexibility adds practical value for both end users and investors.
          </p>
          <p className={styles.projectParagraph}>
            For buyers seeking legally compliant projects, these are <span className={styles.highlightText}>DTCP Approved Plots  Kharkhoda </span>, ensuring that the development adheres to regulatory standards. Additionally, the project is registered under RERA No: HRERA-PKL-SNP-797-2025, providing transparency and greater confidence during the purchase process.
        </p>
        <p className={styles.projectParagraph}>
          The project offers an attractive entry point for property investment, with <span className={styles.highlightText}>investment starting from ₹65 Lakh*</span>. Interested buyers can secure their booking with a registration amount of <span className={styles.highlightText}>₹29,000/-*</span>, making the initial investment relatively accessible compared to many urban residential markets.
        </p>
        <p className={styles.projectParagraph}>
          Sector 6 enjoys connectivity to key areas of  Kharkhoda  and benefits from the region's ongoing development. The area's proximity to educational institutions, healthcare facilities, commercial zones, and major road networks contributes to its growing appeal. As  Kharkhoda  continues to evolve as an emerging residential destination, plotted developments in strategic sectors are expected to remain in demand.
        </p> 
        <p className={styles.projectParagraph}>For those looking to build a customized home or diversify their real estate portfolio, DDJAY Plots in Sector 6 present a balanced combination of regulatory compliance, development potential, and future growth prospects. With DTCP approval, RERA registration, and Stilt + 4 Floors construction permission, the project offers a structured residential investment opportunity in the expanding  Kharkhoda  market.</p>

        </div>
      </div>
    </>
  );
}