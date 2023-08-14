import React from "react";
import Layout from "../../../containers/layout/Layout";
import { GetStaticPaths, GetStaticProps } from "next";
import { GET_BY_CATEGORY } from "../../../constants";
import { ProductType } from "../..";
import ProductCard from "../../../components/ProductCard";

const index: React.FC<{
    category: string;
    products: ProductType[];
}> = ({ category, products }) => {
    return (
        <Layout>
            <div className="w-full h-fit flex flex-col justify-center items-center">
                <div className="my-10 w-full h-fit text-2xl capitalize tracking-wider font-semibold text-gray-800 flex justify-center items-center">
                    {category}
                </div>
                <div className="w-full h-fit flex flex-wrap justify-center items-center">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default index;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [
        "electronics",
        "jewelery",
        "women's clothing",
        "men's clothing",
    ].map((category) => ({
        params: { category: category },
    }));

    return {
        paths,
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    if (context.params !== undefined) {
        let response;
        let data: { category: string; products: ProductType };

        response = await fetch(`${GET_BY_CATEGORY}/${context.params.category}`);
        data = await response.json();

        return {
            props: { category: context.params.category, products: data },
        };
    }

    return {
        redirect: {
            destination: "/",
            permanent: true,
        },
    };
};
