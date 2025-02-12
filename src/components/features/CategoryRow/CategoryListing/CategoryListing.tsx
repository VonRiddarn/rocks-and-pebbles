import "./CategoryListing.scss";

type CategoryListingProps = {
	title:string;
}

const CategoryListing = ({title}:CategoryListingProps) => <li className="CategoryListing">{title}</li>;

export default CategoryListing;