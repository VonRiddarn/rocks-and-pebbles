import { ReactElement } from "react";
import "./CategoryList.scss";
import CategoryListing from "../CategoryListing/CategoryListing";

type CategoryListProps = {
	children: ReactElement<typeof CategoryListing> | ReactElement<typeof CategoryListing>[];
};

const CategoryList = ({ children }: CategoryListProps) => (
	<nav className="CategoryList">
		<ul>{children}</ul>
	</nav>
);

export default CategoryList;
