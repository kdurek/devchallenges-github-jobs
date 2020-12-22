import { useState } from "react"

const SearchOptions = ({
  isFullTime,
  setIsFullTime,
  isLocation,
  setIsLocation,
}) => {
  const [inputLocation, setInputLocation] = useState("")

  return (
    <div className="flex flex-col gap-8">
      <label className="px-3 flex items-center gap-2 font-pop font-medium text-sm text-blue-c334680">
        <input
          type="checkbox"
          onChange={(e) => {
            setIsFullTime(e.target.checked)
          }}
          checked={isFullTime}
        />
        <p>Full time</p>
      </label>
      <div>
        <label
          htmlFor="location"
          className="font-pop font-bold text-sm text-gray-cB9BDCF"
        >
          LOCATION
        </label>
        <div className="p-2 flex items-center rounded-md shadow-md bg-white">
          <span className="p-2 text-gray-cB9BDCF material-icons">public</span>
          <input
            onChange={(e) => {
              setInputLocation(e.target.value)
              setIsLocation(e.target.value)
            }}
            value={inputLocation}
            placeholder="City, state, zip code or country"
            className="w-full placeholder-gray-cB9BDCF font-rob font-normal text-xs text-black-c282538 focus:outline-none"
          />
        </div>
        <div className="pt-6 flex flex-col gap-4">
          <label className="px-3 flex items-center gap-2 font-pop font-medium text-sm text-blue-c334680">
            <input
              onChange={(e) => {
                setInputLocation("")
                setIsLocation(e.target.value)
              }}
              checked={isLocation === "London"}
              type="radio"
              value="London"
            />
            London
          </label>
          <label className="px-3 flex items-center gap-2 font-pop font-medium text-sm text-blue-c334680">
            <input
              onChange={(e) => {
                setInputLocation("")
                setIsLocation(e.target.value)
              }}
              checked={isLocation === "Amsterdam"}
              type="radio"
              value="Amsterdam"
            />
            Amsterdam
          </label>
          <label className="px-3 flex items-center gap-2 font-pop font-medium text-sm text-blue-c334680">
            <input
              onChange={(e) => {
                setInputLocation("")
                setIsLocation(e.target.value)
              }}
              checked={isLocation === "New York"}
              type="radio"
              value="New York"
            />
            New York
          </label>
          <label className="px-3 flex items-center gap-2 font-pop font-medium text-sm text-blue-c334680">
            <input
              onChange={(e) => {
                setInputLocation("")
                setIsLocation(e.target.value)
              }}
              checked={isLocation === "Berlin"}
              type="radio"
              value="Berlin"
            />
            Berlin
          </label>
        </div>
      </div>
    </div>
  )
}

export default SearchOptions
