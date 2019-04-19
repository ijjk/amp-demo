

function Home () {
  return (
    <>
      <h1>Hello World!</h1>
      <img src='/static/intro.png' height={1170 / 3} width={2048 / 3} />

      <style jsx>{`
        h1 {
          font-size: 100px;
        }
      `}</style>

      <style jsx global>{`
         body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
      `}</style>
    </>
  )
}

export default Home
