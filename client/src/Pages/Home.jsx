import React, { useState } from 'react'
import '../App.css'
import {Box,Button,Heading,Text,Flex,Input,useDisclosure,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody} from '@chakra-ui/react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { baseUrl } from '../Components/BaseUrl'

const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [name,setName]=useState('')
    const [users,setUsers]=useState([])
    const navigate=useNavigate()


const registerUser=()=>{
  const payload={
    "fullName":name
  }
axios.post(`${baseUrl}/user/register`,payload)
.then((res)=>{
  alert(res.data.msg)
  localStorage.setItem("adviseyogi",JSON.stringify(res.data.saveUser))
  setName(" ")
})
.catch((err)=>{
  // console.log(err)
})
}

window.onclick=()=>{
  document.querySelector("#searchBox").style.display="none"
}


const handleChange = (e) => {
  document.querySelector("#searchBox").style.display="block"
  axios.get(`${baseUrl}/user/search/${e.target.value}`).
  then((res)=>{
  setUsers(res.data)
  })
  .catch((err)=>{
  // console.log(err)
  })
  }

const Singleuser=(id)=>{
  navigate(`/user/${id}`)
}


return (
    <Box border='2px solid black' m={10} h={600}>
      <Box mt={10} ml={['20%','20%','20%','80%']}>
        <Button onClick={onOpen} p={7} bg='transparent' border='2px solid black'>Add new IG id</Button>
      </Box>
      <Flex justifyContent='center'>
      <Heading fontSize={['40px','40px','40px','60px']} pt={10} color='red'>Advise</Heading>
        <Heading fontSize={['40px','40px','40px','60px']} pt={10}> Yogi</Heading>
      </Flex>
      <Flex direction={['column','column','column','row']} w='70%' m='auto' gap={5} pt={10}>
        <Input onInput={handleChange} border='2px solid red' borderRadius={0} p={10} placeholder='Search people by Instagram id'/>
        <Button border='1px solid black' _hover={{color:'black',bg:'white'}} borderRadius={0} p={10} color='white' bg='black'>Search</Button>
      </Flex>
      <Box w='70%' m='auto' >
      <Box h={[150,150,150,200]} id='searchBox' display='none' mt={5} overflow="auto" p={5} w='85%' border='2px solid black'>
        {
          users && users.map(ele=>(
            <Text key={ele._id} onClick={()=>Singleuser(ele._id)} cursor='pointer' fontSize='20px' fontWeight='bold' >{ele.fullName}</Text>
            ))
          }
      </Box>
          </Box>
      <Modal size='3xl' isCentered isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom'>
        <ModalOverlay bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'/>
        <ModalContent>
          <ModalHeader>Do not add already added IG ids in AdviseYogi</ModalHeader>
          <ModalCloseButton />
            <ModalBody>
                <Box mb={20}>
                    <Input border='1px solid red' value={name} onChange={(e)=>setName(e.target.value)} p={5} mt='120px' placeholder='Add new IG id'/>
                    <Box textAlign='center' pt='20px'>
                    <Button border='2px solid black' _hover={{color:'black',bg:'white'}} onClick={registerUser} p={6} bg='black' color='white'>Add</Button>
                    </Box>
                </Box>
            </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default Home
