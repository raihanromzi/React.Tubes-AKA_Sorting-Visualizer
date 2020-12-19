import React from 'react';
import BarElem from './BarElem';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class SingleContainer extends React.Component{
	render(){
		return(
			<div className="singleContainer cont">
				{this.props.array.map(elem => (
					<BarElem value={elem.value * 0.7} 
						key={elem.key} width={0.5} 
						active={this.props.active1 === elem.key || this.props.active2 === elem.key}
					/>
				))}
				<div style={{height: "8vh", textAlign: "center"}}>
					<FormControl variant="filled" style={{minWidth: "15vw"}}>
				        <InputLabel id="demo-simple-select-label" >Select An Algorithm</InputLabel>
				        <Select
				          labelId="demo-simple-select-filled-label"
         				  id="demo-simple-select-filled"
				          value={this.props.algorithm}
				          onChange={(ev) => this.props.algorithmSelection(ev)}
				          name="algorithm"
				        >
				        	<MenuItem value="mergesort">Merge Sort</MenuItem>
				          	<MenuItem value="quicksort">Quick Sort</MenuItem>
				        </Select>
			      </FormControl>
				</div>
			</div>
		);
	}
}

export default SingleContainer;