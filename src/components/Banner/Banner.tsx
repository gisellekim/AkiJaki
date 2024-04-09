import { useEffect, useState } from "react"
import Image from "next/image"
import useScreenSize from "@/hook/useScreenSize"

const enum ViewSizes {
  Mobile = "mobile",
  Tablet = "tablet",
  Desktop = "desktop",
}

export const Banner = () => {
  const [viewSize, setViewSize] = useState<string>(ViewSizes.Desktop)
  const screenSize = useScreenSize()

  useEffect(() => {
    if (screenSize.width <= 767) {
      setViewSize(ViewSizes.Mobile)
    } else if (screenSize.width <= 972) {
      setViewSize(ViewSizes.Tablet)
    } else {
      setViewSize(ViewSizes.Desktop)
    }
  }, [screenSize.width])

  return (
    <div className="w-full image-container">
      <a href="#">
        <Image
          src={`${
            viewSize === ViewSizes.Mobile
              ? "/banner_1_mobile.webp"
              : viewSize === ViewSizes.Tablet
              ? "/banner_1_tablet.webp"
              : "/banner_1.webp"
          }`}
          layout="fill"
          alt="banner"
          className="image"
        />
      </a>
    </div>
  )
}
