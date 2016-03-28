/*
Step.1
- Note Class 생성 ( createClass, render, edit, remove 기능(alert) 넣기 )
- react-container 에 넣어놓기

Step.2
- state를 이용하여 edit(textarea - defaultValue), remove 에 대한 Note의 화면 변경 ( render 모드를 2개로 나눔 )
1) getInitialState 로 컴포넌트의 초기 솽황 값을 잡아준다. (현재는 일반모드, 수정모드 2가지로 운영)
2) 상황값에 맞는 render case를 2가지 만들어준다.
3) 버튼을 누를 떼 setState를 이용하여 상황값을 변경하고, render에서는 state를 참조하여 화면 렌더링을 할수 있도록 한다.

Step.3
- textarea 의 ref를 이용 refs에서 값 참조하여 save 구현
1) textarea를 참조할 ref (reference) name을 지정한다. (<textarea ref="textTitle" />)
2) save 시 this.refs.textTitle == 위의 선언한 textarea element
3) 해당 prop의 change : prop는 상위에서 받는 값이기 때문에 수정 불가하다, 변경값 반영을 위해선 state로 변경
** 구조에 대한 고민 필요 <div> <Note /><Note /> </div> 일때  div에 대한 createClass 생성 고려

Step.4, Step5
- Board Class 를 만들고 init dummy data를 만들어 넣어보기, state, map, eachNote
- Board의 count prop을 넣고 propTypes를 통해 prop에 대한 체크 실행

1) render 의 markup 안의 script는 {}안에서 기술
2) propTypes 안에는 설정한 prop 이름을 function 이름으로 설정
  > params : props(object), prop(string)
  propTypes: {
    count: function(props, prop) {
    }
  }

  render --> <Board count="10"></Board>
 */

var Note = React.createClass({

  // 초기 state
  getInitialState: function() {
    return {
      editing: false
    }
  },

  edit: function() {
    console.log('edit');
    this.setState({editing: true});
  },

  remove: function() {
    console.log('remove');
  },

  save: function() {
    console.log('save');
    var textArea = this.refs.textTitle;
    var value = textArea.value;
    // this.props.children = '1';
    // console.log(value);

    // this.props.onChange(value);
    this.setState({
      editing: false
    });
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
          <textarea className="form-control" ref="textTitle" defaultValue={this.props.children}></textarea>
          <button className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" onClick={this.save}></button>
      </div>
    )
  },

  render: function() {
    return (this.state.editing)?this.renderUpdateDisplay():this.renderBasicDisplay();
  }
});

var Board = React.createClass({
  getInitialState: function() {
    return {
      notes: [
        'a1',
        'a2',
        'a3',
        'a4'
      ]
    }
  },

  propTypes: {
    count: function(props, prop) {
      // console.log('props',props);
      // console.log('prop',prop);
      if (props[prop] < 5) {
        return new Error('less than 5');
      }

      if (props[prop] > 100) {
        return new Error('more than 100');
      }
    }
  },

  eachNote: function(noteTitle, idx) {
    return <Note key={idx}>{noteTitle}</Note>
  },
  render: function() {
    // var self = this;
    // var eachNode = this.state.notes.map(function(note, index) {
    //   return self.eachNote(note, index);
    // })
    return (
      <div className="board">
        {this.state.notes.map(this.eachNote)}
      </div>
    )
  }
});

ReactDOM.render(
  // <div>
  //   <Note title="note proto1"></Note>
  //   <Note title="note proto2"></Note>
  // </div>
  <Board count="7"></Board>
  ,
  document.getElementById('react-container')
);
