/*
Step.1
- Note Class 생성 ( createClass, render, edit, remove 기능(alert) 넣기 )
- react-container 에 넣어놓기
 */

var Note = React.createClass({

  edit: function() {
    alert('edit');
  },

  remove: function() {
    alert('remove');
  },

  render: function() {
    return (
      <div className="note">
        <p>{this.props.children}</p>
        <span>
            <button className="btn btn-primary glyphicon glyphicon-pencil" onClick={this.edit}></button>
            <button className="btn btn-danger glyphicon glyphicon-trash" onClick={this.remove}></button>
        </span>
      </div>
    );
  }
});

ReactDOM.render(
  <Note>note proto</Note>,
  document.getElementById('react-container')
);
