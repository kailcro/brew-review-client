'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields.js')

const addHandlers = () => {
  $('#create-review-form').on('submit', onCreateReview)
  // event.preventDefault()
}

const onCreateReview = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  api.createBeer(data)
    .then(ui.createReviewSuccess)
    .catch(ui.createReviewFail)
}
module.exports = {
  addHandlers,
  onCreateReview
}
