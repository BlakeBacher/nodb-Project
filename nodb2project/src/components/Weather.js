import React, { Component } from 'react'
import axios from 'axios'
import Logo from './Logo'


class Weather extends Component{
    constructor(){
        super();

     this.state ={
        currentCity:"",
        currentWeather:[]
        }
        // this.currentWeather = this.currentWeather.bind(this)
    }

  componentDidMount(){
      axios.get('http://api.openweathermap.org/data/2.5/weather?id=5780026&APPID=4aea2c0142da5d54dc6312b1bf572955').then(res => {
            let currentWF = res.data.main.temp;
            currentWF = ((currentWF - 273.15)*1.8)+32;
                     this.setState({currentWeather:currentWF.toFixed(0)+"˚" ,currentCity:res.data.name})
        })
    };

    render(){   
    return (
        <div className='currentweather'>
            <div>{this.state.currentCity}         {this.state.currentWeather} </div> 
        </div> 

            

    )

    }



}

export default Weather;




// {"coord":
// {"lon":-111.66,"lat":40.23}
// ,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":291.09,"pressure":1013,"humidity":42,"temp_min":289.15,"temp_max":293.15},"visibility":16093,"wind":{"speed":1.11,"deg":83.0002},"clouds":{"all":75},"dt":1526918040,"sys":{"type":1,"id":2802,"message":0.0034,"country":"US","sunrise":1526904310,"sunset":1526956917},"id":5780026,"name":"Provo","cod":200}