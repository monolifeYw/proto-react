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
*

// jsx lynda/1_basic_make_component/step2/src lynda/1_basic_make_component/step2/build


var HelloWorld = React.createClass({
    // displayName: 'HelloWorld',
    render: function() {
        console.log('render');
        return (
            <div data-id="monolife">
                <h1 className="monolife">Hello World</h1>
                <p>This is some text</p>
            </div>
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
    <HelloWorld />,
    document.body
);
