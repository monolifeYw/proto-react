var Note = React.createClass({
    edit: function() {
      alert('editing note');
    },

    remove: function() {
      alert('removing note');
    },

    render: function() {
      return (
          <div className="note">
            <p>{this.props.children}</p>
            <span>
              <button onClick={this.edit}>{this.props.edit}</button>
              <button onClick={this.remove}>{this.props.remove}</button>
            </span>
          </div>
      );
    }
});

ReactDOM.render(<Note edit="EditButton" remove="RemoveButton">Basic Button Event</Note>,
    document.getElementById('react-container'));
