import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

export const PublicRoute = ({ children }) => {

    const state = useSelector(state => state.auth)
    return !!state.uid
        ? <Navigate to={'/'}/>
        : children
}