const Divider = ({ height = "3px", color = "#0e66da", width = "100%" }: { height?: string; color?: string; width?: string}) => (

	<div style = {{display: "block", height: height, backgroundColor: color, width: width}}></div>
);

export default Divider;