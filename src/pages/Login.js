import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom';
import * as jwt from 'jsonwebtoken'
import { AuthContext } from '../context/authContext'

const Login = (props) => {
  const { login, upLogin } = useContext(AuthContext);
  const [password, setPassword] = useState('');

  function onChange(e) {
    setPassword(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(password === "123") {
      upLogin()
      localStorage.setItem('token', JSON.stringify(jwt.sign(password, 'acexis')))
      setPassword('');
    }
    setPassword('');
  }

  if(login) {
    return <Redirect to='/dashboard'></Redirect>
  }

  return (
    <div>
      {/* 
      TODO: Your login page implementation
      */
      }
      <form onSubmit={onSubmit}>
        <input data-test='login__pwd' type='password' value={password} onChange={onChange}/>
        <button data-test='login__submit' type='submit'>login</button>
      </form>
    </div>
  )
}

export default Login