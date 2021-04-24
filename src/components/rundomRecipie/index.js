import React from 'react'
import axios from 'axios'
import '../rundomRecipie/rundom.scss'

import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom'
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
           
             {rundom.meals.map(item=>(
                
                <div className="RundomRecipie">
                              <img className="rundomImg" src={item.strMealThumb}></img>
                              <div className="text">
                                <h2> {item.strMeal}</h2> 
                                
                                <p className="Instructions">{item.strInstructions}
                                </p>
                               
                                <a className="ReadMore" onClick={() => 
                                    
                                    window.location.href='/RecipiDétail/'+ item.idMeal
                                    
                                    } > ...Read the recipie</a>
                        </div>
                              
                           </div>
               
                          
         ))}
   
       </div>
        
       
     
        
    }
     
}
}
export default Rundom