import React, { Component } from 'react'
import App from './App'



class Child extends Component{
    constructor(props){
        super(props);

     this.state ={
            filterCars: []
        }
    }

    handleChange(search){
        this.setState({filterCars:search})
    }



    render(){
        console.log(this.props);
        
        let filterCars = this.props.carlist.filter((element,index)=> {return element.make.includes(this.state.filterCars);
        }).map((element,index)=> {
            return <div className= 'searchedcars' key = {index}>{element.make}</div>
        })
       console.log(filterCars);
       
    return (
       <div>
        <input onChange = {(e)=> {this.handleChange(e.target.value)}}/>
        <div>{this.state.filterCars}</div> 
        {filterCars}
       </div> 
    )

    }



}

export default Child;