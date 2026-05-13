import { useState } from "react";
import "./index.css";

export default function ContactForm() {
  const [result, setResult] = useState("");

  async function onSubmit(event) {
    event.preventDefault();

    setResult("Sending...");

    const formData = new FormData(event.target);

    formData.append("access_key", "019f962b-a699-4627-ab4f-803084da72d8");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form submitted successfully");
        event.target.reset();
      } else {
        setResult("Submission failed");
      }
    } catch (error) {
      setResult("Something went wrong");
    }
  }

  return (
    <form onSubmit={onSubmit} className="formdetails">
      <input type="text" name="name" placeholder="Name" required />

      <input type="email" name="email" placeholder="Email" required />

      <textarea name="message" placeholder="Enter your message" required />

      <button type="submit">Submit</button>

      <p>{result}</p>
    </form>
  );
}
