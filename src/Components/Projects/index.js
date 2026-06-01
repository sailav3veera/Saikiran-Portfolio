import { Component } from "react";
import "./index.css";

class Projects extends Component {
  render() {
    return (
      <div className="pojectscontainer">
        <h1>My Projects</h1>
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide maincon"
          data-bs-ride="carousel"
          data-bs-interval="2000"
        >
          <div className="carousel-inner">
            <div className="carousel-item active imagecontainer">
              <a
                href="https://food-delivery-application-saikiran-veera.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dnoycfpby/image/upload/v1780295004/ChatGPT_Image_Jun_1_2026_11_53_10_AM_uqzdhy.png"
                  className="d-block slideshowimages"
                  alt="food delivery"
                />
              </a>
            </div>
            <div className="carousel-item active imagecontainer">
              <a
                href="https://veera3stopwatch.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dnoycfpby/image/upload/v1780292706/stopwatch_zzt5jo.jpg"
                  className="d-block slideshowimages"
                  alt="stopwatch"
                />
              </a>
            </div>
            <div className="carousel-item active imagecontainer">
              <a
                href="https://veerawatchapp.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dnoycfpby/image/upload/v1780295668/ChatGPT_Image_Jun_1_2026_12_04_08_PM_zt3ktg.png"
                  className="d-block slideshowimages"
                  alt="stopwatch"
                />
              </a>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Projects;
