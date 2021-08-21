import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { authRoutes, adminRoutes, userRoutes } from './routes';
import { isLoggedIn, getRole } from './utilities/Auth';
import NotFound from './utilities/pages/NotFound/NotFound';
import AdminLayout from './utilities/layouts/AdminLayout/AdminLayout';
import './App.css';
import 'tippy.js/dist/tippy.css';

const layoutRoutes = () => {
  if (getRole() === 'admin') {
    return adminRoutes;
  } else {
    return userRoutes;
  }
};

const App = () => {
  return (
    <Switch>
      {authRoutes.map((route, index) => (
        <Route
          key={index}
          exact
          path={route.path}
          component={route.component}
        />
      ))}

      {isLoggedIn() ? (
        layoutRoutes().map((route, index) => (
          <Route
            key={index}
            exact
            path={route.path}
            component={() => (
              <AdminLayout>
                <route.component />
              </AdminLayout>
            )}
          />
        ))
      ) : (
        <Redirect to='/signIn' />
      )}

      <Route component={NotFound} />
    </Switch>
  );
};

export default App;
