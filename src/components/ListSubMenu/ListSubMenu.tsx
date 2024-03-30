import { useContext } from "react"
import { MenuContext, initialState } from "@/context/context"
import { Search } from "../Search"
import { ButtonUser } from "../ButtonUser"
import { ListUserMenu } from "../ListUserMenu"

export const ListSubMenu = () => {
  const menu = useContext(MenuContext)

  return (
    <ul className="w-full flex items-center justify-between cursor-pointer">
      <li className="hidden lg:block lg:w-3/5 ">
        <Search />
      </li>
      <li className="w-full flex justify-end lg:w-1/5 lg:justify-center">
        <ButtonUser
          onClick={() => {
            setTimeout(() => {
              menu.setState({
                showMobileMenu: false,
                showUserMenu: !menu.state.showUserMenu,
              })
            }, 100)
          }}
        />
        <div
          className={`${
            menu.state.showUserMenu
              ? "absolute top-10 right-0 z-10 bg-white z-10 rounded-lg shadow md:top-12"
              : "hidden"
          } `}
          id="user-dropdown"
          onMouseLeave={() => menu.setState(initialState)}
        >
          <ListUserMenu />
        </div>
      </li>
      <li className="hidden lg:block lg:w-1/5">
        <svg
          className="flex-shrink-0 w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="rgba(0,0,0,.6)"
          viewBox="0 0 18 21"
        >
          <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"></path>
        </svg>
      </li>
    </ul>
  )
}
