const SearchOptions = ({ isFullTime, setIsFullTime }) => {
  // const handleFindLocation = (e) => {
  //   e.preventDefault()
  // }
  return (
    <div className="flex flex-col gap-4">
      <label className="px-3 flex items-center gap-2 font-pop font-medium text-sm text-blue-c334680">
        <input
          type="checkbox"
          onChange={(e) => {
            setIsFullTime(e.target.checked)
          }}
          defaultChecked={isFullTime}
        />
        <p>Full time</p>
      </label>
      <form onSubmit={(e) => handleFindLocation(e)} className="">
        <label
          htmlFor="location"
          className="font-pop font-bold text-sm text-gray-cB9BDCF"
        >
          LOCATION
        </label>
        <div className="p-2 flex items-center rounded-md shadow-md bg-white">
          <span className="p-2 text-gray-cB9BDCF material-icons">public</span>
          <input
            id="location"
            placeholder="City, state, zip code or country"
            className="w-full placeholder-gray-cB9BDCF font-rob font-normal text-xs text-black-c282538 focus:outline-none"
          />
        </div>
      </form>
    </div>
  )
}

export default SearchOptions
