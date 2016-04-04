var StarsFrame = React.createClass({
  render: function() {
    var stars = [];
    for (var i = 0; i < this.props.numberOfStars; i++) {
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
    var disabled = (this.props.selectedNumbers.length === 0);
    return (
        <div id="button-frame">
            <button className="btn btn-primary btn-lg" disabled={disabled}>=</button>
        </div>
    );
  }

});

var AnswerFrame = React.createClass({

  render: function() {
    var props = this.props;
    var selectedNumbers = props.selectedNumbers.map(function(i) {
      return (
        <span key={i} onClick={props.unselectNumber.bind(null, i)}>{i}</span>
      )
    });

    return (
        <div id="answer-frame">
            <div className="well">
              {selectedNumbers}
            </div>
        </div>
    );
  }

});

var NumbersFrame = React.createClass({

  render: function() {
    var numbers = [];
    var className;
    var selectedNumbers = this.props.selectedNumbers;
    var selectNumber = this.props.selectNumber;

    for (var i = 1; i <= 9; i++) {
      className = 'number selected-'+(selectedNumbers.indexOf(i) > -1);
      numbers.push(
        <div className={className} key={i} onClick={selectNumber.bind(null, i)}>{i}</div>
      );
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
  getInitialState: function() {
    return {
      selectedNumbers: [],
      numberOfStars: Math.floor(Math.random()*9) + 1
    };
  },

  selectNumber: function(n) {
    if (this.state.selectedNumbers.indexOf(n) == -1) {
      this.setState({
        selectedNumbers: this.state.selectedNumbers.concat(n)
      });
    }
  },

  unselectNumber: function(n) {
    var selectedNumbers = this.state.selectedNumbers;
    var indexOfNumber = selectedNumbers.indexOf(n);

    selectedNumbers.splice(indexOfNumber, 1);

    this.setState({
      selectedNumbers: selectedNumbers
    });
  },

  render: function() {
    var selectedNumbers = this.state.selectedNumbers;
    var numberOfStars = this.state.numberOfStars;

    return (
      <div id="game">
        <h2>proto</h2>
        <hr />
        <div className="clearfix">
          <StarsFrame numberOfStars={numberOfStars} />
          <ButtonFrame selectedNumbers={selectedNumbers} />
          <AnswerFrame selectedNumbers={selectedNumbers}
                       unselectNumber={this.unselectNumber}
          />
        </div>
        <NumbersFrame selectedNumbers={selectedNumbers}
                      selectNumber={this.selectNumber}
        />
      </div>
    );
  }
});



ReactDOM.render(
  <Game />,
  document.getElementById('container')
)
