export const ButtonHamburger = () => {
  return (
    <button type="button" className="md:hidden" id="hamburger-menu-button">
      <span className="sr-only">Open menu</span>
      <svg
        id="hamburger-menu-icon"
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="rgba(0,0,0,.7)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
  )
}
