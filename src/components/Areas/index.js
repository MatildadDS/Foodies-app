import React from 'react'
import axios from 'axios'
import '../Areas/Areas.scss'
import SearchBox from '../Navbar/SearchBox'
import {
    BrowserRouter as useParams
  } from "react-router-dom";
import Title from '../Titles'

class Areas extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Areas: [],
            isLoaded:false,
            searchField:''
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
        var{isLoaded,Areas,searchField}=this.state;
    if(!isLoaded){
        return <div> lodding...</div>
    }else{
       
        console.log(Areas)
        return <div className="Areas">
            {/* pour search bar */}
             <SearchBox placeholder="Search by Areas"
                      handelChange={(e)=>this.setState({
                   searchField:e.target.value})
          
                 } />
                           <h2>Areas</h2>

                        <div className="container">
                               {Areas.meals.filter(
                                   item=>{
                                       return item.strArea.toLowerCase().includes(searchField.toLowerCase());

                                   }
                               ).map(item=>(
                
                             <h2 className="AreasNames"  onClick={() =>  window.location.href='/Recipises/Area/'+item.strArea}>
                                    {item.strArea}</h2>
     
                                    ))}
                        </div>
                  
       
                </div>
        
    }
     
}
}
export default Areas