"use client"

import Head from "next/head"
import { MenuContextProvider } from "@/context/context"
import { MainComponent } from "@/components/MainComponent"

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Aki Jaki!</title>
      </Head>
      <MenuContextProvider>
        <MainComponent />
      </MenuContextProvider>
    </>
  )
}
