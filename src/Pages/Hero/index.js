import  {DropDownMenu,Search } from '../../components/Navbar';
import './Hero.scss'
import '../../components/Footer/Footer.scss'
import React from 'react'

class Hero extends React.Component{
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
        const img = items.categories[2].strCategoryThumb
console.log(items.categories[2].strCategoryThumb)
        return <div>
            <DropDownMenu />
         <Search/>
            <div className="container">
            <h1>Foodies</h1>
            <p>of type and scrambled it to make a type specimen
book. It has survived not only five
centuries, but also the leap into electronic typesetting,
remaining essentially unchanged. It was po</p>
                <img  className="HeroImg" src={img}/>
                
                <button className="HeroButton" onClick={event =>  window.location.href='/homePage'}> déscouver our recipes</button>
            </div>

            
        </div>
    }
}
     
}
export default Hero
