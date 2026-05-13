import "./index.css";
import ContactForm from "../ContactForm";

function Contact() {
  return (
    <div className="forms">
      <div className="maincontainerforcontact">
        <ul className="ulstyling">
          <li className="liststyle">
            <h1 className="headingcontact">Name :</h1>
            <p> Sai kiran Veera</p>
          </li>
          <li className="liststyle">
            <h1>Email :</h1>
            <p> sai123veera@gmail.com</p>
          </li>
          <li className="liststyle">
            <h1>Contact Number :</h1>
            <p> 9515011066</p>
          </li>
        </ul>
      </div>
      <ContactForm />
    </div>
  );
}
export default Contact;
