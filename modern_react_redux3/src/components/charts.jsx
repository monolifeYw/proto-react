var React = require('react');
var ReactSparklines = require('react-sparklines');

var Sparklines = ReactSparklines.Sparklines;
var SparklinesLine = ReactSparklines.SparklinesLine;
var SparklinesReferenceLine = ReactSparklines.SparklinesReferenceLine;

function average(data) {
  var sum = 0;
  var len = data.length;

  for( var i = 0; i < len; i++) {
    sum += data[i];
  }

  return Math.round(sum / len);
}
var Charts = React.createClass({

  render: function() {
    return (
      <div>
        <Sparklines height={120} width={180} data={this.props.data}>
          <SparklinesLine color={this.props.color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>{average(this.props.data) +''+ this.props.units}</div>
      </div>

    );
  }

});

module.exports = Charts;
