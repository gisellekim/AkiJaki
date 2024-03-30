export const Search = () => {
  return (
    <form>
      <label htmlFor="global-search" className="sr-only">
        Search
      </label>
      <div className="relative border-b">
        <input
          type="search"
          id="global-search"
          className="ps-1 w-full rounded-lg text-sm placeholder-gray"
          placeholder="Search"
          required
        />
        <button type="submit" className="absolute end-2 top-1">
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>
    </form>
  )
}
