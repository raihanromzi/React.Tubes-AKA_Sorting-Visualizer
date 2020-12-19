import React from 'react';
import BarElem from './BarElem';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class DoubleContainer extends React.Component{
	state = {
		algorithm1: "",
		algorithm2: "",
		array1: [],
		array2: []
	}

	render(){
		return (
			<div className="doubleContainer cont">
				<div>
				
				{this.props.array.map(elem => (
					<BarElem 
						value={elem.value * 0.35} 
						key={elem.key} 
						width={0.5}
						active={this.props.active1 === elem.key || this.props.active2 === elem.key}
					/>
				))}
				<div style={{textAlign: 'center'}}>
				<FormControl variant="filled" style={{minWidth: "16vw"}}>
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
				<br/>
				<div>
				
				{this.props.array2.map(elem => (
					<BarElem 
						value={elem.value * 0.35} 
						key={elem.key} 
						width={0.5}
						active={this.props.active21 === elem.key || this.props.active22 === elem.key}
					/>
				))}
				<div style={{textAlign: 'center'}}>
				<FormControl variant="filled" style={{minWidth: "15vw"}}>
				        <InputLabel id="demo-simple-select-label" >Select An Algorithm</InputLabel>
				        <Select
				          labelId="demo-simple-select-filled-label"
         				  id="demo-simple-select-filled"
				          value={this.props.algorithm2}
				          onChange={(ev) => this.props.algorithmSelection(ev)}
				          name="algorithm2"
				        >
				        	<MenuItem value="mergesort">Merge Sort</MenuItem>
				          	<MenuItem value="quicksort">Quick Sort</MenuItem>
				        </Select>
			      </FormControl>
			      </div>
				</div>
			</div>
		);
	}
	
}

export default DoubleContainer;