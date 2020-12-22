import moment from "moment"
import Link from "next/link"
import Layout from "../../components/Layout/Layout"
import parse from "html-react-parser"

const SearchResults = ({ job }) => {
  return (
    <Layout>
      <div className="flex flex-col xl:flex-row gap-20">
        <div className="flex flex-col gap-9">
          <Link href="/">
            <div className="flex items-center gap-2">
              <span className="transform rotate-180 text-blue-c1E86FF material-icons">
                arrow_right_alt
              </span>
              <p className="font-pop font-medium text-sm text-blue-c1E86FF">
                Back to search
              </p>
            </div>
          </Link>
          <div className="flex flex-col gap-4">
            <p className="font-pop font-bold text-sm text-gray-cB9BDCF">
              HOW TO APPLY
            </p>
          </div>
          <div className="font-pop font-medium text-sm text-blue-c334680">
            {parse(job.how_to_apply)}
          </div>
        </div>
        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-2 items-start">
            <p className="font-rob font-bold text-2xl text-blue-c334680">
              {job.title}
            </p>
            <p className="p-1 rounded-md border border-blue-c334680 font-rob font-bold text-xs text-blue-c334680">
              {job.type}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-gray-cB9BDCF material-icons">schedule</span>
              <p className="font-rob font-medium text-xs text-gray-cB9BDCF">
                {moment(new Date(job.created_at)).fromNow()}
              </p>
            </div>
          </div>
          <div className="p-3 flex items-center gap-3">
            <div className="w-24">
              <img
                src={job.company_logo}
                alt="company_logo"
                className="w-full"
              />
            </div>
            <div className="w-3/4 flex flex-col gap-4 items-start">
              <p className="font-rob font-bold text-lg text-blue-c334680">
                {job.company}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-gray-cB9BDCF material-icons">public</span>
                <p className="font-rob font-medium text-xs text-gray-cB9BDCF">
                  {job.location}
                </p>
              </div>
            </div>
          </div>
          <div className="font-rob font-normal text-base text-blue-c334680">
            {parse(job.description)}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://jobs.github.com/positions/${params.id}.json`)
  const data = await res.json()

  return {
    props: { job: data },
  }
}

export default SearchResults
