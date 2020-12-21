import moment from "moment"

const SearchResults = ({ items }) => {
  return items.map((item) => (
    <div key={item.id} className="p-3 flex gap-3 rounded-md shadow-md bg-white">
      <div className="w-1/4">
        <img src={item.company_logo} alt="company_logo" className="w-full" />
      </div>
      <div className="w-3/4 flex flex-col gap-4 items-start">
        <p className="font-rob font-bold text-xs text-blue-c334680">
          {item.company}
        </p>
        <p className="font-rob font-normal text-base text-blue-c334680">
          {item.title}
        </p>
        <p className="p-1 rounded-md border border-blue-c334680 font-rob font-bold text-xs text-blue-c334680">
          {item.type}
        </p>
        <div className="w-full flex justify-between gap-2">
          <div className="w-1/2 flex items-center gap-2">
            <span className="text-gray-cB9BDCF material-icons">public</span>
            <p className="font-rob font-medium text-xs text-gray-cB9BDCF">
              {item.location}
            </p>
          </div>
          <div className="w-1/2 flex items-center gap-2">
            <span className="text-gray-cB9BDCF material-icons">schedule</span>
            <p className="font-rob font-medium text-xs text-gray-cB9BDCF">
              {moment(item.created_at).fromNow()}
            </p>
          </div>
        </div>
      </div>
    </div>
  ))
}

export default SearchResults
