import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import { LOCAL_TOKEN } from '../store/useLocalStorage'

export function RequireAuth({children}) {
  const token = localStorage.getItem(LOCAL_TOKEN);
  const location = useLocation();

  if (!token) {
    return <Navigate to='/login' state={{from: location}} />
  }

  return (
    <div>
      {children}
    </div>
  )
}
