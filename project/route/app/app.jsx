var React = require('react');
var ReactDOM = require('react-dom');

// router
var ReactRouter = require('react-router');
console.log('ReactRouter', ReactRouter);
// Router, Route : 라우트를 선언전으로 App의 화면 계층과 맵핑
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

// 올바른 href로 완전접근이 가능한 Anchor 태그를 만드는 데 이용
var Link = ReactRouter.Link;

// 기본 인덱스 페이지 접근
var IndexRoute = ReactRouter.IndexRoute;

// React Router은 History 모듈을 사용
// - 브라우저 주소표시줄의 변화를 탐지하고 URL을 해석하여 location 객체에 기록
// - Router은 맞는 Router를 찾은 후 해당 컴포넌트에 출력
//
// hashHistory : URL의 Hash 기능을 사용해 구현하며 example.com/#/some/path와 같은 형식의 URL이 생성
// - 모든 브라우저에서 사용이 가능
// - URL이 지저분해짐
var hashHistory = ReactRouter.hashHistory;

// browserHistory : History API를 사용하여 URL을 직접 조작
// - 보기 좋은 URL을 만들어줌
// - History API를 지원하지 않는 일부 브라우저에 동작하지 않음
var browserHistory = ReactRouter.browserHistory;

/*var useRouterHistory = ReactRouter.useRouterHistory;
var createHistory = ReactRouter.createRouterHistory;
var History = useRouterHistory(createHistory)({
  queryKey: false
});
*/

/*
https://github.com/reactjs/react-router/blob/master/docs/guides/README.md
https://github.com/reactjs/react-router/tree/master/examples

https://themeteorchef.com/snippets/react-router-basics/
https://medium.com/@dabit3/beginner-s-guide-to-react-router-53094349669#.hptsf06st
https://css-tricks.com/learning-react-router/

http://jmfurlott.com/tutorial-setting-up-a-single-page-react-web-app-with-react-router-and-webpack/
 */

var Home = require('./home.jsx');
var About = require('./about.jsx');
var Repos = require('./repos.jsx');
var NotFound = require('./404.jsx');

// normal link
var App = React.createClass({
  render: function() {
    console.log('[App]', this.props);
    return (
      <div>
        <header>App</header>
        <ul>
          <li>
            <a href="#/about">About</a>
            <ul>
              <li><a href="#/about/office">office</a></li>
              {/*
                - Link tag : 올바른 href로 완전접근이 가능한 Anchor 태그를 만드는 데 이용
                - 활성링크(activeClassName) 옵션 속성 제공
              */}
              <li><Link to="/about/family" activeClassName="active">family</Link></li>
            </ul>
          </li>
          <li><a href="#/repos">Repos</a></li>
        </ul>
        <hr />
        {/*
          - 일반적으로 Route 하나는 부모 컴포넌트에서 this.props.children 을 통해 이용이 가능한
            컴포넌트를 하나 포함 (하나이상도 설정 가능)
            Route : <Route path="/about" component={about1: About1, about2: About2}>
            render : {this.props.children.about1}
        */}
        {this.props.children}
      </div>
    );
  }
});

var AppLink = React.createClass({
  render: function() {
    console.log(this.props);
    return (
      <div>
        <header>App</header>
        <ul>
          <li>
            <Link to="/about">About</Link>
            <ul>
              <li><Link to="/about/office">office</Link></li>
              <li><Link to="/about/family">family</Link></li>
            </ul>
          </li>
          <li><Link to="/repos">Repos</Link></li>
        </ul>
        <hr />
        {this.props.children}
      </div>
    );
  }
});

// Make Route
var Routes = (
  /*
    history : 뒤로가기를 해도 페이지가 새로 리로딩 되지 않고 필요한 부분만 Re-rendering 해줌
    - React Router은 History 모듈을 사용
    - hashHistory : URL의 Hash 기능을 사용해 구현하며 example.com/#/some/path와 같은 형식의 URL이 생성
      - 모든 브라우저에서 사용이 가능
      - URL이 지저분해짐
    - browserHistory : History API를 사용하여 URL을 직접 조작 example.com/some/path
      - html5 pushState를 활용
        - BrowserSync에서 이부분에 대응해 줄 필요가 있다.
          - 브라우저에서 주소를 동적으로 생성하기 때문에, 서버상의 실제 경로와 연결되지 않음
          - 새로 고침을 했을 때(처음 요청시) 항상 서버에서 처리해야 하므로 "페이지 찾을 수 없음" 오류 확률이 높음
          - 서버에서는 인덱스 페이지 제공이 되어서 Router가 정상적인 view와 연결될 수 있게 하여야 한다.
          - webpack에서는 historyApiFallback 옵션을 제공해서 항상 인덱스 페이지를 제공한다.
      - 보기 좋은 URL을 만들어줌
      - History API를 지원하지 않는 일부 브라우저에 동작하지 않음
    */
  <Router history={hashHistory}>
    {/*
      - 기본 컨테이너는 'App' Component 를 사용
      - Route : 페이지를 Routing할 주소를 정의 해줌
      - 자식으로 들어가는 IndexRoute, Route는 App Component에
        children 이라는 props로 전달됨(component)
    */}
    <Route path="/" component={App}>
      {/* 기본 인덱스 페이지 접근 */}
      <IndexRoute component={Home} />
      <Route path="/about" component={About}>
          {/* about 경로의 서브 경로로 들어오는 부분은 id라는 param 명으로 해당 value 전달 받음 */}
          {/* about.jsx 참고 */}
          <Route path="/about/:id" component={About} />
      </Route>
      <Route path="/repos" component={Repos} />
    </Route>
    {/* 기본 컨테이너는 'NotFound' Component 를 사용 */}
    {/* 잘못된 URL 접근시 Not found page 활성화 */}
    <Route path="*" component={NotFound} />
  </Router>
);

ReactDOM.render(
    Routes,
    document.getElementById('react-container')
);
