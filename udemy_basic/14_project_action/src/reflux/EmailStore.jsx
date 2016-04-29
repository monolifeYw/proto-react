var HTTP = require('../services/HttpService.js');
var Reflux = require('reflux');
var Actions = require('./Actions.jsx');

var React = require('react');

var EmailStore = Reflux.createStore({
  listenables: [Actions],
  submitEmail: function(subscriber) {
    HTTP.post('/subscribers', subscriber)
        .then(function(res) {
          var msg = '';
          if (res.status == 200) {
            msg = 'Email submitted!';
          } else {
            msg = 'Submission Failed!'
          }

          console.log('HTTP', this);
          this.trigger(msg);
        }.bind(this));
  }
});

module.exports = EmailStore;
