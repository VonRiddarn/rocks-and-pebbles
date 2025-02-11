import "./Searchbar.scss";

const Searchbar = ({height = "48px", width="42%"}: {height?:string; width?:string}) => {
	
	const buttonHeight = `calc(${height} * 0.8)`;
	const buttonIndent = `calc(${height} * 0.1)`;
	
	return (
		<div className="Searchbar" style={{height: height, width: width}}>
			<form style={{borderRadius: height, paddingRight: `calc(${height} * 0.1)`}}>
				<input type="text" style={{width: `calc(100% - ${height})`}} placeholder="Search..." />
				<button style={{height: buttonHeight, borderTopRightRadius: buttonHeight, borderBottomRightRadius: buttonHeight, right: buttonIndent}}>
					<img src="search.svg" alt="SEARCH" />
				</button>
			</form>
		</div>
	);
}

export default Searchbar;