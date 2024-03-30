type TButtonUser = {
  onClick: () => void
}

export const ButtonUser = ({ onClick }: TButtonUser) => {
  return (
    <button type="button" id="user-menu-button" onClick={onClick}>
      <span className="sr-only">Open user menu</span>
      <svg
        className="w-7 lg:w-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="rgba(0,0,0,.7)"
        viewBox="0 0 20 20"
      >
        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"></path>
      </svg>
    </button>
  )
}
