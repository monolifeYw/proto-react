/*
Step.1
- Note Class 생성 ( createClass, render, edit, remove 기능(alert) 넣기 )
- react-container 에 넣어놓기

Step.2
- state를 이용하여 edit(textarea - defaultValue), remove 에 대한 Note의 화면 변경 ( render 모드를 2개로 나눔 )
1) getInitialState 로 컴포넌트의 초기 솽황 값을 잡아준다. (현재는 일반모드, 수정모드 2가지로 운영)
2) 상황값에 맞는 render case를 2가지 만들어준다.
3) 버튼을 누를 떼 setState를 이용하여 상황값을 변경하고, render에서는 state를 참조하여 화면 렌더링을 할수 있도록 한다.
 */

var Note = React.createClass({

  // 초기 state
  getInitialState: function() {
    return {
      editing: false
    }
  },

  edit: function() {
    alert('edit');
    this.setState({editing: true});
  },

  remove: function() {
    alert('remove');
  },

  save: function() {
    alert('save');
    this.setState({editing: false});
  },

  renderBasicDisplay: function() {
    return (
      <div className="note">
        <p>{this.props.children}</p>
        <span>
            <button className="btn btn-primary glyphicon glyphicon-pencil" onClick={this.edit}></button>
            <button className="btn btn-danger glyphicon glyphicon-trash" onClick={this.remove}></button>
        </span>
      </div>
    );
  },

  renderUpdateDisplay: function() {
    return (
      <div className="note">
          <textarea className="form-control" defaultValue={this.props.children}></textarea>
          <button className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" onClick={this.save}></button>
      </div>
    )
  },

  render: function() {
    return (this.state.editing)?this.renderUpdateDisplay():this.renderBasicDisplay();
  }
});

ReactDOM.render(
  <Note>note proto</Note>,
  document.getElementById('react-container')
);
