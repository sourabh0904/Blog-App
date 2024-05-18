import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

const comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
            <textarea placeholder="write a comment..." className={styles.input} />
            <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
            <div className={styles.user}>
            <Image
                src="/p1.jpeg"
                alt=""
                width={50}
                height={50}
                className={styles.image}
              />
                <span className={styles.username}>Sourabh</span>
                <span className={styles.date}>12.05.2024</span>
            </div>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                voluptate, tempore, quidem, doloribus quod nesciunt quae autem
                voluptatum quas vel quos.
            </p>
        </div>
      </div>
      <div className={styles.comments}>
        <div className={styles.comment}>
            <div className={styles.user}>
            <Image
                src="/p1.jpeg"
                alt=""
                width={50}
                height={50}
                className={styles.image}
              />
                <span className={styles.username}>Sourabh</span>
                <span className={styles.date}>12.05.2024</span>
            </div>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                voluptate, tempore, quidem, doloribus quod nesciunt quae autem
                voluptatum quas vel quos.
            </p>
        </div>
      </div>
      <div className={styles.comments}>
        <div className={styles.comment}>
            <div className={styles.user}>
            <Image
                src="/p1.jpeg"
                alt=""
                width={50}
                height={50}
                className={styles.image}
              />
                <span className={styles.username}>Sourabh</span>
                <span className={styles.date}>12.05.2024</span>
            </div>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                voluptate, tempore, quidem, doloribus quod nesciunt quae autem
                voluptatum quas vel quos.
            </p>
        </div>
      </div>
      <div className={styles.comments}>
        <div className={styles.comment}>
            <div className={styles.user}>
            <Image
                src="/p1.jpeg"
                alt=""
                width={50}
                height={50}
                className={styles.image}
              />
                <span className={styles.username}>Sourabh</span>
                <span className={styles.date}>12.05.2024</span>
            </div>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                voluptate, tempore, quidem, doloribus quod nesciunt quae autem
                voluptatum quas vel quos.
            </p>
        </div>
      </div>
    </div>
  );
};

export default comments;
