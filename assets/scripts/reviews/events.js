'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields.js')

const addHandlers = () => {
  $('.content').on('submit', '#create-review-form', onCreateReview)
}

const onCreateReview = (event) => {
  event.preventDefault()
  const beerId = $(event.target).data('id')
  const form = event.target
  const data = getFormFields(form)
  api.createReview(data, beerId)
    .then(ui.createReviewSuccess)
    .catch(ui.createReviewFail)
}
module.exports = {
  addHandlers,
  onCreateReview
}
