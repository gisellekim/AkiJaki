export const ListGlobalMenu = () => {
  const GlobalMenus = [
    "Dog",
    "Cat",
    "Small Animal",
    "Fish",
    "Reptile",
    "Bird & Wild life",
  ]

  return (
    <ul
      className="w-full cursor-pointer flex justify-between font-medium flex-col py-2 rounded-lg md:px-4 md:flex-row lg:px-6 lg:justify-between xl:px-12"
      aria-labelledby="hamburger-menu-button"
    >
      {GlobalMenus.map((menu: string, index: number) => (
        <li
          key={index}
          className="leading-8 max-md:px-5 max-md:hover:bg-primary max-md:hover:text-white max-md:py-1"
        >
          {menu}
        </li>
      ))}
    </ul>
  )
}
