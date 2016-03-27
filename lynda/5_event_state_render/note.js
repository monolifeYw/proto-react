var Note = React.createClass({
    getInitialState: function() {
      return {
        editing: false
      }
    },


    edit: function() {
      alert('editing note');
      this.setState({
        editing: true
      });
    },

    save: function() {
      this.setState({
        editing: false
      })
    },

    remove: function() {
      alert('removing note');
    },

    renderDisplay: function() {
      return (
          <div className="note">
            <p>{this.props.children}</p>
            <span>
              <button onClick={this.edit} className="btn btn-primary glyphicon glyphicon-pencil"></button>
              <button onClick={this.remove} className="btn btn-danger glyphicon glyphicon-trash"></button>
            </span>
          </div>
      );
    },

    renderForm: function() {
      return (
        <div className="note">
          <textarea defaultValue = {this.props.children} className="form-control"></textarea>
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

ReactDOM.render(<Note>Basic Button Event</Note>,
    document.getElementById('react-container'));
