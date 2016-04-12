var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;



// var Link = ReactRouter.Link;

var useRouterHistory = ReactRouter.useRouterHistory;
var createHistory = ReactRouter.createRouterHistory;



var hashHistory = ReactRouter.hashHistory;  // basic
// var History = ReactRouter.hashHistory;
var browserHistory = ReactRouter.browserHistory;
// browserHistory.push('/');

// var History = useRouterHistory(createHistory)({
//   queryKey: false
// });

var Base = require('./components/Base.jsx');
var Page1 = require('./components/Page1.jsx');
var Page2 = require('./components/Page2.jsx');
var index = require('./components/index.jsx');
var notfound = require('./components/notfound.jsx');
var hello = require('./components/hello.jsx');

var Routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Base}>
      <IndexRoute component={index}></IndexRoute>
      <Route path="/page1" component={Page1} />
      <Route path="/page1/:name" component={hello} />
      <Route path="/page2" component={Page2} />
    </Route>
    <Route path="*" component={notfound} />
  </Router>
)
// <Route path="*" component={Base}/>
module.exports = Routes;
