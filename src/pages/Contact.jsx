import { Button, Container, TextField, Typography } from "@mui/material";
import * as React from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const notify = () => toast("Message Sent!");
  const [disabled, setDisabled] = React.useState(false);
  const form = React.useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setDisabled(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERIVCE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          notify();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container maxWidth="lg" sx={{ my: 5, textAlign: "center" }} id="contact">
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{
          textTransform: "uppercase",
          textDecoration: "underline",
          textUnderlineOffset: 8,
        }}>
        Contact Me
      </Typography>
      <Typography
        variant="h6"
        component="h3"
        gutterBottom
        sx={{ textAlign: "center", textTransform: "uppercase" }}>
        Get in contact with me and let's get started on your next big thing!
      </Typography>
      <form ref={form} onSubmit={sendEmail}>
        <TextField
          id="name"
          label="Name"
          name="user_name"
          placeholder="Enter your name"
          variant="outlined"
          disabled={disabled}
          sx={{
            my: 2,
            width: {
              xs: "100%",
              sm: "100%",
              md: "40vw",
            },
          }}
        />
        <TextField
          id="email"
          type="email"
          label="Email"
          name="user_email"
          placeholder="Enter your email"
          variant="outlined"
          disabled={disabled}
          sx={{
            my: 2,
            width: {
              xs: "100%",
              sm: "100%",
              md: "40vw",
            },
          }}
        />
        <br />
        <TextField
          id="message"
          label="Message"
          placeholder="Enter your message"
          multiline
          name="message"
          disabled={disabled}
          rows={4}
          variant="outlined"
          sx={{
            my: 2,
            width: {
              xs: "100%",
              sm: "100%",
              md: "40vw",
            },
          }}
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          size="large"
          sx={{
            width: {
              xs: "100%",
              sm: "100%",
              md: "40vw",
            },
          }}>
          Send message
        </Button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        theme="dark"
      />
    </Container>
  );
};

export default Contact;
