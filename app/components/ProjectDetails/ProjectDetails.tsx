"use client";

import React from "react";
import styles from "./ProjectDetails.module.css";

export default function ProjectDetails() {
  const priceListData = [
    { size: "116.251", price: "₹55,000", reg: "₹31,000", booking: "₹6,39,380", allotment: "₹25,57,522", midTerm: "₹19,18,141", possession: "₹12,78,761", total: "₹63,93,805" },
    { size: "138.287", price: "₹55,000", reg: "₹31,000", booking: "₹7,60,578", allotment: "₹30,42,314", midTerm: "₹22,81,735", possession: "₹15,21,157", total: "₹76,05,785" },
    { size: "178.826", price: "₹55,000", reg: "₹31,000", booking: "₹9,83,543", allotment: "₹39,34,172", midTerm: "₹29,50,629", possession: "₹19,67,086", total: "₹98,35,930" },
    // { size: "145.31", price: "₹55,000", reg: "₹31,000", booking: "₹7,70,205", allotment: "₹33,27,599", midTerm: "₹24,76,082", possession: "₹16,50,722", total: "₹82,53,608" },
    // { size: "155.86", price: "₹55,000", reg: "₹31,000", booking: "₹8,28,230", allotment: "₹35,69,194", midTerm: "₹26,55,854", possession: "₹17,70,570", total: "₹88,52,488" }
  ];

  const locationAdvantages = [
    { title: "STRATEGIC LOCATION", desc: "Situated on the NH-34B (Rohtak-Rewari Highway), offering excellent connectivity to Delhi-NCR." },
    { title: "RELIANCE MET CITY PROXIMITY", desc: "Located near one of India's largest upcoming industrial townships and employment hubs." },
    { title: "WORLD-CLASS HEALTHCARE", desc: "Quick access to AIIMS  Kharkhoda  (Badsa), providing premier medical facilities nearby." },
    { title: "INDUSTRIAL & LOGISTICS HUB", desc: "Close to Indospace Industrial Park and other major economic drivers." },
    { title: "SEAMLESS CONNECTIVITY", desc: "Easy access to KMP Expressway and NH-34B for fast regional travel." },
    { title: "EXCELLENT PUBLIC TRANSPORT", desc: "Well-connected to  Kharkhoda  Bus Stand and  Kharkhoda  Railway Station." },
    { title: "PLANNED URBAN GROWTH", desc: "Part of a rapidly developing residential corridor with high capital appreciation potential." },
    { title: "MODERN SOCIAL INFRASTRUCTURE", desc: "Proximity to reputed schools, local markets, and essential services." },
    { title: "HIGH ROI POTENTIAL", desc: "An emerging hotspot for investors due to industrial growth in the  Kharkhoda -Rohtak belt." }
  ];

  return (
    <>
      <section className={styles.priceListSection}>
        <div className={styles.priceListHeader}>
          <h2 className={styles.regionHeading}>Sector 6,  Kharkhoda </h2>
          <p className={styles.reraSubHeading}>
            HRERA No.: HRERA-PKL-SNP-797-2025 (Deen Dayal Jan Awas Yojna Plots)
          </p>
        </div>

        <div className={styles.tableResponsiveWrapper}>
          <table className={styles.priceGridTable}>
            <thead>
              <tr className={styles.mainTableTitleRow}>
                <th colSpan={8} className={styles.tableBannerTitle}>PRICE LIST – PLOTS</th>
              </tr>
              <tr className={styles.columnHeaderRow}>
                <th>Unit Size (Sq.-Yd.)</th>
                <th>Unit Price (₹ Per Sq. Yd.)</th>
                <th>Registration Amount</th>
                <th>10% at the Time of Booking</th>
                <th>40% within 30 Days of Allotment / BBA Execution + includes 50% EDC/IDC</th>
                <th>30% within 60 Days of Allotment + includes 30% EDC/IDC</th>
                <th>20% on Offer of Possession + includes 20% EDC/IDC</th>
                <th>Total Cost*</th>
              </tr>
            </thead>
            <tbody>
              {priceListData.map((row, index) => (
                <tr key={index} className={styles.tableBodyRow}>
                  <td className={styles.boldCell}>{row.size}</td>
                  <td>{row.price}</td>
                  <td>{row.reg}</td>
                  <td>{row.booking}</td>
                  <td>{row.allotment}</td>
                  <td>{row.midTerm}</td>
                  <td>{row.possession}</td>
                  <td className={styles.boldCell}>{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.disclaimerLinkBox}>
          <span className={styles.disclaimerLink}>Refer Disclaimer</span>
        </div>
      </section>

      {/* ==========================================================
          SECTION 2: LOCATION ADVANTAGES (image_8fad30.jpg)
         ========================================================== */}
      <section className={styles.locationSection}>
        <div className={styles.locationHeader}>
          <h2 className={styles.locationMainTitle}>LOCATION ADVANTAGES</h2>
        </div>

        <div className={styles.locationFlexGrid}>
          {/* Left Side Checklist Stack */}
          <div className={styles.advantagesLeftStack}>
            {locationAdvantages.map((adv, idx) => (
              <div key={idx} className={styles.advantageRowItem}>
                <div className={styles.checkIconWrapper}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a5c41" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className={styles.advantageTextNode}>
                  <h4>{adv.title}</h4>
                  <p>{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side Layout Map Container */}
          <div className={styles.mapRightBlock}>
            <div className={styles.mapGraphicCard}>
              <img 
                src="/locations.jpg" 
                alt="Sector 6  Kharkhoda  Layout Map Route Guide" 
                className={styles.blueprintMapImg} 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}