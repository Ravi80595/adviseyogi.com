import { Box,Flex,Heading,Button,Text} from '@chakra-ui/react'
import React from 'react'
import {SlLike} from 'react-icons/sl'

const SingleUser = () => {

return (
    <Box>
      <Flex >
      <Heading fontSize='30px' pt={5} pl={5} color='red'>Advise</Heading>
        <Heading fontSize='30px' pt={5}>Yogi</Heading>
      </Flex>
      <Flex justifyContent='space-around'>
        <Box w='50%'>
            <Text textAlign='center'>Ravi Sharma</Text>
        </Box>
        <Flex w='25%' justifyContent='space-around'>
        <Button p={7} bg='transparent' border='2px solid black'>Notify me</Button>
        <Button p={7} bg='transparent' border='2px solid black'>Add Comment</Button>
        </Flex>
      </Flex>
      <Box borderRadius={20} p={5} m='auto' w='90%' mt={10} border='2px solid black'>
        <Text>Find a friend fast.</Text>
        <Flex pt={5} justifyContent="space-around">
            <Text>2d</Text>
            <Flex>
            <SlLike/>
            <Text>2</Text>
            </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default SingleUser
