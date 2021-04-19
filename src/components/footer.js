import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Icon,
} from "@material-ui/core"
import SendRounded from "@material-ui/icons/SendRounded"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "10rem",
    marginBottom: "4rem",
    padding: "0 5rem",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      margin: "0 2rem",
      padding: "2rem",
    },
  },
  contactForm: {
    display: "flex",
    flexDirection: "column",
    marginTop: "3rem",
    "& > *": {
      marginBottom: "2rem",
    },
  },
}))

const Footer = () => {
  const classes = useStyles()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = e => {
    // TODO finish integration Netlify: https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/?_ga=2.137835957.445443183.1618057278-1356593327.1618057278
    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: encode({ "form-name": "contact", ...this.state }),
    // })
    //   .then(() => alert("Success!"))
    //   .catch(error => alert(error))

    e.preventDefault()
  }

  return (
    <Box component="footer" className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={6}>
          <Typography variant="h1">Contact me</Typography>
          <form
            name="contact"
            data-netlify="true"
            method="POST"
            noValidate
            autoComplete="off"
            className={classes.contactForm}
            onSubmit={handleSubmit}
          >
            <TextField
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              required
              value={name}
              onChange={event => setName(event.target.value)}
            />
            <TextField
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              required
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
            <TextField
              id="message"
              name="message"
              label="Message"
              variant="outlined"
              multiline
              rows={5}
              required
              value={message}
              onChange={event => setMessage(event.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<SendRounded />}
              size="large"
            >
              Send
            </Button>
          </form>
        </Grid>
        <Grid item xs={12}>
          <Box textAlign="center">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
