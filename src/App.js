import React from 'react'
import routes from './config/routes'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import loadable from "@loadable/component";

// import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
// import Setting from './pages/Setting';
// import Functions from './pages/Functions';
// import NotFound from './pages/NotFound';
// import FunctionFoo from './pages/FunctionFoo';
const RouteWithSubRoutes = (route) => (
  <Route
    exact={route.computedMatch.isExact} 
    path={route.path}
    render={props => (
      <route.component {...props} routes={route.routes} />
    )}
  />
);
const LoadableComponent = loadable(() => import("./pages/Dashboard.js"), {
  // fallback: <Loading />
});
const LoadableLogin = loadable(() => import("./pages/Login"));
function App () {
  return (
    <Router>
      {/* Bắt buộc phải sử dụng dynamic import dựa theo
          file routes config (khi thêm bớt component thì chỉ sửa file config)
          không cần sửa code tại đây
      */}
      {/* <LoadableComponent></LoadableComponent>
      <LoadableLogin></LoadableLogin> */}
      {
        // showRoute(routes)
      }
      {/* <Link to='/login'></Link>
      <Link to='/dashboard'></Link> */}
      <Switch>{
        routes.map(route => (
          <RouteWithSubRoutes key={route.path} {...route} />
        ))
      }</Switch>
    </Router>
  )
}
// function showRoute(routes) {
//   let result = null;
//   result = routes.map((route) => {return (
//     <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
//   )})
//   return <Switch>{result}</Switch>
// }

export default App