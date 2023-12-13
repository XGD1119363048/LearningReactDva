import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import App from './routes/App';
import Films from './routes/Films';
import Cinemas from './routes/Cinemas';
import Center from './routes/Center';
import Detail from './routes/Detail';
import Login from './routes/Login';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path="/" render={() => 
          <App>
            <Switch>
              <Route path='/films' component={Films} />
              <Route path='/cinemas' component={Cinemas} />
              <Route path='/center' render={() => localStorage.getItem('token') ? <Center /> : <Redirect to='/login' />} />
              <Route path='/detail/:id' component={Detail} />

              <Redirect from='/' to='/films' />
            </Switch>
          </App>}
        />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
