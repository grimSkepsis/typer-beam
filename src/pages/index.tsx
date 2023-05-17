import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import {
  DUNE_TYPE_SAMPLE,
  LARGE_TYPE_SAMPLE,
  TYPE_SAMPLE,
  gradeUserString,
} from "@/util/string";
import { useStopwatch } from "react-timer-hook";
import { TypeTester } from "@/components/type-tester";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <TypeTester sampleText={DUNE_TYPE_SAMPLE} />
      </main>
    </>
  );
}
