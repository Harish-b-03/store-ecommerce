import Layout from "../containers/layout/Layout";

const about = () => {
    return (
        <Layout>
            <div className="w-full h-full min-h-[400px] flex justify-center items-center">
                <div className="my-20 p-12 w-full text-justify max-w-2xl rounded-md border border-gray-300">
                    <div className="mb-8 text-center font-bold font-lekton text-2xl text-black">
                        About
                    </div>
                    <div className="my-2">
                        <span>
                            <b>Store.</b> isn't a conventional ecommerce site;
                            it's a personal project designed to showcase my web
                            development skills. As a fellow developer, I aimed
                            to create an app that not only highlights my
                            abilities but also connects with the technical
                            aspects that inspire us.
                        </span>
                    </div>
                    <div className="my-6 flex space-x-5">
                        <div className="min-w-max">
                            <b>Tech Stack:</b>
                        </div>
                        {/* NextJS, ReactJS, Typescript,
						TailwindCSS and Fakestore API. */}
                        <div className="flex flex-wrap">
                            <img
                                src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"
                                alt="NextJS-Badge"
                            />
                            <img
                                src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                                alt="ReactJS-Badge"
                            />
                            <img
                                src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
                                alt="TailwindCSS-Badge"
                            />
                            <img
                                src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
                                alt="Typescript-Badge"
                            />
                            <img
                                src="https://img.shields.io/badge/FakeStoreAPI-430098?style=for-the-badge&logo=RESTapi&logoColor=white"
                                alt="FakeStoreAPI-Badge"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default about;
