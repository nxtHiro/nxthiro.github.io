import React, { Component } from 'react';
import './App.css';
import github from './img/github.png';
import linkedin from './img/linkedin.png';
import twitter from './img/twitter.png';
import email from './img/email.png';

class App extends Component {
  render() {
    return (
         <div className="App">
              <header className="App-header">
                   <h1 className="Name">Marco Flores</h1>
                   <section className="Social">
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
              </header>
              <section className="About me:">
                   <h2 className="Text">About</h2>
                   <p className="Text">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I'm currently a sophmore at Louisiana Tech University, working on a Bachelor's degree in Computer &nbsp;Science with a 
                        concentration in Computer Engineering. As of recent, I've begun diving into development &nbsp;in C, giving and taking pointers whenever I can. While getting 
                        as close to bare metal as possible is the &nbsp;most interesting to me, I'll dabble in anything be it modeling circuits or web development.
                        <br/><br/><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Prior to Louisiana Tech, I attended Patrick F. Taylor Science and Technology Academy. From there, I &nbsp;graduated within the top ten of the class.
                        <br/><br/><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; While not programming or conducting research on whatever my latest interest is, I enjoy playing &nbsp;billiards games of any form, watching anime, and playing rhythm games.
                   </p>
              </section>

              <section className></section>
              

      </div>
    );
  }
}

export default App;
