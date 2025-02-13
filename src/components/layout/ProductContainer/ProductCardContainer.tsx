import { JSX } from "react";
import { Product } from "../../../data/productsDB";
import ProductCard from "../../ui/ProductCard/ProductCard";
import "./ProductCardContainer.scss";

type ProductCardContainerProps = {
	products: Product[];
};

const ProductCardContainer = ({ products }: ProductCardContainerProps): JSX.Element => {
	const productCards = products.map((product) => <ProductCard key={product.id} product={product} />);

	return <div className="ProductCardContainer">{productCards}</div>;
};

export default ProductCardContainer;
