import Link from "next/link"
import moment from "moment"

const SearchResults = ({ jobs }) => {
  return (
    <div className="flex flex-col gap-6 xl:gap-8">
      {jobs.map((job) => (
        <Link key={job.id} href={`/job/${job.id}`}>
          <div className="p-3 flex gap-3 rounded-md shadow-md bg-white">
            <div className="w-24">
              <img src={job.company_logo} alt="no_logo" className="w-full" />
            </div>
            <div className="w-full flex flex-col gap-4">
              <p className="font-rob font-bold text-xs text-blue-c334680">
                {job.company}
              </p>
              <p className="font-rob font-normal text-base text-blue-c334680">
                {job.title}
              </p>
              <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4">
                <p className="p-1 rounded-md border border-blue-c334680 whitespace-nowrap font-rob font-bold text-xs text-blue-c334680">
                  {job.type}
                </p>
                <div className="w-full flex xl:justify-end gap-2 xl:gap-8">
                  <div className="w-1/2 xl:w-auto flex xl:justify-end items-center gap-2">
                    <span className="text-gray-cB9BDCF material-icons">
                      public
                    </span>
                    <p className="font-rob font-medium text-xs text-gray-cB9BDCF">
                      {job.location}
                    </p>
                  </div>
                  <div className="w-1/2 xl:w-auto flex xl:justify-end items-center gap-2">
                    <span className="text-gray-cB9BDCF material-icons">
                      schedule
                    </span>
                    <p className="font-rob font-medium text-xs text-gray-cB9BDCF">
                      {moment(new Date(job.created_at)).fromNow()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default SearchResults
