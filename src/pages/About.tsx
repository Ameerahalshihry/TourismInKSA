import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import Footer from '../component/Footer'
import Nav from '../component/Nav'
import './App.css'

function About() {
  return (
    <Box>
        <Nav />
        <Image src={'src/assets/01.png'} alt={'bg'} />
        <Image src={'src/assets/img1.jpg'} alt={'bg'} />
        <Image src={'src/assets/01.png'} alt={'bg'} />
        <div className="header">
        <h1>Who are we</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nemo quisquam autem aspernatur voluptates eveniet nisi tempore odio illo quibusdam eaque incidunt consequuntur laborum esse alias fugiat maiores veritatis. Alias?</p>
        <button>More</button>
    </div>
    <h5 className="text-center" > One of the cornerstones of Vision 2030 is increasing tourism revenue and attracting a global audience to places of outstanding natural beauty and heritage value in the kingdom.
            </h5>
        <Footer />
    </Box>
  )
}

export default About



    
