"use client";

import Image from "next/image";
import styles from "./themeToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";

const themeToggle = () => {


    const {toggle , theme} = useContext(ThemeContext);

    console.log(theme);

  return (
    <div className={styles.container}> 
      <div className={styles.ball}>
        <Image src="/moon.png" alt="" width={14} height={14} />
        <Image src="/sun.png" alt="" width={14} height={14} />
      </div>
    </div>
  )
}

export default themeToggle
