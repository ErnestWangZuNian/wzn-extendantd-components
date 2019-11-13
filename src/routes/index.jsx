import { HashRouter, Route, Switch } from 'react-router-dom';
import { AsyncComponent } from 'wzn-base-components';

const Demo = AsyncComponent(() => import('@/pages/demo'));

const Router = (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={Demo} />
    </Switch>
  </HashRouter>
);
export default Router;
