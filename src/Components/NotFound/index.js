import { Link } from "react-router-dom";
import "./index.css"

function NotFound() {
  return (
    <div className="notfoundpage">
      <img
        src="https://res.cloudinary.com/dhag7xryo/image/upload/f_auto,q_auto/ChatGPT_Image_May_11_2026_05_30_45_PM_lxpucr"
        alt="page not found"
        className="imagenotfound"
      />
      <Link to="/">
        <button className="buttonnotfound">Go Back Home</button>
      </Link>
    </div>
  );
}
export default NotFound;
