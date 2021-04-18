import React from "react";
import axios from "axios";




class Recipies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Recipies:[],
            isLoaded:false
        }
    }

     componentDidMount () {
        const Category = this.props.match.params.Category;
         axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${Category}`)
         .then(response=>{
            this.setState({
                isLoaded:true,
                Recipies:response.data,
            })
        })
    }

    render () {
        var{isLoaded,Recipies}=this.state;
        console.log(Recipies)
        if(!isLoaded){
            return <div> lodding...</div>
        }else{
        return  <div className="rundomContainer" >
           
            
        <h2 > Rundom meal</h2>
        <div className="rundomCard">
         {Recipies.meals.map(item=>(
            
                      <div className="RundomRecipie" >
                            <h2> {item.strMeal}</h2> 
                            <img className="rundomImg" src={item.strMealThumb}></img>
                            <a className="ReadMore" onClick={() => 
                                
                                window.location.href='/RecipiDétail/'+ item.idMeal
                                
                                } > ...Read the recipie</a>
                          
                       </div>
            
                      
     ))}
   </div>
    
   
    </div>
        }
    }
}

export default Recipies;
