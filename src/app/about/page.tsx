import Image from "next/image";
import styles from './about.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>About Us</h1>
      <div className={styles.flexWrapper}>
        <div className={styles.flexItem}>
          <Image
            src="/bg-image1.jpeg"
            alt="Restaurant Interior"
            width={600}
            height={400}
            className={styles.image}
          />
        </div>
        <div>
          <p className={styles.text}>
            Welcome to Sindhi Zaika Restaurant, where we blend tradition with
            innovation to create an unforgettable dining experience. Our journey
            began in 2010 with a simple mission: to bring delicious,
            high-quality food to our community. Over the years, we have grown
            and evolved, but our commitment to excellence remains unchanged.
          </p>
          <p className={styles.text}>
            Our chefs are passionate about using the freshest ingredients to
            craft dishes that are both flavorful and visually stunning. From our
            signature appetizers to our decadent desserts, every item on our
            menu is designed to delight your senses.
          </p>
          <p className={styles.text}>
            We believe that dining out is more than just a meal; it&apos;s an
            experience. That&apos;s why we have meticulously designed our restaurant
            to offer a warm and inviting atmosphere, perfect for any occasion.
            Whether you&apos;re celebrating a special event or enjoying a casual meal
            with friends, Niche Restaurant is the place to be.
          </p>
          <p className={styles.text}>
            Join us and discover why Sindhi Zaika Restaurant is a favorite among locals
            and visitors alike. We look forward to serving you and making your
            dining experience truly memorable.
          </p>
        </div>
      </div>

      <div className={styles.flexWrapper}>
        <div>
          <h2 className={styles.title}>Our Philosophy</h2>
          <p className={styles.text}>
            At Sindhi Zaika Restaurant, we believe that great food starts with great
            ingredients. We source our produce, meat, and seafood from trusted
            local suppliers who share our commitment to quality and
            sustainability. This ensures that every dish we serve is fresh,
            flavorful, and responsibly sourced.
          </p>
          <p className={styles.text}>
            Our culinary team is dedicated to pushing the boundaries of
            traditional cuisine, blending classic techniques with modern flair.
            We strive to create dishes that are not only delicious but also
            visually appealing, offering a feast for both the eyes and the
            palate.
          </p>
          <p className={styles.text}>
            We also understand the importance of community. Our restaurant is a
            place where people can come together to share a meal, celebrate
            special moments, and create lasting memories. We are proud to be a
            part of our local community and to contribute to its vibrancy and
            diversity.
          </p>
        </div>
        <div>
          <Image
            src="/chef4.webp"
            alt="Chef Preparing Food"
            width={600}
            height={400}
            className={styles.image}
          />
          <p className={`${styles.text} ${styles.mt4}`}>
            Our talented chefs are at the heart of Sindhi Zaika Restaurant. They bring
            creativity, expertise, and a passion for culinary excellence to
            every dish they prepare. Their dedication to quality and innovation
            ensures that each meal is a work of art.
          </p>
        </div>
      </div>

      <div>
        <h2 className={styles.title}>Our Team</h2>
        <p className={styles.text}>
          We are proud of our team at Sindhi Zaika Restaurant. Each member, from our
          skilled chefs to our attentive servers, plays a crucial role in
          delivering an exceptional dining experience. We believe in fostering a
          positive and inclusive work environment where every team member can
          thrive and grow.
        </p>
        <p className={styles.text}>
          Our staff is trained to provide outstanding service, ensuring that
          every guest feels welcome and valued. We are committed to continuous
          learning and improvement, regularly updating our skills and knowledge
          to stay at the forefront of the culinary industry.
        </p>
        <p className={styles.text}>
          Whether you are a regular patron or a first-time visitor, you can
          expect the same level of warmth, professionalism, and dedication from
          our team. We look forward to welcoming you to Niche Restaurant and
          making your dining experience truly special.
        </p>
        <Image
          src="/team3.jpg"
          alt="Restaurant Team"
          width={1200}
          height={800}
          className={styles.image}
        />
      </div>

      <div>
        <h2 className={styles.title}>Our Location</h2>
        <p className={styles.text}>
          Sindhi Zaika Restaurant is conveniently located in the heart of the city,
          making it an ideal spot for both locals and visitors. Our address is:
        </p>
        <p className={`${styles.text} ${styles.fontBold}`}>
          Main Autobhan Road,
          <br />
          Near Giddu Chowk Hyderabad.
        </p>
        <p className={styles.text}>
          We offer ample parking and are easily accessible by public
          transportation. Our beautiful surroundings and elegant interiors
          provide the perfect backdrop for a memorable dining experience.
        </p>
        <p className={styles.text}>
          Come and visit us! We look forward to serving you and making your time
          at Sindhi Zaika Restaurant truly exceptional.
        </p>
        <Image
          src="/map.webp"
          alt="Restaurant Location"
          width={1200}
          height={800}
          className={`${styles.image} ${styles.mt4}`}
        />
      </div>
    </div>
  );
}
