import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import Aos from 'aos'
import 'aos/dist/aos.css';
import '../components/home.css'

const IndexPage = ()=> { 
  Aos.init({duration: 1000});
  return( 
   <Layout pageTitle="Hey, I'm Jeremy">
     <h3>IT - Web/Software Developer Student</h3>    
     <StaticImage 
      src="../images/Scarlet_Instagram_Rollei35.jpg" 
      alt="Scarlet the cat"
      /> 
      <div className="block">
        <h2>TEXT HERE</h2>
      </div>
      <div data-aos='zoom-in-up' className='paragraph-text'> 
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet lectus nunc, eget rhoncus odio varius at. In posuere urna justo, ut mollis erat egestas volutpat. Donec vestibulum tristique magna sed pulvinar. Proin quis neque eleifend, egestas orci sed, bibendum felis. Suspendisse viverra, tortor sed auctor euismod, odio velit viverra massa, vitae rutrum dolor tellus in eros. Vivamus ut orci vel metus congue vulputate id eget mauris. In ornare, elit cursus sagittis varius, nisl turpis finibus risus, nec gravida orci velit sed elit.</p>
      </div>  
    </Layout> 
  )    
}

export default IndexPage
