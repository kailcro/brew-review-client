'use strict'
const config = require('./../config')
const store = require('./../store')

const createBeer = function (data) {
  const beer = data.beer
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/beers',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      beer
    }
  })
}

const indexBeer = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/beers',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteBeer = function (beerId) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/beers/' + beerId
  })
}

module.exports = {
  createBeer,
  indexBeer,
  deleteBeer
}
