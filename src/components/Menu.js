import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';


export const Menu = () => {
  const { upLogin } = useContext(AuthContext);

  const onClick = () => {
    localStorage.removeItem('token');
    upLogin();
  }
  
  return (
    <div>
      <h3>Menu</h3>
      <ul id='menu'>
        <li><Link to='/dashboard'>dashboard</Link></li>
        <li><Link to='/setting'>setting</Link></li>
        <li><Link to='/dashboard'><button data-test='logout__btn' onClick={onClick}>Logout</button></Link></li>
      </ul>
    </div>
  )
}