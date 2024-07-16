"use client"
import React from 'react'
import styles from "./pagination.module.css";  // Import css modules stylesheet as styles

const pagination = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Previous</button>
      <button className={styles.button}>Next</button>
    </div>
  )
}

export default pagination
