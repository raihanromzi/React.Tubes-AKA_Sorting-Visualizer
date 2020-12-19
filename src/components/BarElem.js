import React from 'react';

function BarElem(props){
	const unactive = {
		height: `${props.value}vh`, 
		width: `${props.width}vw`
	};
	const active = {
		height: `${props.value}vh`, 
		width: `${props.width}vw`,
		backgroundColor: '#ff0000'
	}

	return (
		<div className="barElem" 
			style={props.active ? active: unactive}>
		</div>
	);
}

export default BarElem;