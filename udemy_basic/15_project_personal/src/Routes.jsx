// 1.import
var React = require('react');
var ReactRouter = require('react-router');
var HistoryRouter = require('history');


// 2.
// basic set
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

// browser history
var useRouterHistory = ReactRouter.useRouterHistory;
var createHashHistory = HistoryRouter.createHashHistory;
var appHistory = useRouterHistory(createHashHistory)({queryKey: false});

// Structure
/*
  - Nav
  - Container
      - Contents - Index
                 - Product
      - Form Contents



       */

var BasePage = require('./components/BasePage.jsx');
var HomePage = require('./components/HomePage.jsx');
var ProductPage = require('./components/ProductPage.jsx');

var Routes = (
  <Router history={appHistory}>
    <Route path="/" component={BasePage}>
      <IndexRoute component={HomePage} />
      <Route path="/product/:productId" component={ProductPage} />
    </Route>
  </Router>
);

module.exports = Routes;
