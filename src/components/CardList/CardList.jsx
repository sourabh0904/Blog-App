import React from 'react'
import styles from "./CardList.module.css";
import Pagination from "../Pagination/Pagination";
import Image from 'next/image';

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <div className={styles.post}>
          <div className={styles.imagecontainer}>
            {/* <Image src="/p1.jpeg" alt='' fill/> */}
          </div>
          <div className={styles.textcontainer}></div>
        </div>
      </div>
        <Pagination />
    </div>
  )
}

export default CardList
