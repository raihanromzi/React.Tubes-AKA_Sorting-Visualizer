import React from 'react';
import './App.css';
import SingleContainer from './components/SingleContainer';
import DoubleContainer from './components/DoubleContainer';
import Header from './components/Header';

import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {
  state = {
    array: [], 
    array2: [],
    array3: [],
    array4: [],
    auxArray: [],
    active1: 101,
    active2: 101,
    active21: 101,
    active22: 101,
    active31: 101,
    active32: 101,
    active41: 101,
    active42: 101,
    algorithm: 'heapsort',
    algorithm2: 'heapsort',
    algorithm3: 'heapsort',
    algorithm4: 'heapsort',
  }

  handleNewArray = () => {
    const arr = [];
    for (var i = 0; i<100; i++){
      var rand = Math.ceil(Math.random() * 100);
      arr.push({key: i, value: rand});
    }
    this.setState({
      array: arr.slice(), 
      array2: arr.slice(),
      array3: arr.slice(),
      array4: arr.slice()
    })
  }

  componentDidMount(){
    this.handleNewArray();
  }

  algorithmSelection = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  timer = (ms) => {
    return new Promise(res => setTimeout(res, ms));
  }

  mergesort = async (list, square) => {
    const [active1, active2, array] = this.getUpdateables(square);
    var n = list.length;
    var m = 1;
    var right;
    var left;
    var sorted; 
    var maxIndex;
    var x;
    var y;

    while (m < n){
      var i = 0;
      while(i< n - m){

        left = list.slice(i, i+m);
        maxIndex = Math.min(i+2*m, n);
        right = list.slice(i+m, maxIndex);
        sorted = [];

        while(left.length && right.length){
          x = list.slice(0, i);
          y = list.slice(maxIndex, list.length);
          var tempList = x.concat(sorted, left, right, y);
         
          await this.timer(25);
          this.setState({
            [array]: tempList,
            [active1]: left[0].key,
            [active2]: right[0].key
          });
          
          if(left[0].value <= right[0].value){
            sorted.push(left.shift());
          }else{
            sorted.push(right.shift());
          }
        }

        while(left.length){
          sorted.push(left.shift());
        }

        while(right.length){
          sorted.push(right.shift());
        }

        x = list.slice(0, i);
        y = list.slice(maxIndex, list.length);
        list = x.concat(sorted, y);
        
        await this.timer(25);
        this.setState({
          [array]: list,
          [active1]: list[i].key,
          [active2]: list[maxIndex-1].key
        });

        i = i + 2*m
      }
      m = m * 2;

      this.setState({
        [active1]: 101,
        [active2]: 101
      })
    }
    return list
  }


  swap = (items, leftIndex, rightIndex) => {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
  }


  quicksort = async (list, square) => {
    const [active1, active2, array] = this.getUpdateables(square);
    var low = 0;
    var high = list.length - 1;
    var size = high - low + 1;
    var stack = new Array(size);
    var top = -1;
    stack[++top] = low;
    stack[++top] = high;

    while(top >= 0){
      high = stack[top--];
      low = stack[top--];
      var p = list[high];
      var i = low - 1;

      for(var j = low; j<=high-1; j++){
        if(list[j].value <= p.value){
          i++;
          await this.timer(25);
          this.swap(list, i, j);

          this.setState({
            [array]: list,
            [active1]: p.key,
            [active2]: j
          })          
        }
      } 

      this.swap(list, i+1, high);
      var pivot = i + 1;

      await this.timer(25);
      this.setState({
        [array]: list,
        [active1]: high,
        [active2]: low
      })

      if (pivot - 1 > low){
        stack[++top] = low;
        stack[++top] = pivot - 1;
      }

      if (pivot+1 < high){
        stack[++top] = pivot + 1;
        stack[++top] = high;
      }
    }
    this.setState({
      [array]: list,
      [active1]: 101,
      [active2]: 101
    })
    return stack;
  }

  getUpdateables = (ind) => {
    if (ind === 1){
      return ['active1', 'active2', 'array'];
    }else if (ind === 2){
      return ['active21', 'active22', 'array2'];
    }else if(ind === 3){
      return ['active31', 'active32', 'array3'];
    }else if (ind === 4){
      return ['active41', 'active42', 'array4'];
    }
  }


  onStart = () => {
    let algorithm = this.state.algorithm;
    let algorithm2 = this.state.algorithm2;

    
    if(algorithm === 'mergesort'){
      this.mergesort(this.state.array, 1);
    }else if(algorithm === 'quicksort'){
      this.quicksort(this.state.array, 1);
    }

    if(algorithm2 === 'mergesort'){
      this.mergesort(this.state.array2, 2);
    }else if(algorithm2 === 'quicksort'){
      this.quicksort(this.state.array2, 2);
    }
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Header handleNewArray={this.handleNewArray} onStart={this.onStart} />
          <Switch>
            <Route path='/doubleContainer'> 
              <DoubleContainer 
                array={this.state.array} 
                array2={this.state.array2}
                active1={this.state.active1}
                active2={this.state.active2}
                active21={this.state.active21}
                active22={this.state.active22}
                algorithm={this.state.algorithm}
                algorithm2={this.state.algorithm2}
                algorithmSelection={this.algorithmSelection}
              />
            </Route>
            <Route path='/'> 
              <SingleContainer array={this.state.array} 
                active1={this.state.active1}
                active2={this.state.active2}
                algorithm={this.state.algorithm}
                algorithmSelection={this.algorithmSelection}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
}

export default App;
