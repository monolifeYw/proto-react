// https://gist.github.com/samerbuna/aa1f011a6e42d6deba46
var possibleCombinationSum = function(arr, n) {
  if (arr.indexOf(n) >= 0) { return true; }
  if (arr[0] > n) { return false; }
  if (arr[arr.length - 1] > n) {
    arr.pop();
    return possibleCombinationSum(arr, n);
  }
  var listSize = arr.length, combinationsCount = (1 << listSize)
  for (var i = 1; i < combinationsCount ; i++ ) {
    var combinationSum = 0;
    for (var j=0 ; j < listSize ; j++) {
      if (i & (1 << j)) { combinationSum += arr[j]; }
    }
    if (n === combinationSum) { return true; }
  }
  return false;
};

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
    var disabled;
    var button;
    var correct = this.props.correct;
    var acceptAnswer = this.props.acceptAnswer;
    var checkAnswer = this.props.checkAnswer;

    switch(correct) {
      case true:
        button = (
          <button className="btn btn-success btn-lg" onClick={acceptAnswer}>
            <span className="glyphicon glyphicon-ok"></span>
          </button>
        );
        break;
      case false:
        button = (
          <button className="btn btn-danger btn-lg" onClick={acceptAnswer}>
            <span className="glyphicon glyphicon-remove"></span>
          </button>
        );
        break;
      default:
        disabled = (this.props.selectedNumbers.length === 0);
        button = (
          <button className="btn btn-primary btn-lg" disabled={disabled} onClick={checkAnswer}>=</button>
        );
    }


    return (
        <div id="button-frame">
          {button}
          <br /><br />
          <button className="btn btn-warning btn-xs" onClick={this.props.redraw} disabled={this.props.redraws === 0}>
              <span className="glyphicon glyphicon-refresh"></span>
              &nbsp;{this.props.redraws}
          </button>
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
    var usedNumbers = this.props.usedNumbers;

    for (var i = 1; i <= 9; i++) {
      className = 'number selected-'+(selectedNumbers.indexOf(i) > -1);
      className += ' used-'+(usedNumbers.indexOf(i) > -1);
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

var DoneFrame = React.createClass({
  render: function() {
    return (
      <div className="well text-center">
            <h2>{this.props.doneStatus}</h2>
            <button className="btn btn-default" onClick={this.props.playAgain}>Play Again</button>
      </div>
    );
  }

});

var Game = React.createClass({
  getInitialState: function() {
    return {
      selectedNumbers: [],
      numberOfStars: this.randomNumber(),
      correct: null,
      redraws: 5,
      usedNumbers: [],
      doneStatus: null
    };
  },

  randomNumber: function() {
    return Math.floor(Math.random()*9) + 1;
  },

  selectNumber: function(n) {
    if (this.state.selectedNumbers.indexOf(n) == -1) {
      this.setState({
        selectedNumbers: this.state.selectedNumbers.concat(n),
        correct: null
      });
    }
  },

  unselectNumber: function(n) {
    var selectedNumbers = this.state.selectedNumbers;
    var indexOfNumber = selectedNumbers.indexOf(n);

    selectedNumbers.splice(indexOfNumber, 1);

    this.setState({
      selectedNumbers: selectedNumbers,
      correct: null
    });
  },

  sumOfSelectedNumbers: function() {
    return this.state.selectedNumbers.reduce(function(p, n) {
      console.log('reduce', p, n);
      return p+n;
    }, 0);
  },

  checkAnswer: function() {
    var correct = this.state.numberOfStars === this.sumOfSelectedNumbers();
    console.log('[checkAnswer]', correct);
    this.setState({
      correct: correct
    })
  },

  acceptAnswer: function() {
    var usedNumbers = this.state.usedNumbers.concat(this.state.selectedNumbers);
    this.setState({
      selectedNumbers: [],
      usedNumbers: usedNumbers,
      correct: null,
      numberOfStars: this.randomNumber()
    }, function() {
      this.updateDoneStatus();
    })
  },

  redraw: function() {
    if (this.state.redraws > 0) {
      this.setState({
        selectedNumbers: [],
        correct: null,
        numberOfStars: this.randomNumber(),
        redraws: this.state.redraws - 1
      }, function() {
        this.updateDoneStatus();
      });
    }
  },

  possibleSolutions: function() {
    var numberOfStars = this.state.numberOfStars;
    var possibleNumbers = [];
    var usedNumbers = this.state.usedNumbers;

    for (var i = 1; i <=9; i++) {
      if (usedNumbers.indexOf(i) > -1) {
        possibleNumbers.push(i);
      }
    }

    return possibleCombinationSum(possibleNumbers, numberOfStars);
  },

  updateDoneStatus: function() {
    if (this.state.usedNumbers.length === 9) {
        this.setState({
          doneStatus: 'Done. Nice. Complete!!'
        })
    }

    if (this.state.redraws === 0 && !this.possibleSolutions()) {
      this.setState({
        doneStatus: 'Game Over!!!'
      })
    }

  },

  playAgain: function() {
    /*
    this.setState({
      selectedNumbers: [],
      numberOfStars: this.randomNumber(),
      correct: null,
      redraws: 5,
      usedNumbers: [],
      doneStatus: null
    })
    */
   this.replaceState(this.getInitialState());
  },

  render: function() {
    var selectedNumbers = this.state.selectedNumbers;
    var usedNumbers = this.state.usedNumbers;
    var numberOfStars = this.state.numberOfStars;
    var correct = this.state.correct;
    var redraws = this.state.redraws;
    var doneStatus = this.state.doneStatus;
    var bottomFrame;

    if (doneStatus) {
      bottomFrame = <DoneFrame doneStatus={doneStatus} playAgain={this.playAgain} />;
    } else {
      bottomFrame = (
        <NumbersFrame selectedNumbers={selectedNumbers}
                      usedNumbers={usedNumbers}
                      selectNumber={this.selectNumber}
        />
      )
    }

    return (
      <div id="game">
        <h2>proto</h2>
        <hr />
        <div className="clearfix">
          <StarsFrame numberOfStars={numberOfStars} />
          <ButtonFrame selectedNumbers={selectedNumbers}
                       correct={correct}
                       redraws={redraws}
                       checkAnswer={this.checkAnswer}
                       acceptAnswer={this.acceptAnswer}
                       redraw={this.redraw}
          />
          <AnswerFrame selectedNumbers={selectedNumbers}
                       unselectNumber={this.unselectNumber}
          />
        </div>
        {bottomFrame}

      </div>
    );
  }
});



ReactDOM.render(
  <Game />,
  document.getElementById('container')
)
