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
  $('#content').on('submit', '#update-beer-form', onUpdateBeers)
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
  // event.preventDefault()
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
    .then(() => onIndexBeer())
    .catch(ui.deleteBeerFail)
}

const onUpdateBeers = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  const beerId = $(event.target).data('id')
  api.updateBeer(beerId, data)
    .then(ui.updateBeerSuccess)
    .then(() => onIndexBeer())
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
