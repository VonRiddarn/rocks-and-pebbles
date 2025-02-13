import { Product } from "../../../data/productsDB";
import "./ProductCard.scss";

type ProductCardProps = {
	product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => (
	<article>
		<img src={product.image ? product.image : "/icon.svg"} alt={`${product.name}`} />
		<h2>{product.name}</h2>
		<p>{product.description}</p>
	</article>
);

export default ProductCard;
