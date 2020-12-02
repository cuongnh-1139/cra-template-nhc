import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../../utils/constants';

const HomePage = lazy(() => import('../HomePage'));
const NotFoundPage = lazy(() => import('../NotFoundPage'));

function App() {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route exact path={routes.homepage} component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
}

export default App;
