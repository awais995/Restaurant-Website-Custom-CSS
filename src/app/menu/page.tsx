import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './menu.module.css';

const Menu = () => {
  return (
    <section id="menu" className={styles.menuSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Menu</h2>
        <div className={styles.menuGrid}>
          
          <div className={styles.menuItem}>
            <Image
              src="/Bhee.jpeg"
              alt="Signature Dish1"
              width={400}
              height={300}
              className={styles.image}
            />
            <h3 className={styles.dishTitle}>Bhee (Lotus Root) Curry</h3>
            <p className={styles.dishDescription}>
              A curry made with lotus root slices, cooked in a spicy tomato and onion gravy.
            </p>
            <div className={styles.orderButton}>
              <Link href="/contact">
                <button>Order Now</button>
              </Link>
            </div>
          </div>

          <div className={styles.menuItem}>
            <Image
              src="/Aloo-gosht.avif"
              alt="Signature Dish2"
              width={400}
              height={300}
              className={styles.image}
            />
            <h3 className={styles.dishTitle}>Aloo Gosht</h3>
            <p className={styles.dishDescription}>
              A flavorful curry made with tender pieces of meat (usually mutton or beef) and potatoes, cooked in a spiced gravy.
            </p>
            <div className={styles.orderButton}>
              <Link href="/contact">
                <button>Order Now</button>
              </Link>
            </div>
          </div>

          <div className={styles.menuItem}>
            <Image
              src="/Kheer.jpeg"
              alt="Signature Dish3"
              width={400}
              height={300}
              className={styles.image}
            />
            <h3 className={styles.dishTitle}>Kheer</h3>
            <p className={styles.dishDescription}>
              A rice pudding made with milk, sugar, and cardamom, garnished with nuts and saffron.
            </p>
            <div className={styles.orderButton}>
              <Link href="/contact">
                <button>Order Now</button>
              </Link>
            </div>
          </div>

          <div className={styles.menuItem}>
            <Image
              src="/Briyani.jpeg"
              alt="Signature Dish"
              width={400}
              height={300}
              className={styles.image}
            />
            <h3 className={styles.dishTitle}>Sindhi Briyani</h3>
            <p className={styles.dishDescription}>
              Sindhi Biryani is a spicy, aromatic rice dish with marinated meat, bold spices, and a tangy flavor, often garnished with fried onions and fresh herbs.
            </p>
            <div className={styles.orderButton}>
              <Link href="/contact">
                <button>Order Now</button>
              </Link>
            </div>
          </div>

          <div className={styles.menuItem}>
            <Image
              src="/kadhi-chawal.jpeg"
              alt="Signature Dish"
              width={400}
              height={300}
              className={styles.image}
            />
            <h3 className={styles.dishTitle}>Kadhi Chawal</h3>
            <p className={styles.dishDescription}>
              Kadhi Chawal is a comforting dish of spiced yogurt-based curry (kadhi) served with steamed rice (chawal), popular in Indian and Pakistani cuisine.
            </p>
            <div className={styles.orderButton}>
              <Link href="/contact">
                <button>Order Now</button>
              </Link>
            </div>
          </div>

          <div className={styles.menuItem}>
            <Image
              src="/Sindhi-Pulao.jpg"
              alt="Signature Dish"
              width={400}
              height={300}
              className={styles.image}
            />
            <h3 className={styles.dishTitle}>Sindhi Pulao</h3>
            <p className={styles.dishDescription}>
              Known for its rich and fragrant taste, Sindhi Pulao is a popular dish for special occasions and family gatherings.
            </p>
            <div className={styles.orderButton}>
              <Link href="/contact">
                <button>Order Now</button>
              </Link>
            </div>
          </div>

          <div className={styles.menuItem}>
            <Image
              src="/Bhindi.jpeg"
              alt="Signature Dish"
              width={400}
              height={300}
              className={styles.image}
            />
            <h3 className={styles.dishTitle}>Sindhi Bhindi</h3>
            <p className={styles.dishDescription}>
              Sindhi Bhindi is a flavorful, dry-cooked okra dish made with spices, onions, and green chilies, often garnished with fresh cilantro.
            </p>
            <div className={styles.orderButton}>
              <Link href="/contact">
                <button>Order Now</button>
              </Link>
            </div>
          </div>

          <div className={styles.menuItem}>
            <Image
              src="/bhugal-gosht.jpeg"
              alt="Signature Dish"
              width={400}
              height={300}
              className={styles.image}
            />
            <h3 className={styles.dishTitle}>Bhugal Gosht</h3>
            <p className={styles.dishDescription}>
              A slow-cooked mutton or beef dish where the meat is simmered with a rich mixture of onions, tomatoes, and spices until tender and flavorful. It&aposs often served with naan or roti.
            </p>
            <div className={styles.orderButton}>
              <Link href="/contact">
                <button>Order Now</button>
              </Link>
            </div>
          </div>

          <div className={styles.menuItem}>
            <Image
              src="/kheerni.jpeg"
              alt="Signature Dish"
              width={400}
              height={300}
              className={styles.image}
            />
            <h3 className={styles.dishTitle}>Sindhi Kheerni</h3>
            <p className={styles.dishDescription}>
              A traditional Sindhi dessert made with milk, sugar, and rice, flavored with cardamom and garnished with nuts like almonds and pistachios. It&aposs similar to the popular kheer but has its unique Sindhi twist.
            </p>
            <div className={styles.orderButton}>
              <Link href="/contact">
                <button>Order Now</button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Menu;
