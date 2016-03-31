var DashBoard = React.createClass({

    loadData: function(url) {
        // promise
        return $.get('https://gsr-demo.firebaseio-demo.com/' + url + '/.json');
    },

    componentWillMount: function() {
        console.log('componentWillMount!!!!!');
        // debugger;
    },

    componentDidMount: function() {
        console.log('componentDidMount');
        // debugger;
        this.loadData(this.props.url).then(function(data) {
            this.setState({
                metric: data
            })
        }.bind(this));
    },

    componentWillReceiveProps: function(nextProps) {
        console.log('componentWillReceiveProps');
        var lastUrl = this.props.url;
        console.log('nextProps', nextProps);
        // debugger;
        this.loadData(nextProps.url).then(function(data) {
            this.setState({
                lastRoute: lastUrl,
                metric: data
            })
            $('#tip').tooltip();
        }.bind(this));

    },

    shouldComponentUpdate: function(nextProps, nextState) {
        return nextState.metric > 100;
    },

    componentWillUnmount: function(nextProps, nextState) {
        debugger;
        $('#tip').tooltip('destory');
    },

    changeProps: function() {
        console.log('changeProps');
        this.setProps({
            url: 'metric2'
        })
    },

    getInitialState: function() {
        return {
            metric: 0,
            lastRoute: ''
        };
    },

    render: function() {
        return (
            <div className="jumbotron">
                <a id="tip" href="#" data-toggle="tooltip" title="Hover">Hover over me</a>
                {this.state.lastRoute}

                <h2>{this.state.metric}</h2>
                <button type="button" name="button" onClick={this.changeProps}>button</button>
            </div>
        );
    }

});

ReactDOM.render(
    <DashBoard url="metric" />,
    document.getElementById('container')
)
