import React from "react";
class Header extends React.Component {
  render(){
    return(
      <header id="cope" className="Container-1">
        <h2 id="siteName"><a href="/">AV</a></h2>
        <nav id="mainMenu" class="mainMenu">
          <ul>
            <li><a href="/" >Home</a></li>
            <li><a href="/#bioLink" >About</a></li>
            <li><a href="/#projectLink" >Projects</a></li>
            <li><a href="/#skillLink" >Skills</a></li>
            <li><a href="/#eduLink" >Education</a></li>
            <li><a href="#conLink" >Contact</a></li>   
          </ul>
        </nav>
      </header>
    ); 
  }
}

export default Header;