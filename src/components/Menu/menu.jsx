import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../MenuCategories/MenuCategories";

const menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />
      {/* <div className={styles.items}>
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
            <span className={`${styles.category} ${styles.food}`}>Food</span>
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
      </div> */}
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      {/* <div className={styles.categoryList}>
        <Link
          href="/blog?cat=style"
          className={`${styles.categoryItem} ${styles.style}`}
        >
          style
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.categoryItem} ${styles.fashion}`}
        >
          Fashion
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.categoryItem} ${styles.food}`}
        >
          Food
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.categoryItem} ${styles.travel}`}
        >
          Travel
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.categoryItem} ${styles.culture}`}
        >
          Culture
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.categoryItem} ${styles.coding}`}
        >
          Coding
        </Link>
      </div> */}
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts withImage={true} />
      {/* <div className={styles.items}>
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
            <span className={`${styles.category} ${styles.food}`}>Food</span>
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
      </div> */}
    </div>
  );
};

export default menu;
