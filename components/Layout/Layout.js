import Head from "next/head"

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>CHANGE_ME</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <main className="">{children}</main>
      <footer className="">
        <p className="pb-4 font-mon text-black text-sm font-semibold">
          <a href="https://github.com/CHANGE_ME">CHANGE_ME</a> @{" "}
          <a href="https://devchallenges.io">DevChallenges.io</a>
        </p>
      </footer>
    </div>
  )
}

export default Layout
