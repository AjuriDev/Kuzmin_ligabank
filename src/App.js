import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import browserHistory from './assets/js/browser-history';
import ConverterScreen from './screens/ConverterScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import {AppRoute} from './assets/js/const';

const App = () => {
  return (
  <BrowserRouter history={browserHistory}>
    <Switch>
      <Route exact path={AppRoute.CONVERTER}>
        <ConverterScreen />
      </Route>
      <Route>
        <NotFoundScreen />
      </Route>
    </Switch>
  </BrowserRouter>
  );
};

export default App;
