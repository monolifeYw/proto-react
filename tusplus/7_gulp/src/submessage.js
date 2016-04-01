var React = require('react');

var SubMessage = React.createClass({
    propTypes: {
        message: React.PropTypes.string.isRequired,
        onDelete: React.PropTypes.func.isRequired
    },

    handleDelete: function(e) {
        // console.log('handleDelete : ', this.props.message);
        this.props.onDelete(this.props.message);

    },

    getDefaultProps: function() {
        return {
            message: 'Its good to see you'
        }
    },
    render: function() {
        return (
            <div>
                {this.props.message}
                <button onClick={this.handleDelete} className="btn btn-danger">x</button>
            </div>
        )
    }
})

module.exports = SubMessage;
