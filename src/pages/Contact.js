import * as React from 'react'
import Layout from '../components/Layout'
import ContactForm from '../components/Form'

const IndexPage = ()=> {
  return(
   <Layout pageTitle="Contact"> 
      <h1>Contact</h1>
      <p>
          I made this contact form with Node.js Express and Nodemailer
        </p>    
      <ContactForm/>
    </Layout>
  )    
}

export default IndexPage
