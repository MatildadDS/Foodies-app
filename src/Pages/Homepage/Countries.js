import React from 'react'
import axios from 'axios'
import {
    BrowserRouter as useParams
  } from "react-router-dom";
import Title from '../../components/Titles'
class Countries extends React.Component{
    constructor(props){
        super(props);
        this.state={
            countries: [],
            isLoaded:false
        }
    }
    componentDidMount(){
        axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
        .then(response=>{
            this.setState({
                isLoaded:true,
                countries:response.data, }) })
    
}
    render(){
        var{isLoaded,countries}=this.state;
    if(!isLoaded){
        return <div> lodding...</div>
    }else{
       console.log(countries)
        console.log(this.props)
        return <div>
            <Title text="Feedies"/>
            <div className="countries">
            <h2> Our payes</h2>
            {countries.map(country=>(<h2 onClick={() =>  window.location.href='/Recipes/:id'}>{country.strArea}</h2>
            
            ))}
        
        </div>
        </div>
    }
     
}
}
export default Countries