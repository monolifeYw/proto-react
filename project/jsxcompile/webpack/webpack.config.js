// https://velopert.com/814
// https://firejune.com/1798/%EC%B4%88%EB%B3%B4%EC%9E%90%EC%9A%A9+Webpack+%ED%8A%9C%ED%86%A0%EB%A6%AC%EC%96%BC+%ED%8C%8C%ED%8A%B81+-+Webpack+%EC%9E%85%EB%AC%B8
var path = require('path');

module.exports = {

  // entry : Webpack 모듈에서 가장 처음으로 읽어들일 파일.
  // __dirname : 실행중인 스크립트가 있는 디렉토리 이름을 포함하는 nodejs 전역변수
  entry: path.join(__dirname, '/app/app.jsx'),

  // bundling 되는 파일의 위치 및 파일 이름 설정
  output: {
    path: __dirname + '/public',
    filename: '[name]-[hash].js'
  },

  // source-map : Bundling 된 파일을 브라우저에서 디버깅할때 원래 어떤 부분에서 문제가 생긴지 알기 힘듬
  //              Bundle 파일 내의 코드를 원래 소스 파일로 연결
  //              모든 기능이 포함된 완전한 소스맵을 별도의 파일로 생성, 빌드 프로세스가 느려짐
  // Bundle 코드를 곧바로 원래 소스 파일로 매핑하지 않는 옵션 : 'eval', 'cheap-source-map', 'cheap-eval-source-map'
  // - 빌드시간이 아주 중요한 대규모 프로젝트에 적합
  devtool: 'source-map',


  module: {
    // modules : 외부 스크립트와 도구를 통해 소스 파일을 전처리하고 다양한 변경과 변환을 적용
    // 전처리(Preprocessing) - 실질적인(사용자 작성 코드) 컴파일 이전에 정의해 놓은 작업을 먼저 수행
    // react의 jsx를 일반 js로 변환하는 용도로 사용
    loaders: [
      {
        // test(required) : 이 로더로 처리하기 위해 일치해야 하는 파일 확장자를 비교하는 정규표현식
        // ?? - ?가 붙는 것과 안붙는 것의 차이
        test: /\.jsx?$/,

        // loader(required) : 로더의 이름 필수
        // ?? babel, babel-loader 는 무슨 차이인지?
        loader: ['babel-loader'],

        // exclude : 로더가 명시적으로 무시할 폴더
        // 복수 지정 가능 : /(module1|module2|module3)/
        exclude: /node_modules/,

        // query : 로더가 추가 옵션을 전달하는 데 이용되는 쿼리 설정
        query: {
          // react jsx 지원을 위해 추가
          presets: ['react']
        }
      }
    ]
  },

  // 로컬 개발 서버
  devServer: {
    // 특정 컨텐츠 기반의 루트 지정
    contentBase: './public',

    // 서버가 터미널에 출력하는 내용의 색상을 지정
    colors: true,

    // 사용할 포트 지정 (기본값 8080)
    port: '8080',

    // 작은 클라이언트 엔트리를 Bundle에 삽입해 페이지 변경시(수정) 자동 새로 고침 된다.
    inline: true
  }
};
