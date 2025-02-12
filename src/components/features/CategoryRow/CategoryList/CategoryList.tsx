import { ReactNode } from "react";
import "./CategoryList.scss";

type CategoryListProps = {
	children:ReactNode;
}

const CategoryList = ({children}:CategoryListProps) => (
	<nav className="CategoryList">
		<ul>
			{children}
		</ul>
	</nav>
)

export default CategoryList;