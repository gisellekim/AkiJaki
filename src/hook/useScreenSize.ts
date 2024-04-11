import { useState, useEffect } from "react"

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: 1024,
  })

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
      })
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return screenSize
}

export default useScreenSize
