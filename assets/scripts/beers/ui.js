'use strict'
// const store = require('./../store')
const indexBeersTemplate = require('../templates/index-beers.handlebars')
const reviewEvents = require('./../reviews/events.js')
const createBeerSuccess = function (data) {
  console.log('ui, create beer success')
  $('#message').text('Created your beer successfully!')
  $('#create-beer-form')[0].reset()
}
const createBeerFail = function (data) {
  console.log('ui, create beer fail')
  $('#message').text('Woops. Failiure creating beer!')
}

const indexBeerSuccess = function (data) {
  const showBeersHtml = indexBeersTemplate({ beers: data.beers })
  $('.content').html(showBeersHtml)
  $(() => reviewEvents.addHandlers())
}
const indexBeerFail = function () {
  $('#message').text('Woops. Failiure getting all beers!')
}

const clearBooks = () => {
  $('.content').empty()
}

const deleteBeerSuccess = () => {
  $('#message').text('Beer deleted!')
}
const deleteBeerFail = () => {
  $('#message').text('Woops. Failiure delete that beer!')
}

const updateBeerSuccess = (data) => {
  $('#message').text('Beer updated!')
  $('#update-beer-form')[0].reset()
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
