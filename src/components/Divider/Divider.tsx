const Divider = ({ height = "3px", color = "silver", width = "100%" }: { height?: string; color?: string; width?: string}) => (

	<div style = {{display: "block", height: height, backgroundColor: color, width: width}}></div>
);

export default Divider;