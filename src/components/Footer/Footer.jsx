import React from 'react'
import facbook from './Facebook.svg'
import instgram from './instgram.svg'
import twitter from './twitter.svg'

class Footer extends React.Component{
    render(){
        return  <div>
           
            <div className="footer">
            <img src="" alt="logo"></img>
                    <section className="fristSection">
                        <h2>Lorem Ipsum is simply dummy</h2>
                            <p>of type and scrambled it to make a type specimen <br></br>
                              book. It has survived not only five<br></br>
                               centuries, but also the leap into electronic
                                typesetting,<br></br>
                              remaining essentially unchanged. It was po</p>
                    </section>
                              <section className="secondSection">
                                    <ul>
                                      <li className="list"><a className="herf" href="#"> Hero</a></li>
                                      <li className="list"><a   className="herf" href="#"> Home</a> </li>
                                      <li className="list"> <a  className="herf" href="#">Recipes</a></li>
                                    </ul>
                                    <div className="likns">
                                      <img className="img" src={facbook} alt="facebook"></img>
                                      <img className="img" src={instgram} alt="instgram"></img> 
                                     <img className="img" src={twitter} alt="twitter"></img> 
                                    </div>
                               </section>
            </div>
        </div>
    }
}
export default Footer;