import Head from "next/head";
import Image from "next/image";
import SubscribeButton from "../components/SubscribeButton";

import avatar from "../public/images/avatar.svg";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get acess to all the publications <br />
            <span>for $9.90 month</span>
            <SubscribeButton />
          </p>
        </section>

        <Image src={avatar} alt="Girl Codding" />
      </main>
    </>
  );
}
