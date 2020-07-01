'use strict'

const authEvents = require('./auth/events.js')
const beerEvents = require('./beers/events.js')

$(() => {
  authEvents.addHandlers()
  beerEvents.addHandlers()
})
