import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const isAuth = localStorage.getItem('isAdviseYogiAuth');

if(isAuth=="" || isAuth=="undefined" || isAuth==null || isAuth=='null'){
    return <Navigate to="/admin/login"/>
}
  return children
}

export default PrivateRoute

