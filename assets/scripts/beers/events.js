'use strict'

const api = require('./api')
const ui = require('./ui')
// const store = require('./../store')

const addHandlers = () => {
  $('#create-beer-form').on('submit', onCreateBeer)
}

const onCreateBeer = function (event) {
  event.preventDefault()
  api.createBeer()
    .then(ui.createBeerSuccess)
    .catch(ui.createBeerFail)
}
module.exports = {
  addHandlers,
  onCreateBeer
}
