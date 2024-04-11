import { useEffect, useState } from "react"
import Image from "next/image"
import useScreenSize from "@/hook/useScreenSize"
import imageDesktop from "../../../public/banner_1.webp"
import imageTablet from "../../../public/banner_1_tablet.webp"
import imageMobile from "../../../public/banner_1_mobile.webp"

const enum ViewSizes {
  Mobile = "mobile",
  Tablet = "tablet",
  Desktop = "desktop",
}

export const Banner = () => {
  const screenSize = useScreenSize()
  let bannerImage = imageDesktop

  if (screenSize.width <= 767) {
    bannerImage = imageMobile
  } else if (screenSize.width <= 972) {
    bannerImage = imageTablet
  }

  return (
    <div className="w-full image-container">
      <a href="#">
        <Image
          src={bannerImage}
          layout="fill"
          alt="banner"
          className="image"
          priority
        />
      </a>
    </div>
  )
}
