'use strict'

const authEvents = require('./auth/events.js')
const beerEvents = require('./beers/events.js')
const reviewEvents = require('./reviews/events.js')

$(() => {
  authEvents.addHandlers()
  beerEvents.addHandlers()
  reviewEvents.addHandlers()
})
