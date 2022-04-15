import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startLogout } from '../../actions/auth'
import { eventClearLogout } from '../../actions/events'

export const Navbar = () => {
  const {name} = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const handleLogout = () =>{
    dispatch(startLogout())
    dispatch(eventClearLogout())
  }
  return (
    <div className='navbar navbar-darg bg-dark mb-4 p-3'>
        <span className='navbar-brand text-white'>
            {name}
        </span>

        <button className='btn btn-outline-danger' onClick={handleLogout}>
            <i className='fas fa-sign-out-alt'></i>
            <span> Salir</span>
        </button>
    </div>
  )
}
