import HeartIcon from "../../components/icons/HeartIcon";

const Footer = () => {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="px-5 pt-4 pb-0 w-full text-sm border-t border-gray-200 text-gray-500 flex justify-center items-center">
                <span className="flex">
                    Made with{" "}
                    <span className="mx-1 opacity-70">
                        <HeartIcon />
                    </span>
                    by
                    <a
                        href="https://www.linkedin.com/in/harish-b-42a7911b9/"
                        target="_blank"
                        rel="noreferrer"
                        className="mx-1 underline underline-offset-2 font-semibold text-gray-600 hover:text-black"
                    >
                        Harish
                    </a>
                </span>
            </div>
        </div>
    );
};

export default Footer;
