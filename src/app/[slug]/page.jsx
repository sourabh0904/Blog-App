import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "../../components/Menu/menu";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infocontainer}>
        <div className={styles.textcontainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src="/p1.jpeg"
                alt=""
                fill
                className={styles.avatar}
              ></Image>
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Sourabh</span>
              <span className={styles.date}>12.05.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.Image}></Image>ß
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis consequuntur cupiditate id vero commodi! Modi esse
              minus ad obcaecati hic expedita beatae dolore laudantium
              aspernatur.
            </p>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
            <p style={{ marginTop: 20 }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis consequuntur cupiditate id vero commodi! Modi esse
              minus ad obcaecati hic expedita beatae dolore laudantium
              aspernatur.
            </p>
            <p style={{ marginTop: 20 }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis consequuntur cupiditate id vero commodi! Modi esse
              minus ad obcaecati hic expedita beatae dolore laudantium
              aspernatur.
              <b>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                eos?
              </b>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              alias at magni. Unde fugiat voluptate illum qui dignissimos
              accusamus eveniet nam quod ducimus! Nulla quos quia provident
              ratione facilis, amet culpa recusandae minus molestiae tempora
              odit praesentium corrupti possimus corporis aperiam obcaecati,
              repellat quo a ipsum rerum aspernatur vitae blanditiis at. Sed
              vitae, aliquam sapiente assumenda, cumque nihil at quidem, alias
              corrupti totam reiciendis quo iusto placeat ipsa eveniet eligendi?
            </p>
            <p style={{ marginTop: 20 }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis consequuntur cupiditate id vero commodi! Modi esse
              minus ad obcaecati hic expedita beatae dolore laudantium
              aspernatur.
            </p>
            <p style={{ marginTop: 20 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              deleniti hic, tempora quasi molestias ullam numquam error
              provident animi nesciunt voluptatem unde incidunt! Dolorem itaque
              consectetur laborum mollitia aliquid sed quis quo, minus nisi
              rerum hic sit velit provident eligendi totam assumenda quisquam
              fugiat sunt corporis illum dicta quos quam corrupti repellendus.
              Nam officia aliquam rem sunt odit quibusdam id. Neque
              exercitationem consequatur animi, ex accusantium corporis delectus
              odio aspernatur numquam, ipsum suscipit? Nemo cumque architecto
              provident obcaecati odit itaque voluptates libero fugit.
              Reiciendis, modi facere vitae deserunt culpa omnis, architecto
              vero provident rerum aliquid, necessitatibus pariatur nam corporis
              possimus!
            </p>
            <p style={{marginTop: 20}}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
              dicta quaerat temporibus ipsa vero, libero mollitia error totam,
              cumque sit unde harum id? Deleniti dolorum unde saepe! Numquam
              recusandae excepturi aperiam quidem a nulla quos maiores assumenda
              nemo architecto, blanditiis iure amet eligendi id fuga. Sed autem
              ab sit culpa numquam, minima voluptatibus enim repellat
              necessitatibus. Quaerat alias voluptates vitae eius? Quis cum
              saepe laudantium earum illum odio voluptate atque repellendus hic
              mollitia alias neque ipsum ea fugit laboriosam, quasi delectus
              officiis eius nam adipisci totam eos blanditiis nisi voluptatem!
              Accusamus rerum ex aut, consectetur ullam, voluptatem error
              deserunt ad inventore saepe possimus molestias reprehenderit,
              praesentium non totam neque incidunt voluptatum quas harum at
              tenetur doloribus facilis aperiam? Dicta quia quod fuga voluptas
              quos. Temporibus molestiae architecto suscipit. Aut provident
              quidem dolores officiis facere, aliquam qui repudiandae mollitia
              corrupti laboriosam totam quos quaerat unde vero ab, sequi nihil
              dignissimos ea consectetur repellat pariatur sunt error est. Odio
              fugiat perferendis excepturi porro cum placeat. Quisquam placeat
              perferendis eum veritatis a assumenda.
            </p>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
