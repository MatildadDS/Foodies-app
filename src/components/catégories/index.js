import React from 'react'
import axios from 'axios'
import '../catégories/catégories.scss'

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
       
        console.log(catégories)
        return <div>
           
            
            <h2> Our Categories</h2>
            <div className="container">
             {catégories.categories.map(item=>(
                
                          <div className="categories" onClick={() =>  window.location.href='/Recipises/'+ item.strCategory}>
                                <p>  Recipies of {item.strCategory}</p> 
                                <img className="catégoryImg" src={item.strCategoryThumb}></img>
                           </div>
                
                          
         ))}
       </div>
        
       
        </div>
        
    }
     
}
}
export default Catégories