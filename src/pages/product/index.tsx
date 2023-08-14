import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { GET_PRODUCTS_URL } from "../../constants";
import { ProductType } from "..";
import Layout from "../../containers/layout/Layout";
import ProductCard from "../../components/ProductCard";

const Products: NextPage<{ products: ProductType[] }> = ({ products }) => {
    return (
        <Layout>
            <div className="my-14 text-black">
                <div className="px-5 w-full text-center text-2xl font-bold text-black tracking-wider">
                    Products
                </div>

                <div className="mt-10 w-full h-fit flex justify-center items-center">
                    <div className="w-full max-w-5xl overflow-scroll flex flex-wrap justify-center items-center">
                        {products.map((product, index) => {
                            return (
                                <div key={index}>
                                    <ProductCard product={product} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res_Product = await fetch(`${GET_PRODUCTS_URL}`);
    const products: ProductType[] = await res_Product.json();

    return { props: { products } };
};

export default Products;
