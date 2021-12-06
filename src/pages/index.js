import * as React from 'react'
import Layout from '../components/Layout'
import '../components/home.css'
import PageLoad from '../components/PageLoad'
import StatusLoad from '../components/StatusLoad'

const IndexPage = ()=> { 

  return (
    <Layout pageTitle="Jeremy Crump | Developer">
      <PageLoad />
      <h3>IT-Web/Software Developer Student</h3>
      <StatusLoad />     
    </Layout>
  );    
}
export default IndexPage
