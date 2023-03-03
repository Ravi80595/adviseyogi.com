import React, { useEffect, useState } from 'react'
import {Button,Box,Spinner,Flex,Text} from '@chakra-ui/react'
import { baseUrl } from '../../Components/BaseUrl'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'



const Approved = () => {
    const [loading,setLoading]=useState(false)
    const [posts,setPosts]=useState([])
    // const navigate=useNavigate()


useEffect(()=>{
    getComments()
},[])


const getComments=()=>{
setLoading(true)
axios.get(`${baseUrl}/post/unapprovedComments`)
    .then((res)=>{
        // console.log(res.data)
        setLoading(false)   
        setPosts(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}    


const approveComment=(id,name)=>{
axios.put(`${baseUrl}/post/approveComments`,{postId:id,username:name})
.then((res)=>{
    // console.log(res)
    alert("Comment Approved")
    getComments()
})
.catch((err)=>{
  console.log(err)
})
}

const editComment=(id)=>{
  let text=prompt("Enter Edited text")
axios.patch(`${baseUrl}/post/editComment/${id}`,{newText:text})
.then((res)=>{
  // console.log(res)
  getComments()
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
    <Flex justifyContent="space-between" pb={10}>
      <Text w={["30%","30%","30%","25%"]} fontSize={["10px","10px","10px","20px"]}>Unapproved Comments : {posts.length}</Text>
      <Text w={["30%","30%","30%","25%"]} fontSize={["10px","10px","10px","20px"]}>Approved Comments : 0</Text>
    </Flex>
    {
      posts && posts.map(ele=>(
              <Box boxShadow= 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset' justifyContent='space-around' w='95%' p={5} m='auto' mt={10}>
                <Flex justifyContent='space-around' pb={2} fontSize={['10px','10px','10px','20px']}>
                <Text>Date : {ele.date}</Text>
                <Text>Username : {ele.username}</Text>
                </Flex>
                <Text pb={5} textAlign='center'>{ele.text}</Text>
                <Flex justifyContent='center' gap={10}>
                <Button onClick={()=>editComment(ele._id)}>Edit</Button>
                <Button onClick={()=>approveComment(ele._id,ele.username)}>Approve</Button>
                </Flex>
             </Box>
              ))
            }
  </Box>
  )
}

export default Approved
