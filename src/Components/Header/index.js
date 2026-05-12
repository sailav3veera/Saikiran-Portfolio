import { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class Header extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/" className="link-decoration">
          <h1>Saikiran Veera</h1>
        </Link>
        <div className="menucontainer">
          <ul className="menu-list">
            <li>
              <Link to="/" className="link-decoration">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="link-decoration">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="link-decoration">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link-decoration">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
