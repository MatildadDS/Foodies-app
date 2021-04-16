import React from 'react'
import axios from 'axios'

import {
    BrowserRouter as useParams
  } from "react-router-dom";
import Title from '../Titles'

class Catégories extends React.Component{
    constructor(props){
        super(props);
        this.state={
            catégories: [],
            isLoaded:false
        }
    }
    componentDidMount(){
        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(response=>{
            this.setState({
                isLoaded:true,
                catégories:response.data,
            })
        })
       
}
    render(){
        var{isLoaded,catégories}=this.state;
    if(!isLoaded){
        return <div> lodding...</div>
    }else{
       
        console.log(this.props)
        return <div>
            <Title text="Feedies"/>
            <div className="categories">
            <h2> Our Categories</h2>
         {catégories.categories.map(item=>(<h2 onClick={() =>  window.location.href='/Recipes/:id'}>{item.strCategory}</h2>
            
         ))}
       
        </div>
       
        </div>
        
    }
     
}
}
export default Catégories