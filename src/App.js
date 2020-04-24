import React from 'react'
import routes from './config/routes'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const RouteWithSubRoutes = (route) => (
  <Route
    exact={route.computedMatch.isExact} 
    path={route.path}
    render={props => (
      <route.component {...props} routes={route.routes} />
    )}
  />
);

function App () {
  return (
    <Router>
      {/* Bắt buộc phải sử dụng dynamic import dựa theo
          file routes config (khi thêm bớt component thì chỉ sửa file config)
          không cần sửa code tại đây
      */}
      <Switch>{
        routes.map(route => (
          <RouteWithSubRoutes key={route.path} {...route} />
        ))
      }</Switch>
    </Router>
  )
}

export default App