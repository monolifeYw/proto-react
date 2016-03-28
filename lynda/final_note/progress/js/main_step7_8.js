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

Step.6
- Board의 add 버튼 생성, add function, 될때마다 Note 생성, remove에 대한 삭제 기능, update
- add function
1) button : add button onClick={this.add} --> 인자를 넣을때 : this.add.bind(null, 'New Text')
2) node : <Note key={note.idx} idx={i}> --> key value (key는 special key?, unique id)

- remove
1) note 에서 remove 누를시 -> 상위 Board에서 선언한 <Note onRemove> -> onRemove Props
2) Board의 this.state.notes 의 array를 index splice --> render애서 남은 노드들은 object순서대로 다시 index 재정렬
  (key는 element의 unique id, idx는 object 순서의 기본 idx)

- update
1) note 에서 save 누를시 -> 상위 Board에서 선언한 <Note onChange> -> onChange={this.update}
2) note save에서 this.props.onChange() -> 변경된 value 값과 idx값을 보냄


Step.7, 8
- Step.6에서 Note 생성시 degree, position 값 랜덤하게 조정 ( componentWillMount )
1) componentWillMount : Before Mounting

- componentDidMount 를 이용하여 드래그 구현, draggable
1) componentDidMount : after Mounting
2) 해당 컴포넌트의 DOM 찾기
  > this.getDOMNode() // deprecated
  > ReactDOM.findDOMNode(this)
 */

var Note = React.createClass({

  // 초기 state
  getInitialState: function() {
    return {
      editing: false
    }
  },

  componentWillMount: function() {
    this.style = {
      right: this.randomBetween(0, window.innerWidth - 150) + 'px',
      top: this.randomBetween(0, window.innerHeight - 150) + 'px',
      transform: 'rotate('+this.randomBetween(-15, 15)+'deg)'
    }
  },

  randomBetween: function(min, max) {
      return (min + Math.ceil(Math.random()*max));
  },

  componentDidMount: function() {
    //var dom = this.getDOMNode(); // deprecated
    //console.log('getDOMNode',this.getDOMNode());
    //console.log('findDOMNode',ReactDOM.findDOMNode(this));
    var dom = ReactDOM.findDOMNode(this);
    $(dom).draggable();
  },

  edit: function() {
    console.log('edit');
    this.setState({editing: true});
  },

  remove: function() {
    console.log('remove');
    this.props.onRemove(this.props.idx);
  },

  save: function() {
    console.log('save');
    var textArea = this.refs.textTitle;
    var value = textArea.value;

    this.props.onChange(value, this.props.idx);

    this.setState({
      editing: false
    });
  },

  renderBasicDisplay: function() {
    return (
      <div className="note" style={this.style}>
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
      <div className="note" style={this.style}>
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
      notes: []
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

  nextId: function() {
    this.uniqueId = this.uniqueId || 0;
    return this.uniqueId ++;
  },

  add: function(text) {
    var notes = this.state.notes;
    console.log('text',text);

    var nextId = this.nextId();
    console.log('nextId', nextId);
    notes.push({
      title: text,
      idx: nextId
    });

    this.setState({notes: notes});
  },

  remove: function(idx) {
    console.log('BoardClass remove', idx);
    var notes = this.state.notes;
    notes.splice(idx, 1);
    this.setState({
      notes: notes
    });
  },

  update: function(text, idx) {
    console.log('BoardClass update', text);
    var notes = this.state.notes;
    notes[idx].title = text;

    this.setState({notes: notes});
  },

  eachNote: function(note, i) {
    console.log('note', note, i);
    return <Note key={note.idx} idx={i} onChange={this.update} onRemove={this.remove}>{note.title}</Note>
  },
  render: function() {
    // var self = this;
    // var eachNode = this.state.notes.map(function(note, index) {
    //   return self.eachNote(note, index);
    // })
    return (
      <div className="board">
        {this.state.notes.map(this.eachNote)}
        <button className="btn btn-sm glyphicon glyphicon-plus" onClick={this.add.bind(null, 'New Text')}></button>
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
