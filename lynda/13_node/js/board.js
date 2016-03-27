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

  componentWillMount: function() {
    var self = this;
    if (this.props.count) {
      $.getJSON('http://baconipsum.com/api/?type=all-meat&sentences=' + this.props.count + '&start-with-lorem=1&callback=?', function(results) {
          console.log('results', results);

          results[0].split('. ').forEach(function(sentence) {
            self.add(sentence.substring(0,40));
          });
      });
    }
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
