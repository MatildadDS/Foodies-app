import React from 'react'
import axios from 'axios'

import {
    BrowserRouter as useParams
  } from "react-router-dom";
import Title from '../Titles'

class Areas extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Areas: [],
            isLoaded:false
        }
    }
    componentDidMount(){
        axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
        .then(response=>{
            this.setState({
                isLoaded:true,
                Areas:response.data,
            })
        })
       
}
    render(){
        var{isLoaded,Areas}=this.state;
    if(!isLoaded){
        return <div> lodding...</div>
    }else{
       
        console.log(this.props)
        return <div>
            <Title text="Feedies"/>
            <div>
            <div className="Areas">
            <h2> Our Areas</h2>
            
         {Areas.meals.map(item=>(<h2 onClick={() =>  window.location.href='/Recipes/:id'}>{item.strArea}</h2>
            
         ))}
       </div>
        </div>
       
        </div>
        
    }
     
}
}
export default Areas