import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navigation from "@/components/navigation";
import { useState } from "react";
import { TYPE_SAMPLE, gradeUserString } from "@/util/string";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [text, setText] = useState("");
  const { correct, mistake, remaining } = gradeUserString(TYPE_SAMPLE, text);
  return (
    <>
      <main className={styles.main}>
        <div>
          <Navigation
            locations={[
              {
                display: "Home",
                pathname: "/",
              },
              {
                display: "About",
                pathname: "/about",
              },
              {
                display: "Settings",
                pathname: "/settings",
              },
            ]}
          />
          <h1 className={styles.title}>Welcome to TYPEBEAST!</h1>
          <p>
            <span style={{ color: "green" }}>{correct}</span>
            <span style={{ color: "red" }}>{mistake}</span>
            <span>{remaining}</span>
          </p>
          <input type="text" onChange={(e) => setText(e.target.value)} />
        </div>
      </main>
    </>
  );
}
