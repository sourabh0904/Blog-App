import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/themeToggle";
import AuthLink from "../AuthLinks/authLinks";

const navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={30} height={30} />
        <Image src="/instagram.png" alt="instagram" width={30} height={30} />
        <Image src="/youtube.png" alt="youtube" width={30} height={30} />
      </div>
      <div className={styles.logo}>BLOGING</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link }>Homepage</Link>
        <Link href="/" className={styles.link }>Contact</Link>
        <Link href="/" className={styles.link }>About</Link>
        <AuthLink />
      </div>
    </div>
  );
};

export default navbar;
