import { FilterTextState } from "../../../../App";
import "./Searchbar.scss";

const Searchbar = ({
	state,
	height = "48px",
	width = "42%",
	aspect = "1.25/1",
}: {
	state: FilterTextState;
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
					value={state.filterText}
					style={{ width: `calc(100% - calc(${height} * ${aspectW}))` }}
					placeholder="Search..."
					onChange={(e) => {
						console.log(e.target.value);
						return state.setFilterText(e.target.value);
					}}
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
