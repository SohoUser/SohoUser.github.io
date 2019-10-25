import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from "~con/menu/menu";
import routes from "~/routes/routes";
import Notify from "~con/notify/notify";

class App extends React.PureComponent {

  render() {

    const routesList = routes.map(route => {
      return (
        <Route
          key={route.url}
          path={route.url}
          component={route.component}
          exact={route.exact}
        />
      );
    });

    return (
      <BrowserRouter>
      <Notify/>
        <header>
          <Menu />
        </header>
        <main>
          <div className="container">
            <Switch>
              {routesList}
            </Switch>
          </div>
        </main>
      </BrowserRouter>
    );

  }

}

export default App;