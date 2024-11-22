import Image from "next/image";
import styles from './Gallery.module.css';

const Gallery = () => {
  return (
    <section id="gallery" className={styles.gallerySection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Gallery</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <Image src="/bg-image1.avif" alt="Gallery Image" width={400} height={300} className={styles.image} />
          </div>
          <div className={styles.card}>
            <Image src="/bg-image1.jpeg" alt="Gallery Image" width={400} height={300} className={styles.image} />
          </div>
          <div className={styles.card}>
            <Image src="/bg-image2.jpeg" alt="Gallery Image" width={400} height={300} className={styles.image} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
