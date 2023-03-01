import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Dashboard from '../Pages/Admin/Dashboard'
import Home from '../Pages/Home'
import SingleUser from '../Pages/SingleUser'

const AllRoutes = () => {


return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/user/:id" element={<SingleUser/>}></Route>
        <Route path="/admin" element={<Dashboard/>}></Route>
    </Routes>
  )
}

export default AllRoutes
