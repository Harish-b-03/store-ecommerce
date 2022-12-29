import Footer from "./Footer"
import Header from "./Header"

const Layout = (props:any) => {
  return (
    <main className="w-screen h-screen bg-white box-border ">
      <Header/>
      <div>
        {props.children}
      </div>
      <Footer/>
    </main>
  )
}

export default Layout