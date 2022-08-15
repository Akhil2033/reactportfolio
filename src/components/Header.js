import React from "react";

class Header extends React.Component {
  render(){
    return(
      <header id="cope" className="Container-1">
        	<h2 id="siteName"><a href="/">AV</a></h2>
          <nav id="mainMenu" class="mainMenu">
            <ul>
              <li><a href="/" >Home</a></li>
              <li><a href="#intro" >About</a></li>
              <li><a href=".projectdiv" >Projects</a></li>
              <li><a href="#skills" >Skills</a></li>
              <li><a href="#education" >Education</a></li>
              <li><a href="#contact" >Contact</a></li>   
            </ul>
          </nav>
      </header>
    ); 
  }
}

export default Header;