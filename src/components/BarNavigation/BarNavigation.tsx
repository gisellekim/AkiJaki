import Image from "next/image"
import { ListGlobalMenu } from "../ListGlobalMenu"
import { ButtonHamburger } from "../ButtonHamburger"
import { Dropdown } from "../Dropdown"
import { Search } from "../Search"
import { ButtonUser } from "../ButtonUser"
import { ListUserMenu } from "../ListUserMenu"

export const BarNavigation = () => {
  return (
    <div className="w-full bg-white flex justify-center">
      <div className="w-10/12 flex p-2 items-center justify-between mx-auto p-2 px-4 relative">
        <div
          id="logo-container"
          className="md:order-1 max-md:order-2 w-3/12 lg:w-2/12 px-0 lg:px-2 xl:w-3/12 xl:px-4"
        >
          <div className="image-container">
            <a href="#" className="relative">
              <Image
                src="/logo.webp"
                fill
                alt="logo"
                sizes="100%"
                className="image"
              />
            </a>
          </div>
        </div>
        <div
          id="global-menu-container"
          className="md:order-2 md:w-9/12 xl:w-7/12 max-md:order-1 max-md:w-1/12"
        >
          <div className="max-md:hidden md:flex" id="global-menu">
            <ListGlobalMenu />
          </div>
          <div className="md:hidden">
            <Dropdown
              icon={<ButtonHamburger />}
              list={<ListGlobalMenu />}
              style="absolute top-10 left-0 z-10 bg-white rounded-lg shadow w-auto"
            />
          </div>
        </div>
        <div
          id="user-menu-container"
          className="md:order-3 max-md:order-3 w-1/12 lg:w-3/12 flex"
        >
          <ul className="w-full flex items-center justify-between cursor-pointer">
            <li className="hidden lg:block lg:w-3/5 ">
              <Search />
            </li>
            <li className="w-full flex justify-end lg:w-1/5 lg:justify-center">
              <Dropdown
                icon={<ButtonUser />}
                list={<ListUserMenu />}
                style="absolute top-10 right-0 z-10 bg-white z-10 rounded-lg shadow md:top-12"
              />
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
        </div>
      </div>
    </div>
  )
}
