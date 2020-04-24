import React, { useContext } from 'react'
import routes from './config/routes'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import {AuthContext} from './context/authContext';

const RouteWithSubRoutes = (route) => {
  if(route.isProtected) {
    return route.auth ? (
      <Route
        exact={route.computedMatch.isExact} 
        path={route.path}
        render={props => (
          <route.component {...props} routes={route.routes} />
        )}
      />
    ):(<Redirect to="/login"></Redirect>)
  } else {
    return (
      <Route
        exact={route.computedMatch.isExact} 
        path={route.path}
        render={props => (
          <route.component {...props} routes={route.routes} />
        )}
      />
    )
  }
};

function App () {
  const { login } = useContext(AuthContext);
  return (
    <Router>
      {/* Bắt buộc phải sử dụng dynamic import dựa theo
          file routes config (khi thêm bớt component thì chỉ sửa file config)
          không cần sửa code tại đây
      */}
      <Switch>{
        routes.map(route => (
          <RouteWithSubRoutes key={route.path} {...route} auth={login}/>
        ))
      }</Switch>
    </Router>
  )
}

export default App