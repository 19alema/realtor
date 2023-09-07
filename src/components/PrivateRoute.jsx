import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import UseAuth from '../hooks/UseAuth'
import {Spinner} from "./index"
function PrivateRoute() {
const {checkingStatus, loggedIn} = UseAuth()

    const logged = loggedIn;
    if(checkingStatus) {
        return <Spinner/>
    }
  return logged? <Outlet /> : <Navigate to='/sign-in'/>
}

export default PrivateRoute