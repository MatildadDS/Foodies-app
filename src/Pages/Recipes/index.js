import React from 'react'
import Footer from '../../components/Footer'
import Title from '../../components/Titles'
class Recipes extends React.Component{
    
    render(){
        return <div>
         <div>
             <Title text="name of récipes"/>
             <img alt="recipiImg"/>
             <p>déscription.....</p>
             <button> add to favorite</button>
             </div>
            <Footer/>
        </div>
    }
}
export default Recipes 
