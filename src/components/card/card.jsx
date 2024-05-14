import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imagecontainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
      </div>
      <div className={styles.textcontainer}>
        <div className={styles.details}>
          <span className={styles.date}>09.04.2024 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          iure minus recusandae molestias magni laboriosam, sint numquam
          provident. Consectetur, nam totam veritatis quisquam iure est.
        </p>
        <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  ); 
};

export default card;
