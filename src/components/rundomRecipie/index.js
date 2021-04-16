import React from 'react'
import axios from 'axios'
import '../rundomRecipie/rundom.scss'

import {
    BrowserRouter as useParams
  } from "react-router-dom";
import Title from '../Titles'

class Rundom extends React.Component{
    constructor(props){
        super(props);
        this.state={
            rundom: [],
            isLoaded:false
        }
    }
    componentDidMount(){
        axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(response=>{
            this.setState({
                isLoaded:true,
                rundom:response.data,
            })
        })

       
}
    render(){
        var{isLoaded,rundom}=this.state;
        
        
    if(!isLoaded){
        return <div> lodding...</div>
    }else{
       
        console.log(rundom)
        return <div className="rundomContainer" >
           
            
            <h2 > Rundom meal</h2>
            <div className="rundomCard">
             {rundom.meals.map(item=>(
                
                          <div className="RundomRecipie" >
                                <h2> {item.strMeal}</h2> 
                                <img className="rundomImg" src={item.strMealThumb}></img>
                                <button onClick={() =>  window.location.href='/Recipes/'+ item.strMeal}> Read the recipie</button>
                           </div>
                
                          
         ))}
       </div>
        
       
        </div>
        
    }
     
}
}
export default Rundom