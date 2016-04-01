var React = require('react');
var SubMessage = require('./SubMessage');

var MessageBox = React.createClass({
    deleteMessage: function(msg) {
        console.log('deleting : ', msg);
        var newMessages = _.without(this.state.messages, msg);  // 배열을 재정리
        this.setState({
            messages: newMessages
        })
    },

    getInitialState: function() {
        return {
            isVisible: true,
            titleMessage: 'React Proto Tusplus',
            messages: [
                'Refs to Components',
                'The ref returned from ReactDOM.render',
                'The ref Callback Attribute',
                'The ref String Attribute ',
                'A Complete Example'
            ]
        }
    },

    handleAdd: function(e) {
        var message = this.refs.newMessage.value;
        if (message == '') {
            return;
        }
        console.log('handleAdd : ',e, e.target);
        console.log('handleAdd this : ',this);

        var messages = this.state.messages.concat(message);
        this.refs.newMessage.value = '';

        this.setState({messages: messages});
    },

    render: function() {
        var inlineStyles = {
            display: (this.state.isVisible)?'block':'none'
        }

        var subMessage = 'Its not good';

        var message = this.state.messages.map(function(msg, i) {
            return <SubMessage message={msg} key={i} onDelete={this.deleteMessage} />
        }.bind(this));

        return (
            <div className="container jumbotron" style={inlineStyles}>
                <h2>{this.state.titleMessage}</h2>
                <input ref="newMessage" type="text" />
                <button className="btn btn-primary" onClick={this.handleAdd}>Add</button>
                {message}
            </div>
        );
    }
});

module.exports = MessageBox;
