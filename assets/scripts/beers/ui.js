// const store = require('./../store')

const createBeerSuccess = function (data) {
  $('#message').text('Created your beer successfully!')
}

const createBeerFail = function (data) {
  $('#message').text('Woops. Failiure creating beer!')
}

module.exports = {
  createBeerSuccess,
  createBeerFail
}
