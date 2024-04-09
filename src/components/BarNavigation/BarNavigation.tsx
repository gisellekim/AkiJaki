import { useContext } from "react"
import Image from "next/image"
import { MenuContext } from "@/context/context"
import { ListGlobalMenu } from "../ListGlobalMenu"
import { ListSubMenu } from "../ListSubMenu"
import { ButtonHamburger } from "../ButtonHamburger"

export const BarNavigation = () => {
  const menu = useContext(MenuContext)

  return (
    <div className="w-full bg-white flex justify-center">
      <div className="w-10/12 flex p-2 items-center justify-between mx-auto p-2 px-4 relative">
        <ButtonHamburger
          onClick={() => {
            setTimeout(() => {
              menu.setState({
                showMobileMenu: !menu.state.showMobileMenu,
                showUserMenu: false,
              })
            }, 100)
          }}
        />
        <div className="w-3/12 lg:w-2/12 px-0 lg:px-2 xl:w-3/12 xl:px-4">
          <div className="image-container">
            <a href="#">
              <Image
                src="/logo.webp"
                layout="fill"
                alt="logo"
                className="image"
              />
            </a>
          </div>
        </div>
        <div
          className={`${
            menu.state.showMobileMenu
              ? "absolute top-10 left-0 z-10 bg-white rounded-lg shadow w-auto"
              : "hidden"
          } w-9/12 md:flex xl:w-7/12 `}
          id="navbar-mobile"
        >
          <ListGlobalMenu />
        </div>
        <div className="w-1/12 lg:w-3/12 flex">
          <ListSubMenu />
        </div>
      </div>
    </div>
  )
}
