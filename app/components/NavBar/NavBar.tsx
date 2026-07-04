"use client";

import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.contact}>
          <span>📞:</span>
          <a href="tel:+919211494111">+91-9211494111</a>
        </div>

        <div className={styles.email}>
          <span>|</span>

          <span className={styles.emailLabel}>✉ EMAIL:</span>

          <a href="mailto:info@deendayaljanawasyojana Kharkhoda .org">
            info@deendayaljanawasyojana Kharkhoda .org
          </a>
        </div>
      </div>

      {/* Main Navbar */}

      <div className={styles.navbar}>

        <div className={styles.logo}>
          <img src="/Icon/DDJAY_logo.jpg" alt="logo" />
          <img src="/Icon/support.png" alt="logo" />
          <img src="/Icon/rera-logo.png" alt="logo" />  -
        </div>
        <div className={styles.centerHeading}>
        <p className={styles.govText}>GOVERNMENT OF HARYANA</p>
        <h1>DEEN DAYAL JAN AWAS YOJNA</h1>
        <p className={styles.locationText}>Sector 6,  Kharkhoda </p>
      </div>
      <ul className={styles.menu}>
        <li><a href="/brochure/brochure.pdf" target="_blank" rel="noopener noreferrer">BROCHURE</a></li>
        <li><a href="/rera/rera.pdf" target="_blank" rel="noopener noreferrer">HRERA LICENSE</a></li>
        <li><a href="/siteplan/siteplan.pdf" target="_blank" rel="noopener noreferrer">SITE PLAN</a></li>
        <li><a href="/pricelist/pricelist.pdf" target="_blank" rel="noopener noreferrer">PRICE LIST</a></li>
      </ul>

        <button className={styles.registerBtn}>
          REGISTRATION
          <br />
          CLOSED
        </button>

      </div>

      {/* Bottom Status */}

      <div className={styles.statusBar}>

        {/* <span className={styles.closed}>STATUS : CLOSED</span> */}

        <div className={styles.marquee}>
          <div className={styles.track}>
            ATTENTION: REGISTRATIONS CLOSED !!!! We are no longer accepting new applications or registration amounts. *** Active applications are under review by the allotment committee. *** REGISTRATION LAST DATE:
          </div>
        </div>

      </div>
    </>
  );
}