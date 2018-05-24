import React, { Component } from "react";

import "./App.css";
import Header from "./components/Header";
import Child from "./Child.js";
import Logo from './components/Logo.js'

import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      carList: [],
      make:"",
      model:""
    };
    this.handleAdd = this.handleAdd.bind(this)
    this.deleteCar = this.deleteCar.bind(this)
    this.updateCar = this.updateCar.bind(this)
  }

  componentDidMount() {
    axios.get("/api/carList").then(res => {
      this.setState({ carList: res.data });
      // console.log(this.state);
    });
  }

  make(value) {
    this.setState({ make: value });
  }
  model(value){
    this.setState({model:value})
  }

  handleAdd(){
    axios.post('/api/addCar', {make: this.state.make, model: this.state.model}).then (res => {this.setState({carList:res.data, make:"", model:""})})
  }

  deleteCar(id){
    axios.delete(`/api/deleteCar/${id}`).then(res => {this.setState({carList:res.data})})
  }
  updateCar(id,text){
    console.log(text);
    
    axios.put(`/api/updateCar/${id}`,{text}).then(res => {this.setState({carList:res.data})})
  }
  handleUpdate(id,prop,event){
    event.stopPropagation()
    event.preventDefault()
    let index = this.state.carList.findIndex(obj => {
      return obj.id == id;
    });
    console.log("this is index ------ "+ index);
    
    let copy = this.state.carList.slice()
    copy[index][prop]=event.target.value;
    console.log(copy);
    
    this.setState({carList:copy})
  }


  render() {
    let mappedCars = this.state.carList.map((x, i) => {
      return (
        <div key={i}>

          <input value = {x.make} onChange = {(e) => this.handleUpdate(x.id,"make",e)}/>
          <input value = {x.model} onChange = {(e) => this.handleUpdate(x.id,"model",e)} />
          
            
            <button onClick = {() => this.deleteCar(x.id)}>Delete</button>
            <button onClick = {() => this.updateCar(x.id,x)}>Update</button>

        
          
        </div>
      );
    });
    return (
      <body>
      <div className="App">

        <Header />
        <div>

        <div className = 'searchbox'>Search: <Child carlist = {this.state.carList} /> </div>
          <div className = 'mmbox'>
            <div className = 'inmmbox'>Make:
              <input onChange={e => {this.make(e.target.value);}}/>
          </div>

          <div className = 'inmmbox'>Model: 
            <input onChange = {(event) => this.model(event.target.value)}/>
          </div>
            <button onClick = {this.handleAdd}>Add</button>
         <div>{mappedCars}</div>
     
        
         </div> 
        </div>
      </div>
      <div className = 'footer'>
         <p><Logo/></p>
      </div> 
      </body>
    );
  }
}

export default App;
