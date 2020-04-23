import React from 'react'
import { Menu }from '../components/Menu'
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { useContext } from 'react';

const Dashboard = () => {
  const { login } = useContext(AuthContext);
  if(!login) return <Redirect to='/login'></Redirect>
  return (
    <div>
      <Menu/>
      <p data-test='db__welcome'>
        Welcome to dashboard page
      </p>
    </div>
  )
}

export default Dashboard;