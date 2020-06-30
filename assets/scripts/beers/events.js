'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields.js')
// const store = require('./../store')

const addHandlers = () => {
  $('#create-beer-form').on('submit', onCreateBeer)
  $('#index-beer').on('click', onIndexBeer)
  $('#clear-beers').on('click', onClearBeers)
}

const onCreateBeer = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log('data inside onCreateBeer', data)
  console.log('data.beer inside onCreateBeer', data.beer)
  api.createBeer(data)
    .then(ui.createBeerSuccess)
    .catch(ui.createBeerFail)
}

const onIndexBeer = function (event) {
  event.preventDefault()
  api.indexBeer()
    .then(ui.indexBeerSuccess)
    .catch(ui.indexBeerFail)
}
const onClearBeers = (event) => {
  event.preventDefault()
  ui.clearBooks()
}

const onDeleteBeers = (event) => {

}
module.exports = {
  addHandlers,
  onCreateBeer,
  onIndexBeer,
  onClearBeers,
  onDeleteBeers
}
