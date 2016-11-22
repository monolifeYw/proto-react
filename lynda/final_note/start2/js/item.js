var Item = React.createClass({
  style: null,

  getInitialState: function () {
    return {
      editing: false
    }
  },

  update: function () {
    // console.log('[Item] update');

    this.setState({
      editing: !this.state.editing
    })
  },

  remove: function () {
    // console.log('[Item] remove');

    this.props.callbacks.remove(this.props.idx);
  },

  save: function () {
    // console.log('[Item] save', this.refs.textWindow.value);

    var newValue = this.refs.textWindow.value;
    this.props.callbacks.update(newValue, this.props.idx);

    this.setState({
      editing: false
    });
  },

  randomBetween: function(min, max) {
      return (min + Math.ceil(Math.random() * max));
  },

  componentWillMount: function () {
    console.log('[componentWillMount] this.config.style', this, this.style, this, this.props.idx);
    this.style = {
      right: this.randomBetween(0, window.innerWidth - 150) + 'px',
      top: this.randomBetween(0, window.innerHeight - 150) + 'px',
      transform: 'rotate('+this.randomBetween(-15, 15)+'deg)'
    }
  },

  componentDidMount: function () {
    var dom = ReactDOM.findDOMNode(this);
    $(dom).draggable();
  },

  renderBasic: function () {
    console.log('[renderBasic] this.config.style', this, this.style);
    return (
      <div className="note" style={this.style}>
        <p>{this.props.children}</p>
        <span>
          <button className="btn btn-primary glyphicon glyphicon-pencil" onClick={this.update}></button>
          <button className="btn btn-danger glyphicon glyphicon-trash" onClick={this.remove}></button>
        </span>
      </div>
    );
  },

  renderEdit: function () {
    return (
      <div className="note" style={this.style}>
          <textarea className="form-control" ref="textWindow" defaultValue={this.props.children}></textarea>
          <button className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" onClick={this.save}></button>
      </div>
    );
  },

  render: function () {
    return (this.state.editing) ? this.renderEdit() : this.renderBasic();
  }
});

var Container = React.createClass({
  config: {
    uniqueId: 0
  },

  getInitialState: function () {
    return {
      itemDatas: []
    };
  },

  propTypes: {
    // loadData: React.PropTypes.number.isRequired
    loadData: function (props, propName) {
      var value = props[propName];
      if (typeof value !== 'number') {
        return new Error('Type error');
      }

      if (value < 1) {
        return new Error('loadData wrong value');
      }
    }
  },

  componentDidMount: function () {
    console.log('[componentDidMount]');
    var self = this;
    $.getJSON('http://baconipsum.com/api/?type=all-meat&sentences=' + this.props.loadData + '&start-with-lorem=1&callback=?', function(res) {

      var resDatas = res[0].split('.');
      for (var i = 0; i < resDatas.length; i++) {
        if (i < self.props.loadData) {
          self.addItem(resDatas[i].substring(0, 40));
        }
      }
    });
  },

  remove: function (idx) {
    var itemDatas = this.state.itemDatas;
    itemDatas.splice(idx, 1);

    this.setState({
      itemDatas: itemDatas
    });
  },

  update: function (value, idx) {
    var itemDatas = this.state.itemDatas;
    itemDatas[idx].title = value;

    this.setState({
      itemDatas: itemDatas
    });
  },

  updateID: function () {
    this.config.uniqueId = this.config.uniqueId || 0;
    return this.config.uniqueId++;
  },

  addItem: function (itemData) {
    console.log(itemData);
    var itemDatas = this.state.itemDatas;
    var key = this.updateID();
    console.log('key', key);
    itemDatas.push({
      title: itemData,
      key: key
    });

    this.setState({
      itemDatas: itemDatas
    });
  },

  renderItem: function (itemData, idx) {
    var callbacks = {
      update: this.update,
      remove: this.remove
    };

    return (
      <Item key={itemData.key} idx={idx} callbacks={callbacks}>{itemData.title}</Item>
    )
  },

  render: function() {
    console.log('[Render]', this.state.itemDatas);
    return (
      <div>
        <div className="board">
          {this.state.itemDatas.map(this.renderItem)}
        </div>
        <button className="btn btn-sm glyphicon glyphicon-plus" onClick={this.addItem.bind(null, '')}></button>
      </div>
    );
  }
});


ReactDOM.render(
  <Container loadData={1} />,
  document.getElementById('react-container')
);


/*ReactDOM.render(
  <Item>Item~</Item>,
  document.getElementById('react-container')
);
*/
