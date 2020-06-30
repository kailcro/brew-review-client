'use strict'
const config = require('./../config')
const store = require('./../store')

const createBeer = function (data) {
  console.log('api file')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/beers',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createBeer
}
