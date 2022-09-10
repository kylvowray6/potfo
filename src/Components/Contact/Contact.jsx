import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";

const Contact = () => {
  const [done, setDone] = useState(false);
  const handlep = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ff5ebvp",
        "template_jg66bdp",
        e.target,
        "OcaKxz4w3bXIeEF7r"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="conta">
      <div className="cle">
        <div className="clery">
          <span>Get in touch</span>
          <span>Contact KK</span>
        </div>
      </div>

      <div className="crit">
        <form onSubmit={handlep}>
          <input
            type="text"
            name="user"
            id="user"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="email_from"
            className="user"
            id="emailFrom"
            placeholder="Email"
          />
          <textarea
            name="message"
            className="user"
            id="message"
            placeholder="Message"
          />
          <span>{done && "Message sent "}</span>
          <Button
            type="submit"
            variant="contained"
            className="button"
            // onClick={handlepress}
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
