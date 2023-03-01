import React, { useEffect, useState } from 'react'
import {Button,Box,TableContainer,Table,Thead,Tr,Th,Tbody,Td,Spinner,Image,Flex,Text,Input,Select } from '@chakra-ui/react'
import { baseUrl } from '../../Components/BaseUrl'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Approved = () => {
    const [loading,setLoading]=useState(false)
    const [posts,setPosts]=useState([])
    const navigate=useNavigate()

useEffect(()=>{
    getComments()
},[])


const getComments=()=>{
setLoading(true)
axios.get(`${baseUrl}/post/unapprovedComments`)
    .then((res)=>{
        console.log(res.data)
        setPosts(res.data)
        setLoading(false)   
    })
    .catch((err)=>{
        console.log(err)
    })
}    

// const handleNavigate=(ele)=>{
//     navigate(`/adminsingleuser/${ele._id}`)
// }

const approveComment=(id)=>{
axios.put(`${baseUrl}/post/approveComments`,{postId:id})
.then((res)=>{
    console.log(res)
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
        <TableContainer>
          <Table size='sm'>
            <Thead>
              <Tr textAlign='center'>
                <Th>Comment</Th>
                <Th>Adding Date</Th>
                <Th>Approve</Th>
              </Tr>
            </Thead>
            <Tbody>
    {
      posts && posts.map(ele=>(
              <Tr cursor="pointer" _hover={{backgroundColor:"#f3f4f6"}}>
                <Td w='30%'>{ele.text}</Td>
                <Td>{ele.date} {ele.time}</Td>
                <Td><Button onClick={()=>approveComment(ele._id)}>Approve</Button></Td>
              </Tr>
              ))
            }
            </Tbody>
          </Table>
        </TableContainer>
  </Box>
  )
}

export default Approved
