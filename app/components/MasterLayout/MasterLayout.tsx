"use client";

import React from "react";
import styles from "./MasterLayout.module.css";

export default function MasterLayout() {
  const handleDownload = () => {
    window.open("/siteplan/siteplan.pdf", "_blank");
  };

  // image_8f1eab.png के अनुसार एमेनिटीज का व्यवस्थित डेटा ऑब्जेक्ट
  const amenitiesData = [
    {
      category: "SPORTS & RECREATION",
      items: [
        { icon: "🏊", label: "Swimming Pool" },
        { icon: "🏀", label: "Basketball Court" },
        { icon: "🏸", label: "Badminton Court" },
        { icon: "🎱", label: "Pool Table & Indoor Games" },
        { icon: "🏃", label: "Jogging & Cycling Track" },
        { icon: "🏋️", label: "Open Gym Area" },
        { icon: "🧘", label: "Yoga & Meditation Zone" },
        { icon: "🛝", label: "Kids Play Area" }
      ]
    },
    {
      category: "LIFESTYLE FEATURES",
      items: [
        { icon: "🏢", label: "Premium Clubhouse" },
        { icon: "☕", label: "Cafeteria & Coffee Lounge" },
        { icon: "👥", label: "Community Centre" },
        { icon: "🌳", label: "Landscaped Green Parks" },
        { icon: "🎉", label: "Event & Celebration Area" },
        { icon: "👴", label: "Senior Citizen Sitting Zone" },
        { icon: "🏛️", label: "Multipurpose Hall" },
        { icon: "🪑", label: "Open Seating Spaces" }
      ]
    },
    {
      category: "INFRASTRUCTURE & SECURITY",
      items: [
        { icon: "💡", label: "Underground Electricity" },
        { icon: "🛣️", label: "Wide Concrete Roads" },
        { icon: "🚰", label: "Fresh Water Supply" },
        { icon: "🚽", label: "Sewage & Drainage" },
        { icon: "💡", label: "Street Lights" },
        { icon: "🚧", label: "Gated Entry & Exit" },
        { icon: "🛡️", label: "24x7 Security" },
        { icon: "🅿️", label: "Visitor Parking" }
      ]
    }
  ];

  return (
    <>
      {/* ==========================================
          2. MASTER LAYOUT PLAN SECTION (image_851e5a.jpg)
         ========================================== */}
      <section className={styles.masterLayoutSection}>
        <div className={styles.sectionContainer}>
          
          {/* Left Column Text details */}
          <div className={styles.leftContentBlock}>
            <div className={styles.badgeWrapper}>
              <span className={styles.badgeIcon}>📋</span>
              <span className={styles.badgeText}>MASTER LAYOUT PLAN</span>
            </div>

            <h2 className={styles.mainHeading}>
              METICULOUSLY <br />
              <span className={styles.headingHighlight}>ARCHITECTED</span> <br />
              SPACES
            </h2>

            <p className={styles.descriptionText}>
              Explore the detailed master plan of . Every plot is strategically
              positioned to ensure maximum ventilation, easy accessibility, and
              proximity to lush green parks and essential amenities.
            </p>

            <div className={styles.featureCardsStack}>
              <div className={styles.infoCard}>
                <div className={styles.iconContainer}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                  </svg>
                </div>
                <div className={styles.cardTextContent}>
                  <h3>OPTIMIZED ORIENTATION</h3>
                  <p>VASTU COMPLIANT PLANNING</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.iconContainer}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                  </svg>
                </div>
                <div className={styles.cardTextContent}>
                  <h3>HIGH RESOLUTION PDF</h3>
                  <p>DOWNLOAD FOR OFFLINE VIEWING</p>
                </div>
              </div>
            </div>

            <button className={styles.downloadCtaBtn} onClick={handleDownload}>
              DOWNLOAD SITE PLAN <span className={styles.btnIcon}>↓</span>
            </button>
          </div>

          {/* Right Column Canvas Dashboard Viewer */}
          <div className={styles.rightViewerBlock}>
            <div className={styles.interactiveFloatingLabel}>INTERACTIVE LAYOUT</div>
            
            <div className={styles.viewerDashboard}>
              <div className={styles.toolbarHeader}>
                <div className={styles.leftTools}>
                  <button className={styles.toolIconBtn}>☰</button>
                  <span className={styles.pageCounter}>1 / 1</span>
                  <span className={styles.divider}>|</span>
                  <button className={styles.toolIconBtn}>−</button>
                  <span className={styles.zoomPercentage}>18%</span>
                  <button className={styles.toolIconBtn}>+</button>
                </div>
                <div className={styles.rightTools}>
                  <button className={styles.toolIconBtn}>⚃</button>
                  <button className={styles.toolIconBtn}>⟳</button>
                  <span className={styles.divider}>|</span>
                  <button className={styles.toolIconBtn}>✎</button>
                  <button className={styles.toolIconBtn}>↶</button>
                  <button className={styles.toolIconBtn}>↷</button>
                  <span className={styles.divider}>|</span>
                  <button className={styles.toolIconBtn}>⨁</button>
                  <button className={styles.toolIconBtn} onClick={handleDownload}>↓</button>
                  <button className={styles.toolIconBtn}>🖨</button>
                  <button className={styles.toolIconBtn}>⋮</button>
                </div>
              </div>

              <div className={styles.viewerCanvasBody}>
                <div className={styles.thumbnailSidebar}>
                  <div className={styles.activeThumbnailFrame}>
                    <img src="/Banner/siteimage1.webp" alt="Blueprint miniature" className={styles.thumbnailImg} />
                  </div>
                  <div className={styles.thumbnailIndexNumber}>1</div>
                </div>
                <div className={styles.mainCanvasDisplay}>
                  <img src="/Banner/siteimage1.webp" alt="Project Master Layout Grid Map" className={styles.mainBlueprintImg} />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          1. DTCP & RERA COMPLIANCE BAR (image_85319f.png)
         ========================================== */}
      <div className={styles.complianceSection}>
        <div className={styles.complianceContainer}>
          
          {/* Left Heading Column */}
          <div className={styles.complianceLeft}>
            <h2 className={styles.complianceHeading}>
              DTCP & RERA <br />
              APPROVED TOWNSHIP
            </h2>
            <div className={styles.reraNumberPill}>
              <span className={styles.pillVerticalLine}></span>
              <p className={styles.reraNumberText}>RERA NO: HRERA-PKL-SNP-797-2025</p>
            </div>
          </div>

          {/* Right 3x2 Grid Features */}
          <div className={styles.complianceRightGrid}>
            <div className={styles.complianceCard}>
              <span className={styles.complianceIcon}>📄</span>
              <div className={styles.complianceCardText}>
                <h4>DTCP HARYANA</h4>
                <p>APPROVED</p>
              </div>
            </div>

            <div className={styles.complianceCard}>
              <span className={styles.complianceIcon}>🛡️</span>
              <div className={styles.complianceCardText}>
                <h4>RERA APPROVED</h4>
                <p>PROJECT</p>
              </div>
            </div>

            <div className={styles.complianceCard}>
              <span className={styles.complianceIcon}>🏛️</span>
              <div className={styles.complianceCardText}>
                <h4>DDJAY LICENSED</h4>
                <p>TOWNSHIP</p>
              </div>
            </div>

            <div className={styles.complianceCard}>
              <span className={styles.complianceIcon}>📋</span>
              <div className={styles.complianceCardText}>
                <h4>REGISTRY AVAILABLE</h4>
              </div>
            </div>

            <div className={styles.complianceCard}>
              <span className={styles.complianceIcon}>⚖️</span>
              <div className={styles.complianceCardText}>
                <h4>LOAN FACILITY</h4>
                <p>AVAILABLE</p>
              </div>
            </div>

            <div className={styles.complianceCard}>
              <span className={styles.complianceIcon}>✔️</span>
              <div className={styles.complianceCardText}>
                <h4>CLEAR</h4>
                <p>DOCUMENTATION</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ==========================================================
          3. PREMIUM AMENITIES & LIFESTYLE SECTION (image_8f1eab.png)
         ========================================================== */}
      <section className={styles.amenitiesSection}>
        <div className={styles.amenitiesHeader}>
          <h2 className={styles.amenitiesMainTitle}>PREMIUM AMENITIES & LIFESTYLE</h2>
          <div className={styles.accentUnderline}></div>
          <p className={styles.amenitiesSubTitle}>
            offers luxury living with modern amenities designed for all age groups.
          </p>
        </div>

        <div className={styles.amenitiesColumnsContainer}>
          {amenitiesData.map((col, colIndex) => (
            <div key={colIndex} className={styles.amenityCategoryColumn}>
              <div className={styles.categoryTitleWrapper}>
                <span className={styles.categoryVerticalIndicator}></span>
                <h3 className={styles.categoryHeading}>{col.category}</h3>
              </div>
              <div className={styles.amenityItemsStack}>
                {col.items.map((item, itemIndex) => (
                  <div key={itemIndex} className={styles.amenityRowCard}>
                    <span className={styles.amenityRowIcon}>{item.icon}</span>
                    <span className={styles.amenityRowLabel}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}