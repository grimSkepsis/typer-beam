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
import { getUser } from "@/services/graphql";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  useEffect(() => {
    // Example usage:
    getUser("123")
      .then((user) => {
        console.log("USER: ", user);
      })
      .catch((error) => {
        console.error(error);
      });
  });
  return (
    <>
      <UserButton afterSignOutUrl="/" />

      <main className={styles.main}>
        <TypeTester sampleText={DUNE_TYPE_SAMPLE} />
      </main>
    </>
  );
}
