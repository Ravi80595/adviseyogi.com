import React from 'react'
import "./Dashboard.css"
import { Flex,Box,Text, Button} from '@chakra-ui/react'
import { useState } from 'react'
import UsersPage from './UsersPage'
import {FaUserAlt} from "react-icons/fa"
import {RiAdminFill} from "react-icons/ri"
import {GiPostStamp} from "react-icons/gi"
import AllComments from './AllComments'
import Approved from './Approved'
import { useNavigate } from 'react-router-dom'



const Dashboard = () => {
    const [show,setShow]=useState("Users")
    const navigate=useNavigate()

const handleLogout=()=>{
    localStorage.setItem('isAdviseYogiAuth',JSON.stringify(null))
    navigate("/admin/login")
}


return (
<Flex w='100%'>
    <Box id='lhsBox' fontSize={[12,15,20]} w={["5%","5%","10%","16%"]} h='100vh' p={["0px","0px",'20px']}>
    <Text textAlign={"center"} mb={5} >AdviceYogi</Text>
        <Box id='linkBox'>
        <Text display={["none","none","none","block"]} >Client Facing</Text>
        <Flex id='usersBox' p='10px 17px' className='linkItem' onClick={()=>setShow("Admins")}>
        <RiAdminFill/>
        <Text pl={["0px","5px",'15px']} className="lhsName">Approvals</Text>
        </Flex>
        <Flex id='usersBox' p='10px 17px' className='linkItem' onClick={()=>setShow("Users")}>
        <FaUserAlt/>
        <Text pl={["0px","5px",'15px']} className="lhsName">Users</Text>
        </Flex>
        <Flex id='usersBox' p='10px 17px' className='linkItem' onClick={()=>setShow("Posts")}>
        <GiPostStamp/>
        <Text pl={["0px","5px",'15px']} className="lhsName">Comments</Text>
        </Flex>
        </Box>
        </Box>
        <Box id='rhsBox' w='84%' ml='16%' h='auto'> 
        <Box id='navbarBox'  p='0px 40px'>
        <Flex justifyContent='space-between'>
            <Text pt={3} mb={3} fontWeight='bold'>Welcome To Dashboard</Text>
            <Button mt={2} onClick={handleLogout}>Logout</Button>
        </Flex>
     </Box>
    <Box id='rhsBody' m='30px' p='30px'>

{
show==="Users"?<UsersPage/>:show=="Admins"?<Approved/>:show=="Posts"?<AllComments/>:<h1>Fearture Available Soon</h1>
}
</Box>
</Box>
</Flex>
  )
}

export default Dashboard