import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"

const Layout = (props:any) => {
  return (
    <>
      <Head>
        <title>Store. </title>
        <meta name="description" content="Store E-Commerce site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lekton&display=swap" rel="stylesheet"></link>
      </Head>
      <main className="w-screen h-screen flex flex-col items-center bg-white box-border ">
        <Header/>
        <div className="w-full h-fit min-h-full px-5 lg:px-10 my-70px">
          {props.children}
        </div>
        <Footer/>
      </main>
    </>
  )
}

export default Layout