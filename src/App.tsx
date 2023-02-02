import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './component/Nav'
import Header from './component/Header'
import Footer from './component/Footer'
import Card from './component/Card'
import { SimpleGrid } from '@chakra-ui/react'
import Testimonial from './component/Testimonial'
import Subscribe from './component/Subscribe'

function App() {
  let places =[
    {
      img:"https://www.visitsaudi.com/content/dam/no-dynamic-media-folder/manifest-newarticles-batch2/a-guide-to-al-ula/guide_to_al_ula_full_bleed_slider_1.jpg",
      name:"AlUla",
      desc:"lorenadmlorenadmvvlorenadmlorenadm,jkhgkkdlslalmxmkmmkdcnjdjkfkdklorenadmlorenadmvvlorenadmlorenadm,jkhgkkdlslalmxmkmmkdcnjdjkfkdk"
    },
    {
      img:"https://book.visitsaudi.com/_next/image?url=https%3A%2F%2Fhalayallaimages-new.s3.me-south-1.amazonaws.com%2Fdmc%2Fvenue-images%2Fdmc_venue_635fffa7b3f84.JPEG&w=640&q=40",
      name:"AlDiriyah",
      desc:"lorenadmlorenadmvvlorenadmlorenadm,jkhgkkdlslalmxmkmmkdcnjdjkfkdklorenadmlorenadmvvlorenadmlorenadm,jkhgkkdlslalmxmkmmkdcnjdjkfkdk"
    },
    {
      img:"https://book.visitsaudi.com/_next/image?url=https%3A%2F%2Fhalayallaimages-new.s3.me-south-1.amazonaws.com%2Fdmc%2Fvenue-images%2Fdmc_venue_635fffa7e26c2.JPEG&w=1920&q=85",
      name:"Abha City",
      desc:"lorenadmlorenadmvvlorenadmlorenadm,jkhgkkdlslalmxmkmmkdcnjdjkfkdklorenadmlorenadmvvlorenadmlorenadm,jkhgkkdlslalmxmkmmkdcnjdjkfkdk"
    },
    {
      img:"https://book.visitsaudi.com/_next/image?url=https%3A%2F%2Fhalayallaimages-new.s3.me-south-1.amazonaws.com%2Fdmc%2Fvenue-images%2Fdmc_venue_636116d507028.png&w=1920&q=85",
      name:"Riyadh City",
      desc:"lorenadmlorenadmvvlorenadmlorenadm,jkhgkkdlslalmxmkmmkdcnjdjkfkdklorenadmlorenadmvvlorenadmlorenadm,jkhgkkdlslalmxmkmmkdcnjdjkfkdk"
    },
    {
      img:"https://book.visitsaudi.com/_next/image?url=https%3A%2F%2Fhalayallaimages-new.s3.me-south-1.amazonaws.com%2Fdmc%2Fvenue-images%2Fdmc_venue_635fffa86bbf7.JPEG&w=1920&q=85",
      name:"Jabal Thera",
      desc:"lorenadmlorenadmvvlorenadmlorenadm,jkhgkkdlslalmxmkmmkdcnjdjkfkdklorenadmlorenadmvvlorenadmlorenadm,jkhgkkdlslalmxmkmmkdcnjdjkfkdk"
    },{
      img:"https://book.visitsaudi.com/_next/image?url=https%3A%2F%2Fhalayallaimages-new.s3.me-south-1.amazonaws.com%2Fdmc%2Fvenue-images%2Fdmc_venue_635969673adaa.JPEG&w=1920&q=85",
      name:"Old Jeddah",
      desc:"lorenadmlorenadmvvlorenadmlorenadm,jkhgkkdlslalmxmkmmkdcnjdjkfkdklorenadmlorenadmvvlorenadmlorenadm,jkhgkkdlslalmxmkmmkdcnjdjkfkdk"
    },
    {
      img:"https://book.visitsaudi.com/_next/image?url=https%3A%2F%2Fhalayallaimages-new.s3.me-south-1.amazonaws.com%2Fdmc%2Fvenue-images%2Fdmc_venue_635969bdb3f12.JPEG&w=1920&q=85",
      name:"The Red Sea",
      desc:"lorenadmlorenadmvvlorenadmlorenadm,jkhgkkdlslalmxmkmmkdcnjdjkfkdklorenadmlorenadmvvlorenadmlorenadm,jkhgkkdlslalmxmkmmkdcnjdjkfkdk"
    },
    {
      img:"https://book.visitsaudi.com/_next/image?url=https%3A%2F%2Fhalayallaimages-new.s3.me-south-1.amazonaws.com%2Fimages%2Fvenues%2Fprovider_venue_6239c46cced53.jpeg&w=1920&q=85",
      name:"AlHassa",
      desc:"lorenadmlorenadmvvlorenadmlorenadm,jkhgkkdlslalmxmkmmkdcnjdjkfkdklorenadmlorenadmvvlorenadmlorenadm,jkhgkkdlslalmxmkmmkdcnjdjkfkdk"
    },{
      img:"https://book.visitsaudi.com/_next/image?url=https%3A%2F%2Fhalayallaimages-new.s3.me-south-1.amazonaws.com%2Fdmc%2Fvenue-images%2Fdmc_venue_63b17579c7407.png&w=1920&q=85",
      name:"AlThumamah Desert",
      desc:"lorenadmlorenadmvvlorenadmlorenadm,jkhgkkdlslalmxmkmmkdcnjdjkfkdklorenadmlorenadmvvlorenadmlorenadm,jkhgkkdlslalmxmkmmkdcnjdjkfkdk"
    },
  ]

  return (
    <div className="App">
      <Nav />
      <Header />
      <SimpleGrid columns={{ base: '1', md: '2', lg: '3' }}>
        {
          places.map(place =>{
            return(
              <Card img={place.img} name={place.name} desc={place.desc}/>
            )
          })
        }
      </SimpleGrid>
      <Testimonial />
      {/* <img src="https://as2.ftcdn.net/v2/jpg/05/01/68/21/1000_F_501682114_c3SV2a9W8dBAuOKDvpvBV9Kn7nblr02G.jpg" alt="" srcset="" /> */}
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default App
