import React from "react";
import axios from 'axios'

const apiKey ='1fb2e46566f3666ea9df44530f5dece9'
class Weather extends React.Component{
    
constructor(){
    super()
    this.state = {
        weatherData : {title: 'hello'}
    }
}
    
    render (){
    console.log(this.state.weatherData[0])
    return(
        <div>
            
            <h1>
                {this.state.weatherData.map((v,i)=>(
                    <h1 key={i}>{v}</h1>
                ))}
                
            </h1>
               
                
        </div>
    )
}
}
export default Weather