import React from 'react'
import { Box, Image } from '@chakra-ui/react'

function Header() {
  return (
    // <div className="header">
    <Box>
    {/* <Image src={'src/assets/img1.jpg'} alt={'bg'} /> */}
    <Image src={'src/assets/01.png'} alt={'bg'} />
    <Image src={'src/assets/img2.jpg'} alt={'bg'} />
    <Image src={'src/assets/01.png'} alt={'bg'} />

    <div className="header">
        <h1>Tourism in Saudi Arabia</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nemo quisquam autem aspernatur voluptates eveniet nisi tempore odio illo quibusdam eaque incidunt consequuntur laborum esse alias fugiat maiores veritatis. Alias?</p>
        <button>More</button>
    </div>
    </Box>
  )
}

export default Header