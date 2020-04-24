// isProtected: các route cần được bảo vệ
// Có thể thêm giá trị vào đây
import React from 'react';
import Loadable from 'react-loadable';
import { Redirect } from 'react-router-dom';

const DynamicImport = (LoaderComponent) => Loadable({
  loader: LoaderComponent,
  loading: () => null
});

export default [
  {
    title: 'Login Page | Sample App',
    component: DynamicImport(() => import('../pages/Login')),
    path: '/login',
    isProtected: false
  },
  {
    title: 'Dashboard | Sample App',
    component: DynamicImport(() => import('../pages/Dashboard')),
    path: '/dashboard',
    isProtected: true,
    exact: true
  },
  {
    title: 'Dashboard | Sample App',
    component: () => <Redirect to="/dashboard" />,
    path: '/',
    isProtected: true,
    exact: true
  },
  {
    title: 'Setting | Sample App',
    component: DynamicImport(() => import('../pages/Setting')),
    path: '/setting',
    isProtected: true
  },
  {
    title: 'Functions',
    component: DynamicImport(() => import('../pages/Functions')),
    path: '/functions',
    isProtected: true,
  },
  {
    title: 'Functions',
    component:DynamicImport(() => import('../pages/FunctionFoo')),
    path: '/functions/foo',
    isProtected: true
  },
  {
    title:'Not found',
    component: DynamicImport(() => import('../pages/NotFound')),
    path: '/*',
    isProtected: false
  }
]