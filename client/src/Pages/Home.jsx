import React from 'react'
import '../App.css'
import {Box,Button,Heading,Text,Flex,Input,useDisclosure,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody} from '@chakra-ui/react'

const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

return (
    <Box border='2px solid black' m={10} h={600}>
      <Box mt={10} ml='80%'>
        <Button onClick={onOpen} p={7} bg='transparent' border='2px solid black'>Add new IG id</Button>
      </Box>
      <Flex justifyContent='center'>
      <Heading fontSize='60px' pt={10} color='red'>Advise</Heading>
        <Heading fontSize='60px' pt={10}> Yogi</Heading>
      </Flex>
      <Flex w='70%' m='auto' gap={5} pt={10}>
        <Input border='2px solid red' borderRadius={0} p={10} placeholder='Search people by Instagram id'/>
        <Button border='1px solid black' _hover={{color:'black',bg:'white'}} borderRadius={0} p={10} color='white' bg='black'>Search</Button>
      </Flex>
      <Modal size='3xl' isCentered isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom'>
        <ModalOverlay bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'/>
        <ModalContent>
          <ModalHeader>Do not add already added IG ids in AdviseYogi</ModalHeader>
          <ModalCloseButton />
            <ModalBody>
                <Box mb={20}>
                    <Input border='1px solid red' p={5} mt='120px' placeholder='Add new IG id'/>
                    <Box textAlign='center' pt='20px'>
                    <Button p={6} bg='black' color='white'>Add</Button>
                    </Box>
                </Box>
            </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default Home
