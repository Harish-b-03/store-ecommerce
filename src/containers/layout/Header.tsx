import CartIcon from "../../assets/icons/CartIcon"
import FavouriteIcon from "../../assets/icons/FavouriteIcon"
import PersonIcon from "../../assets/icons/PersonIcon"
import ActiveLink from "../../components/ActiveLink"

const Header = () => {
  return (
    <header className="fixed top-0 w-full h-[70px] px-5 lg:px-10 z-50 flex justify-between items-center transition-all ease-in-out duration-300 text-gray-3a bg-white border-b-2 border-b-neutral-100">
      <div className="flex justify-between items-center">
        <div className="mr-3 lg:mr-5 text-2xl font-lekton font-semibold tracking-tight cursor-pointer">Store.</div>
        <div className=" ml-3 lg:ml-8 flex justify-center items-centertext-gray-3a">
          <ActiveLink href="/" activeClassName="text-violet-500 font-semibold">
            <div className="w-[60px] md:w-[70px] lg:mr-0.5 tracking-wide flex justify-center items-center cursor-pointer hover:tracking-normal hover:font-semibold hover:text-violet-500">Home</div>
          </ActiveLink>
          <ActiveLink href="/product" activeClassName="text-violet-500 font-semibold">
            <div className="w-[60px] md:w-[70px] lg:mr-0.5 tracking-wide flex justify-center items-center cursor-pointer hover:tracking-normal hover:font-semibold hover:text-violet-500">Shop</div>
          </ActiveLink>
          <ActiveLink href="/blog" activeClassName="text-violet-500 font-semibold">
            <div className="w-[60px] md:w-[70px] lg:mr-0.5 tracking-wide flex justify-center items-center cursor-pointer hover:tracking-normal hover:font-semibold hover:text-violet-500">Blog</div>
          </ActiveLink>
          <ActiveLink href="/about" activeClassName="text-violet-500 font-semibold">
            <div className="w-[60px] md:w-[70px] lg:mr-0.5 tracking-wide flex justify-center items-center cursor-pointer hover:tracking-normal  hover:font-semibold hover:text-violet-500">About</div>
          </ActiveLink>
        </div>
      </div>
      <div className="flex ">
        <div className="ml-3 pt-1.5 flex justify-center items-center cursor-pointer text-gray-3a rounded-lg">
          <PersonIcon width="26px" height="24px" className="m-1.5 fill-gray-500 stroke-gray-500 hover:fill-violet-700 hover:stroke-violet-700"/>
        </div>
        <div className="ml-3 flex justify-center items-center cursor-pointer text-gray-3a rounded-lg">
          <FavouriteIcon width="26px" height="26px" className="m-1.5 fill-gray-500 hover:fill-violet-700"/>
        </div>
        <div className="ml-3 flex justify-center items-center cursor-pointer text-gray-3a rounded-lg">
          <CartIcon width="26px" height="26px" className="m-1.5 stroke-[4px] stroke-gray-500 hover:stroke-[5px] hover:stroke-violet-700"/>
        </div>
      </div>
    </header>
  )
}

export default Header