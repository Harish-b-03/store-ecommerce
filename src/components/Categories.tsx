import Image from "next/image"

const CategoriesList:string[] = ["Clothing", "Gadgets", "Groceries", "Accessories"]

const Categories = () => {
  return (
    <div className="mt-10 mb-10 h-[400px] ">
        
        <div className="px-5 text-xl font-bold text-[rgba(0,0,0,0.75)] tracking-wider">Shop by Categories</div>

        <div className="w-full h-[300px] mt-3 flex justify-center items-center overflow-x-scroll overflow-y-hidden">
            <div className="w-fit min-w-[90%] h-[250px] flex justify-start items-center">
                {
                    CategoriesList.map((item)=>{
                        return(
                            <div className="bg-slate-300 mx-10 cursor-pointer relative text-2xl text-[rgba(0,0,0,0.7)] font-bold tracking-wide hover:text-[rgba(0,0,0,1)] hover:bg-slate-400 hover:tracking-wider transition-all">
                                <div className="w-[230px] h-[250px] mix-blend-lighten overflow-hidden">
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