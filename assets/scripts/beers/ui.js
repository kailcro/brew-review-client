'use strict'
// const store = require('./../store')
const indexBeersTemplate = require('../templates/index-beers.handlebars')
const updateBeerTemplate = require('../templates/update-beer.handlebars')

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

const updateBeerSuccess = (data) => {
  console.log('update beer data', data)
  $('#message').text('Beer updated!')
  const updateBeersHtml = updateBeerTemplate({ beers: data.beers })
  $('.content').html(updateBeersHtml)
}
const updateBeerFail = () => {
  $('#message').text('Woops. Failiure to update this beer!')
}
module.exports = {
  createBeerSuccess,
  createBeerFail,
  indexBeerSuccess,
  indexBeerFail,
  clearBooks,
  deleteBeerSuccess,
  deleteBeerFail,
  updateBeerSuccess,
  updateBeerFail
}
