import { useState, useEffect } from "react"
import Router from "next/router"
import Layout from "../components/Layout/Layout"
import SearchBar from "../components/SearchBar"
import SearchOptions from "../components/SearchOptions"
import SearchResults from "../components/SearchResults"

export default function Home({ jobs }) {
  const [isLoading, setIsLoading] = useState(false)
  const [isFullTime, setIsFullTime] = useState(false)
  const [isLocation, setIsLocation] = useState("New York")
  const [isDescription, setIsDescription] = useState("")

  const searchString = [
    `?location=${isLocation}`,
    `${isDescription ? `&description=${isDescription}` : ""}`,
    `${isFullTime ? `&full_time=${isFullTime}` : ""}`,
  ].join("")

  const getNewSearch = async () => {
    setIsLoading(true)
    await Router.push(`/${searchString}`)
    setIsLoading(false)
  }

  useEffect(() => {
    getNewSearch()
  }, [isFullTime, isLocation])

  return (
    <Layout>
      <div className="flex flex-col gap-8">
        <SearchBar
          getNewSearch={getNewSearch}
          setIsDescription={setIsDescription}
        />
        <div className="flex flex-col xl:flex-row gap-8">
          <div className="xl:w-1/3">
            <SearchOptions
              isFullTime={isFullTime}
              setIsFullTime={setIsFullTime}
              isLocation={isLocation}
              setIsLocation={setIsLocation}
            />
          </div>
          <div className="xl:w-2/3">
            {isLoading ? "LOADING" : <SearchResults jobs={jobs} />}
          </div>
        </div>
        {/* <button
          onClick={() => Router.push(`/?page=${page - 1}${searchString}`)}
          disabled={page <= 1}
        >
          PREV
        </button>
        <button
          onClick={() => Router.push(`/?page=${page + 1}${searchString}`)}
        >
          NEXT
        </button> */}
      </div>
    </Layout>
  )
}

export async function getServerSideProps({
  query: { location, description, full_time },
}) {
  const url = [
    `https://jobs.github.com/positions.json?location=${location}`,
    `${description ? `&description=${description}` : ""}`,
    `${full_time ? `&full_time=${full_time}` : ""}`,
  ].join("")

  const res = await fetch(url)
  const data = await res.json()

  return {
    props: { jobs: data },
  }
}
