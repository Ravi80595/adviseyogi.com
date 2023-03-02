import React, { useEffect, useState } from 'react'
import { Box,TableContainer,Table,Thead,Tr,Th,Tbody,Td,Spinner,Image,Flex,Text,Input,Select } from '@chakra-ui/react'
import axios from 'axios'
import { baseUrl } from '../../Components/BaseUrl'
import { useNavigate } from 'react-router-dom'

const UsersPage = () => {
    const [loading,setLoading]=useState(false)
    const [users,setUsers]=useState([])
    const navigate=useNavigate()



useEffect(()=>{
    setLoading(true)
axios.get(`${baseUrl}/user/allUser`)
    .then((res)=>{
        console.log(res.data)
        setUsers(res.data)
        setLoading(false)   
    })
    .catch((err)=>{
        console.log(err)
    })
    },[])

const handleChange = (e) => {
    axios.get(`${baseUrl}/user/search/${e.target.value}`)
.then((res)=>{
    console.log(res)
    setUsers(res.data)
    })
    .catch((err)=>{
    console.log(err)
    })
}


const handleNavigate=(ele)=>{
    navigate(`/singleuser/${ele._id}`)
  }

if(loading){
return <Spinner textAlign='center' mt={50} ml={50} thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl'/>
}


return (
    <Box>
      <Flex justifyContent="space-between" pb={10}>
        <Text w={["30%","30%","30%","15%"]} fontSize={["10px","10px","10px","20px"]}>Total Users : {users.length}</Text>
        <Input fontSize={["10px","10px","10px","20px"]} onInput={handleChange} w={["30%","30%","30%","60%"]} placeholder="search user"/>
        <Text w={["30%","30%","30%","15%"]} fontSize={["10px","10px","10px","20px"]}>Verified Users : 0</Text>
      </Flex>
          <TableContainer>
            <Table size='sm'>
              <Thead>
                <Tr textAlign='center'>
                  <Th>Image</Th>
                  <Th>User-name</Th>
                  <Th>Joining-Date</Th>
                  <Th>Joining-Time</Th>
                </Tr>
              </Thead>
              <Tbody>
      {
        users && users.map(ele=>(
                <Tr onClick={()=>handleNavigate(ele)} cursor="pointer" _hover={{backgroundColor:"#f3f4f6"}}>
                  <Td><Image w={50} src={`https://www.freeiconspng.com/uploads/blank-face-person-icon-7.png`}/></Td>
                  <Td>{ele.fullName}</Td>
                  <Td>{ele.date} {ele.lastName}</Td>
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

export default UsersPage
