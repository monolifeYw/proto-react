var STATIC_DATA = require('./constant.jsx');

module.exports = {
  checkPosterImage: function (imgUrlValue) {
    return (imgUrlValue === 'N/A') ? STATIC_DATA.NOT_FOUND_IMG_URL : imgUrlValue;
  }
};
