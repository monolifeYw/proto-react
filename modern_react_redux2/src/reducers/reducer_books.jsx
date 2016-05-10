module.exports = function(state, action) {
  console.log('state books', state, action);
  return [
    {title: 'ComicBook', pages: 101},
    {title: 'Javascript:Good Parts', pages: 39},
    {title: 'HarryPotter', pages: 85},
    {title: 'GQ', pages: 79}
  ];
};
