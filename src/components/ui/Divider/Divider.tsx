type DividerProps = { 
	height?: string; 
	color?: string; 
	width?: string
}

const Divider = ({ height = "3px", color = "#0e66da", width = "100%" }: DividerProps) => (

	<div style = {{display: "block", height: height, backgroundColor: color, width: width}}></div>
);

export default Divider;