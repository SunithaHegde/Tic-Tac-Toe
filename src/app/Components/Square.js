import React from "react";
import { render } from "react-dom";

	const Square = props => (
		<button className ="square" onClick={props.onClick}>{props.value}</button>
	)	
	
	export default Square;