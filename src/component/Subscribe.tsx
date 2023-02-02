import React from 'react'
import { URL } from 'url';

import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
    Badge,
    Button,
    Flex,
    InputGroup,
    InputRightElement,
    Image
  } from '@chakra-ui/react';
function Subscribe() {
  return (  <>
  <Image src={'src/assets/01.png'} alt={'bg'} />
    <SimpleGrid
  columns={{
    base: 1,
    md: 2,
  }}
  spacing={0}
  _after={{
    bg: "brand.500",
    opacity: 0.25,
    pos: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
    content: '" "',
  }}
>
    
  <Flex
    direction="column"
    alignItems="start"
    justifyContent="center"
    px={{
      base: 4,
      lg: 20,
    }}
    py={24}
  >    <Image src={'src/assets/01.png'} alt={'bg'} />

    <Badge
      color="white"
      px={3}
      py={1}
      mb={3}
      variant="solid"
      colorScheme="brand"
      rounded="full"
    >
      Pre Beta
    </Badge>
    <chakra.h1
      mb={6}
      fontSize={{
        base: "4xl",
        md: "4xl",
        lg: "5xl",
      }}
      fontWeight="bold"
      color="brand.600"
      _dark={{
        color: "gray.300",
      }}
      lineHeight="shorter"
    >
      Discover our kingdom start here.
    </chakra.h1>
    <chakra.form w="full" mb={6}>
      <VisuallyHidden>Your Email</VisuallyHidden>
      <Box
        display={{
          base: "block",
          lg: "none",
        }}
      >
        <Input
          size="lg"
          color="brand.900"
          type="email"
          placeholder="Enter your email..."
          bg="white"
        />
        <Button
          w="full"
          mt={2}
          color="white"
          variant="solid"
          colorScheme="brand"
          size="lg"
          type="submit"
        >
          Get Started
        </Button>
      </Box>
      <InputGroup
        size="lg"
        w="full"
        display={{
          base: "none",
          lg: "flex",
        }}
      >
        <Input
          size="lg"
          color="brand.900"
          type="email"
          placeholder="Enter your email..."
          bg="white"
        />
        <InputRightElement w="auto">
          <Button
            color="white"
            variant="solid"
            colorScheme="brand"
            size="lg"
            type="submit"
            roundedLeft={0}
          >
            Get Started
          </Button>
        </InputRightElement>
      </InputGroup>
    </chakra.form>
    <chakra.p
      pr={{
        base: 0,
        lg: 16,
      }}
      mb={4}
      fontSize="sm"
      color="brand.600"
      _dark={{
        color: "gray.400",
      }}
      letterSpacing="wider"
    >
      Get all the news about the tourism in Kingdom of Saudi Arabia and start your personalized experiences at every stage of the our journey.
    </chakra.p>
  </Flex>
  <Box>

    <Image
      src={"https://scth.scene7.com/is/image/scth/alnasab-district-walls:crop-1160x650?defaultImage=alnasab-district-walls&wid=1456&hei=815"}
      alt="3 women looking at a laptop"
      fit="cover"
      w="full"
      h={{
        base: 64,
        md: "full",
      }}
      bg="gray.100"
      loading="lazy"
    //   style={{ borderImageSource: new URL('/src/assets/01.png')}}
    />
  </Box>
  <Image src={'src/assets/01.png'} alt={'bg'} />

</SimpleGrid>
</>
  )
}

export default Subscribe