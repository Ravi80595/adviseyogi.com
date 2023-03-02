import React from 'react'
import {Routes,Route} from 'react-router-dom'
import AdminSingleUser from '../Pages/Admin/AdminSingleUser'
import Dashboard from '../Pages/Admin/Dashboard'
import Login from '../Pages/Admin/Login'
import Home from '../Pages/Home'
import SingleUser from '../Pages/SingleUser'
import AdminPrivateRoute from '../Routes/AdminPrivateRoute'

const AllRoutes = () => {


return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/user/:id" element={<SingleUser/>}></Route>
        <Route path="/singleuser/:id" element={<AdminPrivateRoute><AdminSingleUser/></AdminPrivateRoute>}></Route>
        <Route path="/admin/login" element={<Login/>}></Route>
        <Route path="/admin" element={<AdminPrivateRoute><Dashboard/></AdminPrivateRoute>}></Route>
    </Routes>
  )
}

export default AllRoutes
