var List = React.createClass({
  render: function () {
    return (
      <div>
        <img width="140" src={this.props.imgUrl} />
        <h3>{this.props.title}</h3>
      </div>
    )
  }
});

var Container = React.createClass({
  render: function () {
    var results = this.props.results;
    var lists = this.props.results.map(function (list, idx) {
      return <List key={idx} imgUrl={list.imgUrl} title={list.title} />;
    });
    return (
      <div>
        {lists}
      </div>
    )
  }
});

var FormInput = React.createClass({
  submit: function (e) {
    var value = this.refs.txtInput.value;

    if (value !== '') {
      this.connect(value, function(data) {
        console.log(this);
        this.props.callbacks.update(data);
      }.bind(this));
      this.refs.txtInput.value = '';
    }
    e.preventDefault();
  },

  connect: function (keyword, successCallback) {
    $.ajax({
      url: 'http://suggest2.wemakeprice.com/api_auto_search/topdeals',
      type: 'GET',
      data: {
        ver: '1.0',
        keyword: keyword
      },
      async: true,
      success: function(res) {
        console.log('ajax', res);
        if (res.code === 1) {
          return successCallback(res.result_set.deals[0]);
        }
      }
    })
  },

  render: function () {
    return (
      <form onSubmit={this.submit}>
        <input ref="txtInput" placeholder="search deals" />
        <button>Add</button>
      </form>
    );
  }
});

var App = React.createClass({
  getInitialState: function () {
    return {
      searchResults: []
    }
  },

  update: function (list) {
    var searchResults = this.state.searchResults.concat({
      title: list.deal_text,
      imgUrl: list.img_url
    });

    this.setState({
      searchResults: searchResults
    });
  },

  render: function() {
    return (
      <div>
        <FormInput callbacks={{
          update: this.update
        }} />
        <Container results={this.state.searchResults} />
      </div>
    );
  }

});

ReactDOM.render(
  <App />,
  document.getElementById('react-container')
)
