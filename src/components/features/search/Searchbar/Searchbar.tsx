import "./Searchbar.scss";

const Searchbar = ({
	height = "48px",
	width = "42%",
	aspect = "1.25/1",
}: {
	height?: string;
	width?: string;
	aspect?: string;
}) => {
	const buttonHeight = `calc(${height} * 0.8)`;
	const buttonIndent = `calc(${height} * 0.1)`;
	const aspectW = aspect.split("/")[0].trim();

	return (
		<div className="Searchbar" style={{ height: height, width: width }}>
			<form style={{ borderRadius: height, paddingRight: `calc(${height} * 0.1)` }}>
				<input
					type="text"
					style={{ width: `calc(100% - calc(${height} * ${aspectW}))` }}
					placeholder="Search..."
				/>
				<button
					style={{
						height: buttonHeight,
						borderTopRightRadius: buttonHeight,
						borderBottomRightRadius: buttonHeight,
						right: buttonIndent,
						aspectRatio: aspect,
					}}
				>
					<img src="/src/assets/search.svg" alt="SEARCH" />
				</button>
			</form>
		</div>
	);
};

export default Searchbar;
