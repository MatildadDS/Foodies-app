import React from 'react'

import Title from '../../components/Titles'
class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items: [],
            isLoaded:false
        }
    }
    componentDidMount(){
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(Response=>Response.json())
        .then(json=>{
            this.setState({
                isLoaded:true,
                items:json,
            })
        })
    }
    render(){
        var{isLoaded,items}=this.state;
    if(!isLoaded){
        return <div> lodding...</div>
    }else{
        console.log(items)
        console.log(this.props)
        return <div>
            <Title text="Feedies"/>
            <h2> Our Catégory</h2>
         {items.categories.map(item=>(<h2 onClick={event =>  window.location.href='/Recipes/{item.strCategory}'}>{item.strCategory}</h2>
            
         ))}
             

          
        </div>
    }
}
}
export default HomePage