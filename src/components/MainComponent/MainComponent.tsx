import { useContext, useEffect } from "react"
import useScreenSize from "@/hook/useScreenSize"
import { MenuContext, initialState } from "@/context/context"
import { Front } from "@/app/Front"

export const MainComponent = () => {
  const menu = useContext(MenuContext)
  const screenSize = useScreenSize()

  const closeAllMenus = () => {
    if (menu.state.showMobileMenu || menu.state.showUserMenu) {
      setTimeout(() => {
        menu.setState(initialState)
      }, 100)
    }
  }

  useEffect(() => {
    menu.setState(initialState)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenSize.width])

  return (
    <main
      className="flex min-h-screen flex-col items-center"
      onTouchEnd={closeAllMenus}
      onMouseUp={closeAllMenus}
    >
      <Front />
    </main>
  )
}
