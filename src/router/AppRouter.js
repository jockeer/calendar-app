import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { startChecking } from '../actions/auth'
import { LoginScreen } from '../components/auth/LoginScreen'
import { CalendarScreen } from '../components/calendar/CalendarScreen'
import { PrivateRoute } from './PrivateRoutes'
import { PublicRoute } from './PublicRoutes'


export const AppRouter = () => {

  const dispatch = useDispatch()
  const {checking} = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(startChecking())
  }, [dispatch])
  
  if (checking) {
    return <h1>Espere...</h1>
  }
  

  return (
    <Router>
        <Routes>
            <Route path='/login' element={ 
              <PublicRoute>
                <LoginScreen />
              </PublicRoute>
             }/>
            <Route path='/*' element={ 
              <PrivateRoute>
                <CalendarScreen /> 
              </PrivateRoute>
            } />
        </Routes>
    </Router>
  )
}
