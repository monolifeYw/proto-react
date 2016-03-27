var Note = React.createClass({
    getInitialState: function() {
      return {
        editing: false
      }
    },

    // componentWillMount : 최초 렌더링이 일어나기 직전에 클라이언트 및 서버에서 한번 호출
    componentWillMount: function() {
      this.style = {
        right: this.randomBetween(0, window.innerWidth - 150) + 'px',
        top: this.randomBetween(0, window.innerHeight - 150) + 'px',
        transform: 'rotate('+this.randomBetween(-15, 15)+'deg)'
      }
    },

    randomBetween: function(min, max) {
      console.log(min + Math.ceil(Math.random()*max));
        return (min + Math.ceil(Math.random()*max));
    },

    edit: function() {
      alert('editing note');
      this.setState({
        editing: true
      });
    },

    save: function() {
      var domNode = this.refs.newText.getDOMNode();
      var val = domNode.value;
      console.log('this.refs',this.refs);
      console.log('val',val);
      alert('TODO : Save note Value');

      this.props.onChange(val, this.props.index);

      this.setState({
        editing: false
      })
    },

    remove: function() {
      alert('removing note');
      this.props.onRemove(this.props.index);
    },

    renderDisplay: function() {
      return (
          <div className="note" style={this.style}>
            <p>{this.props.children}</p>
            <span>
              <button onClick={this.edit} className="btn btn-primary glyphicon glyphicon-pencil"></button>
              <button onClick={this.remove} className="btn btn-danger glyphicon glyphicon-trash"></button>
            </span>
          </div>
      );
    },
    /*
      <textarea ref="newText" />
      --> this.refs; // ref 들의 모임
      --> this.refs.newText.getDOMNode(); // return native dom
     */
    renderForm: function() {
      return (
        <div className="note" style={this.style}>
          <textarea ref="newText" defaultValue = {this.props.children} className="form-control"></textarea>
          <button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
        </div>
      );
    },

    render: function() {
      if (this.state.editing) {
        return this.renderForm();
      } else {
        return this.renderDisplay();
      }
    }
});

var Board = React.createClass({
  getInitialState: function() {
    return {
      notes: []
    }
  },

  nextId: function() {
    this.uniqueId = this.uniqueId || 0;
    return this.uniqueId++;
  },

  add: function(text) {
    var arr = this.state.notes;
    //arr.push(text);
    arr.push({
      id: this.nextId(),
      note: text
    });
    this.setState({notes:arr});
  },

  update: function(newText, i) {
    var arr = this.state.notes;
    arr[i].note = newText;
    this.setState({notes:arr});
  },

  remove: function(i) {
    var arr = this.state.notes;
    arr.splice(i, 1);
    this.setState({notes:arr});
  },

  eachNote: function(note, i) {
    return (
      <Note key={note.id} index={i} onChange={this.update} onRemove={this.remove}>{note.note}</Note>
    );
  },

  propTypes: {
    count: function(props, propName) {
      console.log('[count] : ', props, propName);

      if (typeof props[propName] !== 'number') {
        return new Error('The count Property must be a number');
      }

      if (props[propName] > 100) {
        return new Error('Creating : ' + props[propName]);
      }
    }
  },

  render: function() {
    return (
      <div className="board">
        <p>{this.props.count}</p>
        {this.state.notes.map(this.eachNote)}
        <button className="btn btn-sm glyphicon glyphicon-plus" onClick={this.add.bind(null, '')}></button>
      </div>
    );
  }
})


ReactDOM.render(<Board count={10} />,
    document.getElementById('react-container'));
