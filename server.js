
//Dependencies
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();

//Nodemailer
const contactEmail = nodemailer.createTransport({
  service: 'ethereal',
  auth: {
    user: "ruben.stark12@ethereal.email", // <---Fake Test E-mail from Ethereal
    pass: "RCxRadpeMvyJhHNAFf", // <---Fake Test password from Ethereal
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

//Router
router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message; 
  const mail = {
    from: name,
    to: "ruben.stark12@ethereal.email", 
    subject: "Submission from Project-2",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

//Express
app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(5000, () => console.log("Express Server Running on http://localhost:5000"));