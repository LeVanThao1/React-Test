// isProtected: các route cần được bảo vệ
// Có thể thêm giá trị vào đây
import React from 'react'
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Setting from '../pages/Setting';
import Functions from '../pages/Functions';
import NotFound from '../pages/NotFound';
import FunctionFoo from '../pages/FunctionFoo';

export default [
  {
    title: 'Login Page | Sample App',
    component: () => <Login></Login>,
    path: '/login',
    isProtected: false
  },
  {
    title: 'Dashboard | Sample App',
    component: () => <Dashboard></Dashboard>,
    path: '/dashboard',
    isProtected: true,
    exact: true
  },
  {
    title: 'Setting | Sample App',
    component: () => <Setting></Setting>,
    path: '/setting',
    isProtected: true
  },
  {
    title: 'Functions',
    component: () => <Functions></Functions>,
    path: '/functions',
    isProtected: true,
  },
  {
    title: 'Functions',
    component:() => <FunctionFoo></FunctionFoo>,
    path: '/functions/foo',
    isProtected: true
  },
  {
    title:'Not found',
    component: () => <NotFound></NotFound>,
    path: '*'
  }
]