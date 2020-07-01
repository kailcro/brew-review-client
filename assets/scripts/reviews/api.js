'use strict'
const config = require('./../config')
const store = require('./../store')

const createReview = function (data, beerId) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/reviews',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      review: {
        title: data.review.title,
        content: data.review.content,
        rating: data.review.rating,
        beerId: beerId
      }
    }
  })
}

module.exports = {
  createReview
}
