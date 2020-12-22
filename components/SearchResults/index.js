import { useState } from "react"
import Link from "next/link"
import ReactPaginate from "react-paginate"
import moment from "moment"

const ResultCard = ({ job }) => {
  return (
    <div className="p-3 flex gap-3 rounded-md shadow-md bg-white">
      <div className="w-24">
        <img src={job.company_logo} alt="no_logo" className="w-full" />
      </div>
      <div className="w-full flex flex-col gap-4">
        <p className="font-rob font-bold text-xs text-blue-c334680">
          {job.company}
        </p>
        <Link key={job.id} href={`/job/${job.id}`}>
          <p className="font-rob font-normal text-base text-blue-c334680">
            {job.title}
          </p>
        </Link>
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4">
          <p className="p-1 rounded-md border border-blue-c334680 whitespace-nowrap font-rob font-bold text-xs text-blue-c334680">
            {job.type}
          </p>
          <div className="w-full flex xl:justify-end gap-2 xl:gap-8">
            <div className="w-1/2 xl:w-auto flex xl:justify-end items-center gap-2">
              <span className="text-gray-cB9BDCF material-icons">public</span>
              <p className="font-rob font-medium text-xs text-gray-cB9BDCF">
                {job.location}
              </p>
            </div>
            <div className="w-1/2 xl:w-auto flex xl:justify-end items-center gap-2">
              <span className="text-gray-cB9BDCF material-icons">schedule</span>
              <p className="font-rob font-medium text-xs text-gray-cB9BDCF">
                {moment(new Date(job.created_at)).fromNow()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SearchResults = ({ jobs }) => {
  const [currentPage, setCurrentPage] = useState(0)

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage)
  }

  const PER_PAGE = 5
  const offset = currentPage * PER_PAGE
  const currentPageData = jobs
    .slice(offset, offset + PER_PAGE)
    .map((job) => <ResultCard job={job} />)
  const pageCount = Math.ceil(jobs.length / PER_PAGE)

  return (
    <div className="flex flex-col gap-6 xl:gap-8">
      {currentPageData}
      <ReactPaginate
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        previousLabel={
          <span className="p-2 xl:p-3 rounded-md border border-gray-cB7BCCE text-gray-cB7BCCE material-icons">
            navigate_before
          </span>
        }
        previousLinkClassName="focus:outline-none"
        nextLabel={
          <span class="p-2 xl:p-3 rounded-md border border-gray-cB7BCCE text-gray-cB7BCCE material-icons">
            navigate_next
          </span>
        }
        nextLinkClassName="focus:outline-none"
        breakLabel={
          <span class="p-2 xl:p-3 rounded-md border border-gray-cB7BCCE text-gray-cB7BCCE material-icons">
            more_horiz
          </span>
        }
        breakLinkClassName="focus:outline-none"
        containerClassName={
          "flex items-center gap-1 xl:gap-2 justify-center xl:justify-end"
        }
        pageClassName={
          "p-2 xl:p-3 rounded-md border border-gray-cB7BCCE text-gray-cB7BCCE"
        }
        pageLinkClassName={"p-2 focus:outline-none"}
        activeClassName={
          "p-2 xl:p-3 rounded-md border border-blue-c1E86FF bg-blue-c1E86FF"
        }
        activeLinkClassName={"text-white focus:outline-none"}
      />
    </div>
  )
}

export default SearchResults
