import { useState } from "react";
import Layout from "../../../containers/layout/Layout";
import { GetStaticPaths, GetStaticProps } from "next";
import "react-multi-carousel/lib/styles.css";
import { ProductType } from "../..";
import { useRouter } from "next/router";
import { GET_BY_PRODUCT_ID } from "../../../constants";
import ProductDetail from "../../../components/ProductDetail";

const index: React.FC<{
	product: ProductType;
}> = ({ product }) => {
	if (product === null) {
		const router = useRouter();
		router.push("/");
	}
	const [focusImage, setfocusImage] = useState(product.image); // ToDo: make it to handle if it has other than one image

	return (
		<Layout>
			<div className="w-full h-fit flex justify-center items-center">
				<div className="my-20 w-full h-full max-w-6xl flex justify-between items-start">
					<div className="w-[45%] h-full flex flex-col justify-center items-center">
						<div className="relative p-10 w-full h-[400px] flex justify-center items-center rounded-2xl bg-slate-100 overflow-hidden">
							<img
								src={focusImage}
								alt="Product Thumbnail"
								className="h-full object-contain mix-blend-multiply"
							/>
						</div>
					</div>

					<ProductDetail product={product} />
				</div>
			</div>
		</Layout>
	);
};

export default index;

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = ["1", "2", "3", "4", "5"].map((id) => ({
		params: { id: id },
	}));

	return {
		paths,
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	if (context.params !== undefined) {
		const res_product = await fetch(
			`${GET_BY_PRODUCT_ID}/${context.params.id}`
		);
		const product: ProductType = await res_product.json();

		return {
			props: { product: product },
		};
	}

	return {
		props: { product: null },
	};
};
