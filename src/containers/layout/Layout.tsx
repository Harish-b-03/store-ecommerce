import Footer from "./Footer"
import Header from "./Header"

const Layout = (props:any) => {
  return (
    <main className="w-screen h-screen flex flex-col items-center bg-white box-border ">
      <Header/>
      <div className="w-full h-fit min-h-screen px-20 mt-70px">
        {props.children}
      </div>
      <Footer/>
    </main>
  )
}

export default Layout