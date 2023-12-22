import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";

const Wrapper = styled("section")`
  padding: 2rem 0.5rem 0;

  .container {
    margin-top: 6rem;
    text-align: center;

    .profile {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      margin-bottom: 3rem;

      img {
        width: 195px;
        height: 190px;
        border-radius: 50%;
        object-fit: cover;
      }

      .profile-info {
        text-align: left;
      }
    }

    .contact-form {
      max-width: 40rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        input[type="text"],
        input[type="email"],
        textarea {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          outline: none;
        }

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;
          background-color: #007bff;
          color: #fff;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 4px;

          &:hover {
            background-color: #0056b3;
          }
        }
      }
    }
  }
`;

const Contact = () => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="profile">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudhKcXMqZyX3W9hChwQTaTxgZhiVz5iSUaDpF491PsIpEDu96Ob9rbg1fclc89ord49o&usqp=CAU"
              alt="Profile"
            />
            <div className="profile-info">
              <Typography variant="h3">Academic Hub</Typography>
              <h1>University ❤️</h1>
              <h3>10K+ downloads </h3>
            </div>
          </div>
          <div className="contact-form">
            <form
              action="https://formspree.io/f/xoqoydev"
              method="POST"
              className="contact-inputs"
            >
              <Typography variant="h4">Contact here...👇</Typography>

              <input
                type="text"
                name="username"
                placeholder="Username"
                autoComplete="off"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
                required
              />

              <input
                type="text"
                name="phone number"
                placeholder="phone number"
                autoComplete="off"
                required
              />

              <textarea
                name="message"
                placeholder="message"
                cols="30"
                rows="6"
              ></textarea>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Contact;