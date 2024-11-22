import React from 'react';
import styles from './contact.module.css'; // Import the CSS Module

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.header}>Contact Us</h2>
        <div className={styles.flexWrapper}>
          {/* Form Card */}
          <div className={styles.card}>
            <h3 className={styles.cardHeader}>Send your details</h3>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="name">
                  Name
                </label>
                <input className={styles.input} type="text" id="name" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="email">
                  Email
                </label>
                <input className={styles.input} type="email" id="email" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="message">
                  Message
                </label>
                <textarea className={styles.textarea} id="message" rows={4}></textarea>
              </div>
              <button className={styles.button}>Submit</button>
            </form>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardHeader}>Contact Details</h3>
            <p className={styles.cardText}>
              <strong>Address:</strong> Main Autobhan Road Near Giddu Chowk Hyderabad.
            </p>
            <p className={styles.cardText}><strong>Phone:</strong> 03025793739</p>
            <p className={styles.cardText}><strong>Email:</strong> email@example.com</p>

            <h3 className={styles.cardHeader}>Follow Us</h3>
            <div className={styles.socialLinks}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <img src="/fb-icon.jpeg" alt="Facebook" className={styles.icon} />
              </a>
              <a href="https://linkein.com/meetawaissoomronow" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <img src="/linkedin-icon.jpeg" alt="Twitter" className={styles.icon} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <img src="/instagram-icon.jpeg" alt="Instagram" className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
