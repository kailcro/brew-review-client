'use strict'
// const store = require('./../store')
// const indexReviewTemplate = require('../templates/index-beers.handlebars')

const createReviewSuccess = function (data) {
  $('#message').text('Created your review successfully!')
  // $('#create-review-form')[0].reset()
}
const createReviewFail = function (data) {
  $('#message').text('Woops. Failiure creating review!')
}
module.exports = {
  createReviewSuccess,
  createReviewFail
}
