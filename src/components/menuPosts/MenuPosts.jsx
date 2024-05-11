import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MenuPosts = () => {
  return (
    <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imagecontainer}>
            <Image src="/p1.jpeg" alt="p1" fill className={styles.image} />
          </div>
          <div className={styles.textcontainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Sourabh - </span>
              <span className={styles.date}>11.5.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imagecontainer}>
            <Image src="/p1.jpeg" alt="p1" fill className={styles.image} />
          </div>
          <div className={styles.textcontainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              Culture
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Sourabh - </span>
              <span className={styles.date}>11.5.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imagecontainer}>
            <Image src="/p1.jpeg" alt="p1" fill className={styles.image} />
          </div>
          <div className={styles.textcontainer}>
            <span className={`${styles.category} ${styles.food}`}>
              Food
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Sourabh - </span>
              <span className={styles.date}>11.5.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imagecontainer}>
            <Image src="/p1.jpeg" alt="p1" fill className={styles.image} />
          </div>
          <div className={styles.textcontainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Sourabh - </span>
              <span className={styles.date}>11.5.2024</span>
            </div>
          </div>
        </Link>
      </div>
  )
}

export default MenuPosts
