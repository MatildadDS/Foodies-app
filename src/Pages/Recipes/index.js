import React from 'react'
import Footer from '../../components/Footer'
import Title from '../../components/Titles'

import {
    BrowserRouter as useParams
  } from "react-router-dom";
function Recipes (props){
        let  id  = props.useParams;
        console.log(id)
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
export default Recipes 
