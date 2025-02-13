import React from "react";
import "./App.scss";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import Main from "./components/layout/Main/Main";

export type FilterTextState = {
	filterText: string;
	setFilterText: (text: string) => void;
};

function App() {
	const [filterText, setFilterText] = React.useState("");

	return (
		<>
			<Header filterText={filterText} setFilterText={setFilterText} />
			<Main filterText={filterText} setFilterText={setFilterText} />
			<Footer />
		</>
	);
}

export default App;
