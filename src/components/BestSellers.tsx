import Image from "next/image";
import React from "react";
import { HomeProps } from "../pages";
import ProductCard from "./ProductCard";

type BestSellersProps = {
  products: HomeProps["bestSellers"];
};

const BestSellers: React.FC<BestSellersProps> = ({ products }) => {
  return (
    <div className="my-14 text-black">
      <div className="px-5 text-xl font-bold text-black tracking-wider">
        Best Sellers
      </div>

      <div className="mt-10 w-full h-fit flex flex-col justify-center items-center">
        <div className="w-full max-w-5xl overflow-scroll flex justify-between items-center">
          {products.jewelery.map((product) => {
            return (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
        <div className="w-full max-w-5xl overflow-scroll flex justify-between items-center">
          {products.mensClothing.map((product) => {
            return (
              <div key={product.id} className="">
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
        <div className="w-full max-w-5xl overflow-scroll flex justify-between items-center">
          {products.womensClothing.map((product) => {
            return (
              <div key={product.id} className="">
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
