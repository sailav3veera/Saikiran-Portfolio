import { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";

class Home extends Component {
  onclickbutton = () => {
    alert("Thanks for taking an interest in getting to know me better!");
  };

  render() {
    return (
      <div className="maincontainer">
        <div className="subhomecontainer">
          <h1>Hi, I'm Sai kiran Veera</h1>
          <p>I am a web developer</p>
          <Link to="/about">
            <button className="knowmorebutton" onClick={this.onclickbutton}>
              Know More
            </button>
          </Link>
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
