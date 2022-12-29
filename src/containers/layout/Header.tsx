import CartIcon from "../../assets/icons/CartIcon"
import FavouriteIcon from "../../assets/icons/FavouriteIcon"
import PersonIcon from "../../assets/icons/PersonIcon"

const Header = () => {
  return (
    <header className="fixed w-full h-70px px-20 flex justify-between items-center bg-white border-b-2 border-b-neutral-200">
      <div className="flex justify-between items-center">
        <div className="mr-5 text-2xl font-lekton font-semibold tracking-tight cursor-pointer">Store.</div>
        <div className="ml-8 flex justify-center items-center">
          <div className="w-80px mr-0.5 text-gray-3a tracking-wide flex justify-center items-center cursor-pointer hover:font-semibold hover:text-violet-500">Home</div>
          <div className="w-80px mr-0.5 text-gray-3a tracking-wide flex justify-center items-center cursor-pointer hover:font-semibold hover:text-violet-500">Shop</div>
          <div className="w-80px mr-0.5 text-gray-3a tracking-wide flex justify-center items-center cursor-pointer hover:font-semibold hover:text-violet-500">Blog</div>
          <div className="w-80px mr-2   text-gray-3a tracking-wide flex justify-center items-center cursor-pointer hover:font-semibold hover:text-violet-500">Contact</div>
        </div>
      </div>
      <div className="flex">
        <div className="ml-5 pt-1.5 flex justify-center items-center cursor-pointer text-gray-3a rounded-lg">
          <PersonIcon width="30px" height="28px" className="m-1.5 text-gray-3a fill-gray-3a stroke-gray-3a hover:fill-violet-500 hover:stroke-violet-500"/>
        </div>
        <div className="ml-5 flex justify-center items-center cursor-pointer text-gray-3a rounded-lg">
          <FavouriteIcon width="30px" height="30px" className="m-1.5 text-gray-3a fill-gray-3a hover:fill-violet-500"/>
        </div>
        <div className="ml-5 flex justify-center items-center cursor-pointer text-gray-3a rounded-lg">
          <CartIcon width="30px" height="30px" className="m-1.5 stroke-[4px] hover:stroke-[5px] hover:text-violet-500"/>
        </div>
      </div>
    </header>
  )
}

export default Header