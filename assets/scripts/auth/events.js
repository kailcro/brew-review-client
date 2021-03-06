'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields.js')

const addHandlers = () => {
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('.nav-change-password').on('click', showOnChangedPassword)
  $('#change-password-form').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
  $('#show-sign-in').on('click', showSignIn)
  $('#show-sign-up').on('click', showSignUp)
  $('#home-button').on('click', showHomePage)
}

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  $('.sign-in-items').removeClass('hidden')
  $('.sign-up-items').addClass('hidden')
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
}

const showOnChangedPassword = function () {
  $('.change-password').removeClass('hidden')
  $('.page-items').addClass('hidden')
}
const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFail)
}

const onSignOut = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFail)
}

// Toggle between sign-up and sign-in views:
const showSignUp = function (event) {
  $('.sign-up-items').removeClass('hidden')
  $('.sign-in-items').addClass('hidden')
}
const showSignIn = function (event) {
  $('.sign-in-items').removeClass('hidden')
  $('.sign-up-items').addClass('hidden')
}

const showHomePage = function (event) {
  $('.change-password').addClass('hidden')
  $('.page-items').removeClass('hidden')
  $('#content').removeClass('hidden')
  $('.show-create-beer').removeClass('hidden')
  $('.create-beer').addClass('hidden')
  $('.content').empty()
}
module.exports = {
  addHandlers,
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  showSignIn,
  showSignUp
}
