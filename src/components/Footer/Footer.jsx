import React from 'react'
import facbook from './Facebook.svg'
import instgram from './instgram.svg'
import twitter from './twitter.svg'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

class Footer extends React.Component{
    render(){
        return  <div>
           
            <div className="footer">
            <img src="" alt="logo"></img>
                    <section className="fristSection">
                        <h2 className="siteTitle">Foodies</h2>
                        <div className="likns">
                                      <img className="img" src={facbook} alt="facebook"></img>
                                      <img className="img" src={instgram} alt="instgram"></img> 
                                     <img className="img" src={twitter} alt="twitter"></img> 
                                    </div>
                            
                    </section>
                              <section className="secondSection">
                                    <ul>
                                      <li className="list"><a href="/homePage">Home </a> </li>
                                      <li className="list"> <a href="/catégories">Catégories </a></li>
                                      <li className="list"> <a href="/Areas">Meals by Areas  </a></li>
                                      
                                    </ul>
                                  
                               </section>
            </div>
        </div>
    }
}
export default Footer;