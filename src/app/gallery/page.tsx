import React from 'react';
import styles from './Gallery.module.css'; // Import CSS Module

export default function Gallery() {
  return (
    <section id="gallery" className={styles.gallerySection}>
      <div className={`${styles.container} ${styles.containerLarge} ${styles.containerExtraLarge}`}>
        <h2 className={styles.header}>Gallery</h2>
        <div className={styles.gridWrapper}>
          {/* Gallery Item 1 */}
          <div className={styles.gridItem}>
            <img
              src="/bg-image1.jpeg"
              alt="Gallery Image 1"
              className={styles.image}
            />
            <p className={styles.text}>
              A glimpse of our elegant dining area, perfect for any occasion.
            </p>
          </div>

          {/* Gallery Item 2 */}
          <div className={styles.gridItem}>
            <img
              src="/bhugal-gosht.jpeg"
              alt="Gallery Image 2"
              className={styles.image}
            />
            <p className={styles.text}>
              Our beautifully presented signature dish, ready to delight your
              taste buds.
            </p>
          </div>

          {/* Gallery Item 3 */}
          <div className={styles.gridItem}>
            <img
              src="/cozy-corner2.jpeg"
              alt="Gallery Image 3"
              className={styles.image}
            />
            <p className={styles.text}>
              A cozy corner of our restaurant, perfect for intimate dining
              experiences.
            </p>
          </div>

          {/* Gallery Item 4 */}
          <div className={styles.gridItem}>
            <img
              src="/fresh-ingredients.jpeg"
              alt="Gallery Image 4"
              className={styles.image}
            />
            <p className={styles.text}>
              Fresh ingredients are the foundation of our delicious meals.
            </p>
          </div>

          {/* Gallery Item 5 */}
          <div className={styles.gridItem}>
            <img
              src="/sindhi-deserts.jpeg"
              alt="Gallery Image 5"
              className={styles.image}
            />
            <p className={styles.text}>
              An array of our specialty desserts, crafted to perfection.
            </p>
          </div>

          {/* Gallery Item 6 */}
          <div className={styles.gridItem}>
            <img
              src="/evening-env.jpeg"
              alt="Gallery Image 6"
              className={styles.image}
            />
            <p className={styles.text}>
              The vibrant atmosphere of our restaurant during evening hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
