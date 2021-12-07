import * as React from 'react'
import Layout from '../components/Layout'
import '../components/home.css'
import PageLoad from '../components/PageLoad'
import Content from '../components/Content'
import { Link } from 'gatsby'
import { FaRegArrowAltCircleUp } from 'react-icons/fa';

const IndexPage = ()=> { 

  return (
    <Layout pageTitle="Jeremy Crump | Developer">
      <PageLoad />
      <h3>IT-Web/Software Developer Student</h3>
      <Content /> 
      <div id="scroll-top">
      <Link to="#top">Back to top <FaRegArrowAltCircleUp /></Link>
      </div>    
    </Layout>
  );    
}
export default IndexPage
