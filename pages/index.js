import { useState, useEffect } from "react"
import Router from "next/router"
import Layout from "../components/Layout/Layout"
import SearchBar from "../components/SearchBar"
import SearchOptions from "../components/SearchOptions"
import SearchResults from "../components/SearchResults"

export default function Home({ items, page }) {
  const [isLoading, setIsLoading] = useState(false)
  const [isFullTime, setIsFullTime] = useState(false)
  const [isDescription, setIsDescription] = useState("")

  const searchString = [
    `${isDescription ? `&description=${isDescription}` : ""}`,
    `${isFullTime ? `&full_time=${isFullTime}` : ""}`,
  ].join("")

  // console.log("isFullTime:", isFullTime)
  // console.log("searchString:", searchString)

  const getNewSearch = async () => {
    setIsLoading(true)
    await Router.push(`/?page=${page}${searchString}`)
    setIsLoading(false)
  }

  // console.log("Page:", page)
  // console.log("Items:", items.length)

  useEffect(() => {
    // console.log(items[0])
    getNewSearch()
  }, [isFullTime])

  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <SearchBar
          getNewSearch={getNewSearch}
          setIsDescription={setIsDescription}
        />
        <SearchOptions isFullTime={isFullTime} setIsFullTime={setIsFullTime} />
        <button onClick={() => getNewSearch()}>Search</button>
        <button
          onClick={() => Router.push(`/?page=${page - 1}${searchString}`)}
          disabled={page <= 1}
        >
          PREV
        </button>
        <button
          onClick={() => Router.push(`/?page=${page + 1}${searchString}`)}
        >
          NEXT
        </button>
        {isLoading ? "LOADING" : <SearchResults items={items} />}
      </div>
    </Layout>
  )
}

export async function getServerSideProps({
  query: { page = 1, description, full_time },
}) {
  const url = [
    `https://jobs.github.com/positions.json?page=${page}`,
    `${description ? `&description=${description}` : ""}`,
    `${full_time ? `&full_time=${full_time}` : ""}`,
  ].join("")

  const res = await fetch(url)
  const data = await res.json()

  return {
    props: { items: data, page: parseInt(page, 10) },
  }
}
