var StarsFrame = React.createClass({
  render: function() {
    var numberOfStars = Math.floor(Math.random()*9) + 1;
    var stars = [];
    for (var i = 0; i < numberOfStars; i++) {
      stars.push(
        <span className="glyphicon glyphicon-star" key={i}></span>
      )
    }

    return (
      <div id="stars-frame">
        <div className="well">
          {stars}
        </div>
      </div>
    );
  }
});

var ButtonFrame = React.createClass({

  render: function() {
    return (
        <div id="button-frame">
            <button className="b tn btn-primary btn-lg">=</button>
        </div>
    );
  }

});

var AnswerFrame = React.createClass({

  render: function() {
    return (
        <div id="answer-frame">
            <div className="well">
            </div>
        </div>
    );
  }

});

var NumbersFrame = React.createClass({

  render: function() {
    var numbers = [];
    for (var i = 1; i <= 9; i++) {
      numbers.push(<div className="number" key={i}>{i}</div>);
    }


    return (
        <div id="numbers-frame">
            <div className="well">
              {numbers}
            </div>
        </div>
    );
  }

});


var Game = React.createClass({
  render: function() {
    return (
      <div id="game">
        <h2>proto</h2>
        <hr />
        <div className="clearfix">
          <StarsFrame />
          <ButtonFrame />
          <AnswerFrame />
        </div>
        <NumbersFrame />
      </div>
    );
  }
});



ReactDOM.render(
  <Game />,
  document.getElementById('container')
)
