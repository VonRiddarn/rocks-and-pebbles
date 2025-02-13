import "./CategoryListing.scss";

type CategoryListingProps = {
	title: string;
};

const CategoryListing = ({ title }: CategoryListingProps) => (
	<li onClick={() => categoryClicked(title)} className="CategoryListing no-select">
		{title}
	</li>
);

const categoryClicked = (title: string) => {
	console.log(title);

	return undefined;
};

export default CategoryListing;
