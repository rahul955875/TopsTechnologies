import React from 'react'
import { Navigate, Outlet } from 'react-router'

export const LoginService = () => {
const auth = localStorage.getItem('LoginAdmin')
return auth ? <Outlet /> : <Navigate to='/' />
}
