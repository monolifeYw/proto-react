var React = require('react');
var TodoList = require('./todoList.jsx');

var TodoMain = React.createClass({


  renderList: function () {
    //
    return (
      <ul className="list-movie">
        {this.props.listDatas.map(function (data, idx) {
          return <TodoList key={idx} data={data} />
        })}
      </ul>
    )
  },

  render: function () {
    console.log('[TodoMain]', this.props, this.props.listDatas);
    return (
      <section className="todo-main">
        {this.props.listDatas.length ? this.renderList() : null}
      </section>
    );
  }

});

module.exports = TodoMain;
