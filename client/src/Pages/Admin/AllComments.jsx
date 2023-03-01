import React, { useEffect, useState } from 'react'
import { Box,TableContainer,Table,Thead,Tr,Th,Tbody,Td,Spinner,Image,Flex,Text,Input,Select } from '@chakra-ui/react'
import { baseUrl } from '../../Components/BaseUrl'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AllComments = () => {
    const [loading,setLoading]=useState(false)
    const [posts,setPosts]=useState([])
    const navigate=useNavigate()


useEffect(()=>{
    getComments()
},[])


const getComments=()=>{
setLoading(true)
axios.get(`${baseUrl}/post/allComments`)
    .then((res)=>{
        console.log(res.data)
        setPosts(res.data)
        setLoading(false)   
    })
    .catch((err)=>{
        console.log(err)
    })
}

if(loading){
    return <Spinner textAlign='center' mt={50} ml={50} thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl'/>
}

const handleNavigate=(ele)=>{
    navigate(`/adminsingleuser/${ele._id}`)
}

return (
    <Box>
    <Flex justifyContent="space-between" pb={10}>
      <Text w={["30%","30%","30%","20%"]} fontSize={["10px","10px","10px","20px"]}>Total Comments: {posts.length}</Text>
      <Text w={["30%","30%","30%","20%"]} fontSize={["10px","10px","10px","20px"]}>New Comments : 0</Text>
    </Flex>
        <TableContainer>
          <Table size='sm'>
            <Thead>
              <Tr textAlign='center'>
                <Th>Comment</Th>
                <Th>Joining-Date</Th>
                <Th>User Name</Th>
              </Tr>
            </Thead>
            <Tbody>
    {
      posts && posts.map(ele=>(
              <Tr onClick={()=>handleNavigate(ele)} cursor="pointer" _hover={{backgroundColor:"#f3f4f6"}}>
                <Td><Image w={50} src={`https://www.freeiconspng.com/uploads/blank-face-person-icon-7.png`}/></Td>
                <Td>{ele.text}</Td>
                <Td>{ele.date} {ele.time}</Td>
                <Td>{ele.time}</Td>
              </Tr>
              ))
            }
            </Tbody>
          </Table>
        </TableContainer>
  </Box>
  )
}

export default AllComments
