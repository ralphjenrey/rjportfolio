import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/contact.css";
import {useForm} from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

    const { register, handleSubmit, watch, formState: { errors}, reset } = useForm();
    const onSubmit = (data) => {
        // Disable the submit button while the request is being made
    setSubmitting(true);

    axios
      .post("https://rjportfolio.onrender.com/submit-form", data) // Send a POST request to your Express.js server
      .then((response) => {
        setOpen(true);
        reset();
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error sending message:", error);
        alert("An error occurred while sending the message");
      })
      .finally(() => {
        // Re-enable the submit button
        setSubmitting(false);
      });
  };
    
      console.log(watch("example")); // you can watch individual input by pass the name of the input

  return (
    <div>
      <div className="container mb-5 mt-5 relative vh-100">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-10">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6">
                <h3 className="heading mb-4 text-white">Let's talk about everything!</h3>
                <p className="text-white">Interested? email me and let's discuss your project</p>
                <p><img src="https://preview.colorlib.com/theme/bootstrap/contact-form-16/images/undraw-contact.svg" alt="Image" className="img-fluid" /></p>
              </div>
              <div className="col-md-6">
                <form className="" method="post" id="contactForm" name="contactForm" onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <input className="form-control" {...register("name", {required: true, maxLength: 20,
          pattern: /^[A-Za-z\s]+$/i})} placeholder="Your name" />
                    </div>
                    {errors?.name?.type === "required" && <span className="contact-error">This field is required</span>}
      {errors?.name?.type === "maxLength" && (
        <span className="contact-error">First name cannot exceed 20 characters</span>
      )}
      {errors?.name?.type === "pattern" && (
        <span className="contact-error">Alphabetical characters only</span>
      )}
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <input type="text" className="form-control" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} id="email" placeholder="Email" />
                    </div>
                    {errors?.email?.type === "required" && <span className="contact-error">This field is required</span>}
      {errors?.email?.type === "pattern" && (
        <span className="contact-error">Enter a valid email address</span>
      )}
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <input type="text" className="form-control" {...register("subject", {required: true, minLength: 10})} id="subject" placeholder="Subject" />
                    </div>
                    {errors?.subject?.type === "required" && <span className="contact-error">This field is required</span>}
                    {errors?.subject?.type === "minLength" && (
        <span className="contact-error">characters must be 10 or more</span>
      )}
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <textarea className="form-control" {...register("text", {required: true, minLength: 30})} id="message" cols="30" rows="7" placeholder="Write your message"></textarea>
                    </div>
                    {errors?.text?.type === "required" && <span className="contact-error">This field is required</span>}
                    {errors?.text?.type === "minLength" && (
        <span className="contact-error">characters must be 30 or more</span>
      )}
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <input type="submit" value="Send Message" className="btn btn-primary rounded-0 py-2 px-4" />
                      <span className="submitting"></span>
                    </div>
                  </div>
                </form>
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
  <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
    Your message has been successfully sent!
  </Alert>
</Snackbar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
