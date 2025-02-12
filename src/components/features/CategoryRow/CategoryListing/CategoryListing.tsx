import "./CategoryListing.scss";

type CategoryListingProps = {
	title:string;
}

const CategoryListing = ({title}:CategoryListingProps) => <li className="CategoryListing no-select">{title}</li>;

export default CategoryListing;