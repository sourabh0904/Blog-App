"use client";

import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";

//status can be authenticated or notauthenticated here we assume it temporarily as notauthenticated
const status = "notauthenticated";

const authLinks = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login" className={styles.link}>Login</Link>
      ) : (
        <>
          <Link href="/logout" className={styles.link}>Write</Link>
          <span className={styles.Link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={()=> setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/logout">Write</Link>
              <span className={styles.Link}>Logout</span>
            </> 
          )}
        </div>
      )}
    </>
  );
};

export default authLinks;
