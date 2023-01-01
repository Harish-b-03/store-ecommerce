import Footer from "./Footer"
import Header from "./Header"

const Layout = (props:any) => {
  return (
    <main className="w-screen h-screen flex flex-col items-center bg-white box-border ">
      <Header/>
      <div className="w-full h-fit px-5 lg:px-20 my-70px">
        {props.children}
      </div>
      <Footer/>
    </main>
  )
}

export default Layout