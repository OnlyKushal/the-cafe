import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from '../pages/auth/Login'
import Dashboard from '../pages/dashboard/Dashboard'

export default function () {
  return (
    <Routes>
        <Route path="/" element={<Login /> } />
        <Route path="/dashboard" element={<Dashboard /> } />
    </Routes>
  )
}
