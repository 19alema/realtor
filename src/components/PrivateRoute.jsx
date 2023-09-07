import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import UseAuth from '../hooks/UseAuth'
function PrivateRoute() {
const {checkingStatus, loggedIn} = UseAuth()

    const logged = loggedIn;
    if(checkingStatus) {
        return <h3>Loading ...</h3>
    }
  return logged? <Outlet /> : <Navigate to='/sign-in'/>
}

export default PrivateRoute