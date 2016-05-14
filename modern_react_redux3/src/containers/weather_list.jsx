var React = require('react');
var connect = require('react-redux').connect;
var Charts = require('../components/charts.jsx');
// var ReactSparklines = require('react-sparklines');
// var Sparklines = ReactSparklines.Sparklines;
// var SparklinesLine = ReactSparklines.SparklinesLine;

var WeatherList = React.createClass({
  renderList: function() {
    var whethers = this.props.whethers;
    if (whethers.length > 0) {
      return whethers.map(function(whetherDatas, idx) {
        var city = whetherDatas.city;
        var cityName = city.name;
        var cityTemps = whetherDatas.list.map(function(data) {
          return data.main.temp
        });

        var cityPressure = whetherDatas.list.map(function(data) {
          return data.main.pressure
        });

        var cityHumidity = whetherDatas.list.map(function(data) {
          return data.main.humidity
        });

        // console.log('cityTemps',cityTemps);

        return (
          <tr key={city.id +'_'+idx}>
            <td>{cityName}</td>
            <td><Charts data={cityTemps} color="orange" units="K" /></td>
            <td><Charts data={cityPressure} color="skyblue" units="hPa" /></td>
            <td><Charts data={cityHumidity} color="black" units="%" /></td>

            {/*{<td>
              <Sparklines height={120} width={180} data={cityTemps}>
                <SparklinesLine color="red" />
              </Sparklines>
            </td>
            <td>
              <Sparklines height={120} width={180} data={cityTemps}>
                <SparklinesLine color="red" />
              </Sparklines>
            </td>}*/}
          </tr>
        )
      })
    }

    return '';
  },

  render: function() {
    console.log('[WeatherList]',this.props.whethers, Object.prototype.toString.call(this.props.whethers));
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.renderList()}
        </tbody>
      </table>
    );
  }

});
//   {(this.props.whethers.length > 0) && (this.props.weathers.map(this.renderList))}

function mapStateToProps(state) {
  return {
    whethers: state.datas
  }
}

module.exports = connect(mapStateToProps)(WeatherList);
