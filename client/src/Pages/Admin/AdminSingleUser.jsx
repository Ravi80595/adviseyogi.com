import { Box,Flex,Text,Heading,Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../../Components/BaseUrl'
import axios from 'axios'

const AdminSingleUser = () => {
    const [loading,setLoading]=useState(false)
    const [posts,setPosts]=useState([])
    const [name,setName]=useState('')
    const {id}=useParams()

useEffect(()=>{
    getSingleComments()
},[])
    
const getSingleComments=()=>{
setLoading(true)
axios.get(`${baseUrl}/post/comments/${id}`)
.then((res)=>{
    // console.log(res.data)
    setPosts(res.data)
    setName(res.data[0].username)
    setLoading(false)   
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
        <Heading textAlign='center' pt={5}>All Comments By {name}</Heading>
     {
        posts && posts.map(ele=>(
      <Box borderRadius={20}  p={5} m='auto' w='90%' mt={10} border='2px solid black'>
        <Flex w='75%' justifyContent="space-between">
            <Text>Date : {ele.date}</Text>
            <Text>Likes : {ele.likes.length}</Text>
        </Flex>
        <Box fontSize="24px" pt={5}>
        <Text>{ele.text}</Text>
        </Box>
          </Box>
        ))
      }
    </Box>
  )
}

export default AdminSingleUser
