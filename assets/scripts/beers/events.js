'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields.js')

const addHandlers = () => {
  $('.show-create-beer').on('click', showCreateBeer)
  $('#create-beer-form').on('submit', onCreateBeer)
  $('#index-beer').on('click', onIndexBeer)
  $('#clear-beers').on('click', onClearBeers)
  $('.content').on('click', '.delete-beer', onDeleteBeers)
  $('#content').on('submit', '#update-beer-form', onUpdateBeers)
  $('#content').on('click', '.show-update-beer', showUpdateBeer)
  $('#content').on('click', '.show-create-review', showCreateReview)
}

const showCreateBeer = function (event) {
  $('.show-create-beer').addClass('hidden')
  $('.create-beer').removeClass('hidden')
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
  api.indexBeer()
    .then(ui.indexBeerSuccess)
    .catch(ui.indexBeerFail)
}

const onClearBeers = (event) => {
  event.preventDefault()
  ui.clearBeers()
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

const showUpdateBeer = (event) => {
  const beerId = $(event.target).data('id')
  $('.show-update-beer').addClass('hidden')
  $(`.update-beer[data-id=${beerId}]`).removeClass('hidden')
}

const showCreateReview = (event) => {
  $('.show-create-review').addClass('hidden')
  $('.create-review').removeClass('hidden')
}
module.exports = {
  addHandlers,
  onCreateBeer,
  onIndexBeer,
  onClearBeers,
  onDeleteBeers,
  onUpdateBeers
}
