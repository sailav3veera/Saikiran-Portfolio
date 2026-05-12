import { Component } from "react";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <div className="maincontainer">
        <div className="subhomecontainer">
          <h1>Hi, I'm Sai kiran Veera</h1>
          <p>I am a web developer</p>
          
        </div>
        <img
          src="https://res.cloudinary.com/dhag7xryo/image/upload/v1778503016/ChatGPT_Image_May_11_2026_06_06_35_PM_btvzfu.png"
          alt="Homeprofile"
          className="homeimage"
        />
      </div>
    );
  }
}

export default Home;
