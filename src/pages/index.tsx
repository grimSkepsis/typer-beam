import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
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
