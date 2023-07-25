import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { TYPE_SAMPLE } from "@/util/string";
import { TypeTester } from "@/components/type-tester";
import { UserButton } from "@clerk/nextjs";
import { GetWritingSamples } from "@/services/samples";
import { WritingSample } from "@/services/samples/type";

export default function Home() {
  const [samples, setSamples] = useState<WritingSample[]>([]);
  const [targetSample, setTargeSample] = useState<WritingSample>();
  useEffect(() => {
    // Example usage:
    GetWritingSamples()
      .then((samples) => {
        console.log("SAMPLES: ", samples);
        setSamples(samples);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <UserButton afterSignOutUrl="/" />

      <select
        onChange={(e) => {
          const sampleId = e.target.value;
          const sample = samples.find((s) => s.id === sampleId);
          setTargeSample(sample);
        }}
      >
        {samples.map((sample) => {
          return (
            <option key={sample.id} value={sample.id}>
              {sample.title}
            </option>
          );
        })}
      </select>

      <main className={styles.main}>
        <TypeTester
          sampleText={targetSample ? targetSample.content : TYPE_SAMPLE}
          onComplete={() => {}}
        />
      </main>
    </>
  );
}
