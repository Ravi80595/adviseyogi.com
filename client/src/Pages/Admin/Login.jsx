import { Box,Button,Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()



const handleLogin=()=>{
    if(email=="ashwin" && password=='ashwin'){
        localStorage.setItem('isAdviseYogiAuth',JSON.stringify('ravi'))
        alert("Login Success")
        navigate("/admin")
    }else{
        alert("wrong Details")
    }
}


return (
  <Box textAlign='center' w='40%' m='auto' mt={10}>
  <Button mb={2} _hover={{color:'black'}} w='100%' bg='#720000' color='white'>Admin Login</Button>
  <Box boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px' p={10} >
      <Input value={email} onChange={(e)=>setEmail(e.target.value)} p={5} m={3} placeholder='Enter email'/>
      <Input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} id='password' p={5} m={3} placeholder='Password'/>
      <Button onClick={handleLogin} _hover={{color:'black'}} id='loginButton' mt={5} borderRadius={0} bg='blue' color='white'>Login</Button>
  </Box>
  </Box>
  )
}

export default Login
