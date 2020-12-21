const SearchBar = ({ getNewSearch, setIsDescription }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    getNewSearch()
  }

  return (
    <div className="py-10 px-5 rounded-md bg-image-searchbar bg-cover bg-center">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="p-1 flex gap-2 items-center rounded-md shadow-md bg-white"
      >
        <span className="pl-2 py-2 text-gray-cB9BDCF material-icons">
          work_outline
        </span>
        <input
          onChange={(e) => setIsDescription(e.target.value)}
          placeholder="Title, companies, expertise or benefits"
          className="w-full placeholder-gray-cB9BDCF font-rob font-normal text-xs text-black-c282538 focus:outline-none overflow-ellipsis focus:placeholder-transparent"
        />
        <button
          type="submit"
          className="px-8 py-4 rounded-md bg-blue-c1E86FF font-rob font-medium text-base text-white focus:outline-none"
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar
