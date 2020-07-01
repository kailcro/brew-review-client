'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields.js')
// const store = require('./../store')

const addHandlers = () => {
  $('#create-beer-form').on('submit', onCreateBeer)
  $('#index-beer').on('click', onIndexBeer)
  $('#clear-beers').on('click', onClearBeers)
  $('.content').on('click', '.delete-beer', onDeleteBeers)
  $('.content').on('submit', '.update-beer', onUpdateBeers)
}

const onCreateBeer = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
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
  event.preventDefault()
  const beerId = event.target.dataset.id
  api.deleteBeer(beerId)
    .then(() => ui.deleteBeerSuccess)
    .catch(ui.deleteBeerFail)
}

const onUpdateBeers = (event) => {
  // use jQuery to show a form
  // the form will have the 3 fields to edit, and a button to Submit
  // after submit, close the form and update the resource visually
  event.preventDefault()
  const beerId = event.target.dataset.id
  console.log('beerId in onUpdateBeer:', beerId)
  // const form = event.target
  // const data = getFormFields(form)
  // i need to pass both the beerId and the data into the API call
  api.updateBeer(beerId)
    .then(ui.updateBeerSuccess)
    .catch(ui.updateBeerFail)
}

module.exports = {
  addHandlers,
  onCreateBeer,
  onIndexBeer,
  onClearBeers,
  onDeleteBeers,
  onUpdateBeers
}
