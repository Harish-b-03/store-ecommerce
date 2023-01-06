import Image, { StaticImageData } from "next/image"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ClothingImage from "../../public/images/Clothing.jpeg" //import image statically to implement image load blur effect
import GadgetsImage from "../../public/images/Gadgets.jpeg"
import AccessoriesImage from "../../public/images/Accessories.jpeg"
import GroceriesImage from "../../public/images/Groceries.jpeg"
import Link from "next/link";
// for image load https://nextjs.org/docs/basic-features/image-optimization#local-images

const CategoriesList:{title:string, image:StaticImageData}[] = [
    {title: "Clothing", image: ClothingImage}, 
    {title: "Gadgets", image: GadgetsImage}, 
    {title: "Accessories", image: AccessoriesImage}, 
    {title: "Groceries", image: GroceriesImage}]

const responsive = {
    xl: {
        breakpoint: {max: 1536, min: 1281},
        items: 3
    },
    lg: {
      breakpoint: { max: 1280, min: 1025 },
      items: 3
    },
    md: {
      breakpoint: { max: 1024, min: 769 },
      items: 3
    },
    sm: {
      breakpoint: { max: 768, min: 641 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1
    }
  };

const Categories = () => {

  return (
    <div className="mt-10 mb-10 h-[400px] ">
        
        <div className="px-5 text-xl font-bold text-[rgba(0,0,0,0.75)] tracking-wider">Shop by Categories</div>

        <div className="w-full my-8 pb-4 flex justify-center items-center relative">
            <Carousel 
                swipeable={true}
                draggable={true}
                showDots={true}
                ssr={true}
                infinite={false}
                keyBoardControl={true}
                customTransition="all 0.7s"
                transitionDuration={500}
                responsive={responsive} 
                renderDotsOutside={true}
                rewind={true}
                className="w-[90%] flex justify-start items-center">
                    {
                        CategoriesList.map((item)=>{
                            return(
                              <Link href={`/product/category/${item.title}`}>
                                <div key={item.title} className="w-[230px] h-[250px] bg-slate-300 cursor-pointer relative text-2xl text-[rgba(0,0,0,0.7)] font-bold tracking-wide hover:text-[rgba(0,0,0,1)] hover:bg-slate-400 hover:tracking-wider transition-all overflow-hidden">
                                    <div className="w-[230px] h-[250px] mix-blend-lighten relative">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            placeholder="blur" // https://nextjs.org/docs/api-reference/next/image#placeholder
                                            fill
                                            priority
                                            className="object-cover"
                                        />
                                    </div>
                                    <span className="absolute bg-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20">{item.title}</span>
                                </div>
                              </Link>
                            )
                        })
                    }
            </Carousel>
        </div>
    </div>
  )
}

export default Categories