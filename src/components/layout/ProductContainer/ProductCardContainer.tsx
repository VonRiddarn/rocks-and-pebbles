import { JSX } from "react";
import { Product } from "../../../data/productsDB";
import ProductCard from "../../ui/ProductCard/ProductCard";
import "./ProductCardContainer.scss";
import { FilterTextState } from "../../../App";

type ProductCardContainerProps = {
	state: FilterTextState;
	products: Product[];
};

const ProductCardContainer = ({ state, products }: ProductCardContainerProps): JSX.Element => {
	const productCards = products.map((product) =>
		passProductFilter(state.filterText, product) ? (
			<ProductCard key={product.id} product={product} />
		) : null
	);

	return <div className="ProductCardContainer">{productCards}</div>;
};

const passProductFilter = (filterText: string, product: Product) => {
	return (
		product.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1 ||
		product.category.toLowerCase().indexOf(filterText.toLowerCase()) !== -1
	);
};

export default ProductCardContainer;
