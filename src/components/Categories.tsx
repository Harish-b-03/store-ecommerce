import Image from "next/image"

const CategoriesList:string[] = ["Clothing", "Gadgets", "Groceries", "Accessories"]

const Categories = () => {
  return (
    <div className="mt-16">
        
        <div className="px-20 text-xl font-bold text-[rgba(0,0,0,0.75)] tracking-wider">Shop by Categories</div>

        <div className="w-full mt-10 flex justify-center items-center overflow-x-visible">
            <div className="w-fit min-w-[90%] flex justify-evenly items-center">
                {
                    CategoriesList.map((item)=>{
                        return(
                            <div className="bg-slate-300 mx-10 cursor-pointer relative text-2xl text-[rgba(0,0,0,0.7)] font-bold tracking-wide hover:text-[rgba(0,0,0,1)] hover:bg-slate-400 hover:tracking-wider transition-all">
                                <div className="w-[230px] h-[250px] mix-blend-lighten">
                                    <Image
                                        src={`/images/${item}.jpg`}
                                        alt={item}
                                        fill
                                        className="object-cover scale-125"
                                    />
                                </div>
                                <span className="absolute bg-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20">{item}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Categories