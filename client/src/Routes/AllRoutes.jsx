import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import SingleUser from '../Pages/SingleUser'

const AllRoutes = () => {


return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/user/:id" element={<SingleUser/>}></Route>
    </Routes>
  )
}

export default AllRoutes
