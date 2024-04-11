import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { Link } from "react-router-dom"; 
const Contact = () => {
  const form = useRef();
  const [charCount, setCharCount] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [requiredFieldsFilled, setRequiredFieldsFilled] = useState(false);
  const maxChars = 300;

  const sendEmail = (e) => {
    e.preventDefault();

    if (requiredFieldsFilled) {
      emailjs
        .sendForm(
          "service_v4bfebi",
          "template_5k3xbvr",
          form.current,
          "4z1amVMf5hw6lxgOJ"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
            // Reset form state
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              message: ""
            });
            setCharCount(0);
            setRequiredFieldsFilled(false);
            
            // Redirect to thanks.jsx
            window.location.href = "/thanks"; // Change the URL as needed
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      alert("Please fill out all required fields.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

    if (name === "message") {
      setCharCount(value.length);
    }
    // Check if all required fields are filled
    if (
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.message.trim() !== ""
    ) {
      setRequiredFieldsFilled(true);
    } else {
      setRequiredFieldsFilled(false);
    }
  };

  return (
    <StyledContainer>
      <StyledContactForm>
        <form ref={form} onSubmit={sendEmail}>
          <div className="name-wrapper">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name*"
              className={requiredFieldsFilled || formData.firstName.trim() !== "" ? "" : "red-border"}
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name*"
              className={requiredFieldsFilled || formData.lastName.trim() !== "" ? "" : "red-border"}
            />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email*"
            className={requiredFieldsFilled || formData.email.trim() !== "" ? "" : "red-border"}
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            maxLength={maxChars}
            placeholder="Message*"
            className={requiredFieldsFilled || formData.message.trim() !== "" ? "" : "red-border"}
          />
          <p>Characters remaining: {maxChars - charCount}</p>
          <input
            type="submit"
            value="Send"
            disabled={!requiredFieldsFilled}
          />
        </form>
      </StyledContactForm>
    </StyledContainer>
  );
};

export default Contact;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledContactForm = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    .name-wrapper {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
    }

    input[type="text"] {
      flex: 1;
      margin-right: 1rem;
    }

    input,
    textarea {
      width: 100%;
      padding: 14px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      margin-bottom: 1rem;

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      min-height: 200px;
    }

    p {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(7, 83, 141);
      color: white;
      border: none;
    }
  }

  .red-border {
    border-color: red;
  }
`;
