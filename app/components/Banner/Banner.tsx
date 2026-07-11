"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import styles from "./Banner.module.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function Banner() {
  const slidesData = [
    { id: 1, image: "/Banner/siteimage1.webp" },
    { id: 2, image: "/Banner/siteimage3.webp" },
    { id: 3, image: "/Banner/siteimage5.webp" },
  ];

  return (
    <>
    <div className={styles.bannerContainer}>
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect={"fade"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className={styles.mySwiper}
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={styles.slideBackground}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Left Side Overlay with Content Gradient */}
              <div className={styles.overlay}>
                <div className={styles.contentWrapper}>
                  
                  {/* Top Badge */}
                  <div className={styles.badge}>
                    <span className={styles.badgeIcon}>🏛</span>
                    HARYANA GOVT. APPROVED TOWNSHIP
                  </div>

                  {/* Main Headings */}
                  <h1 className={styles.mainHeading}>
                    DEEN DAYAL
                    <span className={styles.subHeading}>JAN AWAS YOJNA</span>
                  </h1>

                  {/* Location Tag */}
                  <div className={styles.locationTag}>
                    <span className={styles.line}></span>
                    <span className={styles.locationText}>Sector 6,  Kharkhoda </span>
                  </div>

                  {/* Feature Tags Row */}
                  <div className={styles.tagsContainer}>
                    <div className={styles.priceTag}>₹65 Lakh*</div>
                    <div className={styles.featureTag}>STILT + 4 FLOORS</div>
                    <div className={styles.featureTag}>HRERA APPROVED</div>
                  </div>

                  {/* Registration Status Alert */}
                  <div className={styles.statusAlert}>
                    <span className={styles.squareDot}>■</span>
                    REGISTRATION STATUS: <span className={styles.closedText}>OPEN</span>
                  </div>

                  {/* Bottom Footer Text within banner */}
                  <div className={styles.bannerFooter}>
                    ✦ DTCP LICENSED · HRERA REGISTERED · FULLY REFUNDABLE REGISTRATION AMOUNT
                  </div>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    {/* Features Grid Box Section from image_82e74b.png */}
<div className={styles.featuresContainer}>
  <div className={styles.featuresGrid}>
    
    {/* Card 1 */}
    <div className={styles.featureCard}>
      <h3>Registration Last Date - 15 July 2026</h3>
      <p className={styles.dangerText}>Registration Open</p>
      <p className={styles.subText}>Limited plots available. Book yours now!</p>
    </div>

    {/* Card 2 */}
    <div className={styles.featureCard}>
      <h3>Registration Open</h3>
      <p className={styles.mutedHeading}>Allotment Date 18 July 2026</p>
      <p className={styles.subText}>Book your premium plot today.</p>
    </div>

    {/* Card 3 */}
    <div className={styles.featureCard}>
      <h3>Attractive Payment Plan</h3>
      <p className={styles.mutedHeading}>10:40:30:20</p>
      <p className={styles.subText}>EMI options available with partner banks.</p>
    </div>

    {/* Card 4 */}
    <div className={styles.featureCard}>
      <h3>Loan Facility Available</h3>
      <p className={styles.mutedHeading}>Stilt + 4 Floors Approved</p>
      <p className={styles.subText}>Pre-approved home loans ICICI.</p>
    </div>

  </div>
</div>
    </>
  );
}