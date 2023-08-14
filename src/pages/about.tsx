import Layout from "../containers/layout/Layout";

const about = () => {
    return (
        <Layout>
            <div className="w-full h-full min-h-[400px] flex justify-center items-center">
                <div className="my-20 p-5 md:p-12 w-full text-justify max-w-2xl rounded-md border border-gray-300">
                    <div className="mb-8 text-center font-bold font-lekton text-2xl text-black">
                        About
                    </div>
                    <div className="my-2">
                        <span>
                            <b>Store.</b> isn&apos;t a conventional ecommerce site;
                            it&apos;s a personal project designed to showcase my web
                            development skills. As a fellow developer, I aimed
                            to create an app that not only highlights my
                            abilities but also connects with the technical
                            aspects that inspire us.
                        </span>
                    </div>
                    <div className="my-6 flex flex-col lg:flex-row lg:space-x-5">
                        <div className="min-w-max">
                            <b>Tech Stack:</b>
                        </div>
                        {/* NextJS, ReactJS, Typescript,
						TailwindCSS and Fakestore API. */}
                        <div className="w-full lg:w-fit flex flex-wrap">
                            <img
                                src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"
                                alt="NextJS-Badge"
                                className="w-fit h-fit"
                            />
                            <img
                                src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                                alt="ReactJS-Badge"
                                className="w-fit"
                            />
                            <img
                                src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
                                alt="TailwindCSS-Badge"
                                className="w-fit"
                            />
                            <img
                                src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
                                alt="Typescript-Badge"
                                className="w-fit"
                            />
                            <img
                                src="https://img.shields.io/badge/FakeStoreAPI-430098?style=for-the-badge&logo=RESTapi&logoColor=white"
                                alt="FakeStoreAPI-Badge"
                                className="w-fit"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default about;
