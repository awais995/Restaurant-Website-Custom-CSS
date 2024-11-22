import React from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Contact Us</h2>
        <form className={styles.formContainer}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="name">Name</label>
            <input className={`${styles.input}`} type="text" id="name" />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">Email</label>
            <input className={styles.input} type="email" id="email" />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="message">Message</label>
            <textarea className={`${styles.input} ${styles.textarea}`} id="message" rows={4}></textarea>
          </div>
          <button className={styles.button}>Submit</button>
        </form>
      </div>
    </section>
  );
}
