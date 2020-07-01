'use strict'
const config = require('./../config')
const store = require('./../store')

const createReview = function (data) {
  const review = data.review
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/reviews',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      review
    }
  })
}

module.exports = {
  createReview
}
