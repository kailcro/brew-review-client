'use strict'
// const store = require('./../store')
const indexBeersTemplate = require('../templates/index-beers.handlebars')

const createBeerSuccess = function (data) {
  console.log('ui, create beer success')
  $('#message').text('Created your beer successfully!')
}
const createBeerFail = function (data) {
  console.log('ui, create beer fail')
  $('#message').text('Woops. Failiure creating beer!')
}

const indexBeerSuccess = function (data) {
  const showBeersHtml = indexBeersTemplate({ beers: data.beers })
  $('.content').html(showBeersHtml)
}
const indexBeerFail = function () {
  $('#message').text('Woops. Failiure getting all beers!')
}

const clearBooks = () => {
  $('.content').empty()
}

const deleteBeerSuccess = () => {
  console.log('made it to delete beer success')
  $('#message').text('Beer deleted!')
}
const deleteBeerFail = () => {
  console.log('made it to delete beer fail')
  $('#message').text('Woops. Failiure delete that beer!')
}
module.exports = {
  createBeerSuccess,
  createBeerFail,
  indexBeerSuccess,
  indexBeerFail,
  clearBooks,
  deleteBeerSuccess,
  deleteBeerFail
}
