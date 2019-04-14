import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import github from './img/github.png';
import linkedin from './img/linkedin.png';
import twitter from './img/twitter.png';
import email from './img/email.png';

import './index.css';

import Button from './button.js';


class Header extends Component {

     render() {
          return (
               <div className="Header">
                    <h1>Marco Flores</h1>

                    <section className = "SocialHeader">
                         <a href="https://github.com/nxtHiro" target="_blank">
                              <img src={ github } alt="Github" height="50px" width="50px" />
                         </a>
                         
                         <a href="https://www.linkedin.com/in/floresm2199/" target="_blank">
                              <img src={ linkedin } alt="Linkedin" height="40px" width="40px" />
                         </a>

                         <a href="https://twitter.com/nxtHiro" target="_blank">
                              <img src={ twitter } alt="Twitter" height="42px" width="50px" />
                         </a>

                         <a href="mailto:floresm2199@outlook.com" target="_blank">
                              <img src={ email } alt="Email" height="42px" width="42px" />
                         </a>

                    </section>

               </div>
          );
     }
}


class About extends Component {
     render() {
          return(
               <section className="About">
                    <h2>
                         About me:
                    </h2>

                    <p>
                    &nbsp;&nbsp;I'm currently a sophmore at Louisiana Tech University, 
                    working on a Bachelor's degree in Computer Science with a concentration in Computer 
                    Engineering. As of recent, I've begun diving into development in C, giving and taking 
                    pointers whenever I can. While getting as close to bare metal as possible is the most 
                    interesting to me, I'll dabble in anything be it modeling circuits or web development.
                    <br/><br/><br/>
                    &nbsp;&nbsp;Prior to Louisiana Tech, I attended Patrick F. Taylor 
                    Science and Technology Academy. From there, I graduated within the top ten of the class.
                    <br/><br/><br/>
                    &nbsp;&nbsp;While not programming or conducting research on whatever my 
                    latest interest is, I enjoy playing billiards games of any form, watching anime, and 
                    playing rhythm games.
                    </p>
               </section>
          );
     }
}


class Resume extends Component {
     render() {
          return(
               <div className="Resume">
                    <h2>Works:</h2>
                    <p>
                    &nbsp;&nbsp;Please feel free to download my resume, or view my GitHub to see my works.
                    </p>
                    <Button/>
                    </div>
          );
     }
}

class Page extends Component {
     render(){
          return(
               <div className="Page">
                    <Header/>
                    <About/>
                    <Resume/>
               </div>
          );
     }
}

ReactDOM.render(
     <Page />,
     document.getElementById('root')
   );