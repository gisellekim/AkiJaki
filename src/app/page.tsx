import Head from "next/head"
import { MainComponent } from "@/components/MainComponent"

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Aki Jaki!</title>
      </Head>
      <MainComponent />
    </>
  )
}
