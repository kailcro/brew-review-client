'use strict'

const store = require('./../store')

const signUpSuccess = function (data) {
  $('#message').text('Hello ' + data.user.email + ", you've successfully signed up!")
}
const signUpFail = function (data) {
  $('#message-out').text('Sign Up Failed!')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  $('#message').text('Welcome, ' + data.user.email + '!')
  store.user = data.user
  $('form').trigger('reset')
  $('.sign-in-items').addClass('hidden')
  $('.sign-up-items').addClass('hidden')
  $('.account-items').removeClass('hidden')
  $('.page-items').removeClass('hidden')
  $('#nav-outside').addClass('hidden')
  $('#nav-inside').removeClass('hidden')
}
const signInFail = function (data) {
  $('#message-out').text('Sign in failed')
  $('form').trigger('reset')
}

const changePasswordSuccess = function (data) {
  $('#message').text('Your password has been changed!')
  $('form').trigger('reset')
  $('.change-password').addClass('hidden')
  $('.page-items').removeClass('hidden')
}
const changePasswordFail = function (data) {
  $('#message').text('Change password failed!')
  $('form').trigger('reset')
}

const signOutSuccess = function (data) {
  $('#message-out').text('Come back soon!')
  $('#nav-outside').removeClass('hidden')
  $('#nav-inside').addClass('hidden')
  $('.sign-in-items').removeClass('hidden')
  $('.page-items').addClass('hidden')
  $('.change-password').addClass('hidden')
}

const signOutFail = function (data) {
  $('#message').text('Sign Out Failed')
}

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  changePasswordSuccess,
  changePasswordFail,
  signOutSuccess,
  signOutFail
}
