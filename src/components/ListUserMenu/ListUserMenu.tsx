export const ListUserMenu = () => {
  const userMenus = ["My Account", "My Orders", "Settings", "Sign Out"]

  return (
    <>
      <div className="px-4 py-3">
        <span className="block text-sm">Giselle Kim</span>
        <span className="block text-sm truncate">giselle@akijaki.com</span>
      </div>
      <ul className="py-2 cursor-pointer" aria-labelledby="user-menu-button">
        {userMenus.map((menu: string, index: number) => (
          <li
            key={index}
            className="hover:bg-primary hover:text-white px-3 leading-10"
          >
            {menu}
          </li>
        ))}
      </ul>
    </>
  )
}
