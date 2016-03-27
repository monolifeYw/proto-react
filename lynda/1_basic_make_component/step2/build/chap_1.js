// React.render(React.createElement('div', null, 'Hello World'),
//     document.getElementById('test'));

// React Render
/*
ReactComponent render(
    ReactElement element,
    DOMElement container,
    [function callback]
)
*/

// React.createElement
/*
ReactElement createElement(
    string/ReactClass type,
    [object props],
    [children ...]
)
*/

// React.createClass
/*
ReactClass createClass(object specification)
*/


var HelloWorld = React.createClass({displayName: "HelloWorld",
    // displayName: 'HelloWorld',
    render: function() {
        console.log('render');
        return (
            React.createElement("div", {"data-id": "monolife"},
                React.createElement("h1", {className: "monolife"}, "Hello World"),
                React.createElement("p", null, "This is some text")
            )
        );
    }
});

// --> render method : React.createElement(HelloWorld, null) == <HelloWorld />
/*
ReactDOM.render(
    React.createElement(HelloWorld, null),
    document.body
);
*/


ReactDOM.render(
    React.createElement(HelloWorld, null),
    document.body
);
