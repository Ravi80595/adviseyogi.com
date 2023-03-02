import { Box,Flex,Heading,Button,Text,useDisclosure,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody, Textarea,Spinner} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {BiLike} from 'react-icons/bi'
import { baseUrl } from '../Components/BaseUrl'
import {AiTwotoneLike} from "react-icons/ai"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import MyComponent from '../Components/Date'


const SingleUser = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [comment,setComment]=useState('')
  const { _id,fullName} = JSON.parse(localStorage.getItem("adviseyogi"))
  const [loading,setLoading]=useState(false)
  const [posts,setPosts]=useState([])
  const {id}=useParams()
  const [name,setName]=useState('')

useEffect(()=>{
  getSingleComments()
},[])


const getSingleComments=()=>{
  setLoading(true)
  console.log(id)
axios.get(`${baseUrl}/post/comments/${id}`)
  .then((res)=>{
      console.log(res.data)
      setPosts(res.data)
      setLoading(false)   
  })
  .catch((err)=>{
      console.log(err)
  })
}

const addComment=()=>{
  const payload={
    text:comment,
    userId:_id,
    username:fullName
  }
  console.log(payload)
  axios.post(`${baseUrl}/post/addComment`,payload)
  .then((res)=>{
    console.log(res)
    alert("Comment added")
    setComment(" ")
  })
  .catch((err)=>{
    console.log(err)
})
}



const likePost=(id)=>{
  console.log("cliked",_id,id)
axios.patch(`${baseUrl}/post/like/${id}`,{userId:_id})
.then((res)=>{
  console.log(res)
  getSingleComments()
})
.catch((err)=>{
  console.log(err)
})
}

if(loading){
  return <Spinner textAlign='center' mt={50} ml={50} thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl'/>
}


return (
  <Box>
      <Link to="/"> 
      <Flex >
      <Heading fontSize='30px' pt={5} pl={5} color='red'>Advise</Heading>
        <Heading fontSize='30px' pt={5}>Yogi</Heading>
      </Flex>
      </Link>
      <Flex justifyContent='space-around'>
        <Box w='50%'>
            <Text textAlign='center'>Ravi Sharma</Text>
        </Box>
        <Flex w='25%' justifyContent='space-around'>
        <Button p={7} bg='transparent' border='2px solid black'>Notify me</Button>
        <Button onClick={onOpen} p={7} bg='transparent' border='2px solid black'>Add Comment</Button>
        </Flex>
      </Flex>
      {
        posts && posts.map(ele=>(
      <Box borderRadius={20} fontSize="24px" p={5} m='auto' w='90%' mt={10} border='2px solid black'>
        <Text>{ele.text}</Text>
        <Flex w='15%' pt={5} justifyContent="space-around">
            {/* <Text>d</Text> */}
            <MyComponent props={ele}/>
            <Flex>
            {
            ele.likes.includes(_id)?<AiTwotoneLike onClick={()=>likePost(ele._id)} fontSize='25px' cursor={"pointer"} color="red"/>:<BiLike onClick={()=>likePost(ele._id)} fontSize='25px' cursor={"pointer"}/>
          }
            <Text pl={2}> {ele.likes.length}</Text>
            </Flex>
        </Flex>
          </Box>
        ))
      }
        <Modal size='3xl' isCentered isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom'>
        <ModalOverlay bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'/>
        <ModalContent>
          <ModalCloseButton mb={9}/>
          <ModalHeader pt={5}>Note : Every comments sent will be reviewed and added a touch of kindness to it. Let’s make the world a better place with better people. 
          </ModalHeader>
            <ModalBody>
                <Box mb={20}>
                    <Textarea border='1px solid red' value={comment} onChange={(e)=>setComment(e.target.value)} p={5} mt='70px' placeholder='Add your comment/advise '/>
                    <Box textAlign='center' pt='20px'>
                    <Button onClick={addComment} p={6} bg='black' color='white'>Send</Button>
                    </Box>
                </Box>
            </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default SingleUser
