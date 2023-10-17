"use strict";
const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors"); // Import the CORS middleware
const app = express();
require('dotenv').config();
const password = process.env.NODE_MAILER_PASSWORD;
const port = process.env.PORT;
// middleware
const corsOptions = {
  origin: "https://rjlportfolio.onrender.com" // frontend URI (ReactJS)
}
// Use CORS middleware to allow requests from your React app's domain
app.use(cors(corsOptions));


// Parse JSON requests
app.use(express.json());

// Define a route for handling form submissions
app.post("/submit-form", (req, res) => {
  const { name, email, subject, text } = req.body; // Parse data from the request body

  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 465,
    secure: true,
    auth: {
      user: 'kushirawa@gmail.com',
      pass: password
    }
  });

  async function main() {
    try {
      const info = await transporter.sendMail({
        from: email + " " + name,
        to: "kushirawa@gmail.com",
        subject: subject,
        text: text,
      });

      console.log("Message sent: %s", info.messageId);
      res.status(200).send("Message sent successfully");
    } catch (error) {
      console.error("Error sending message:", error);
      res.status(500).send("Internal server error");
    }
  }

  main();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
