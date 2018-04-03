const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Successfully signed up')
  $('#message').css('background-color', 'green')
}

const signUpFailure = function () {
  $('#message').text('Something went wrong with signup')
  $('#message').css('background-color', 'red')
}

const signInSuccess = function (data) {
  $('#message').text('Successfully signed in')
  $('#message').css('background-color', 'green')
  $('#change-password').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#sign-up').addClass('hidden')
  $('#sign-in').addClass('hidden')
  $('#new-game').removeClass('hidden')
  $('#games-played').removeClass('hidden')
  store.user = data.user
  // console.log(data.user.id)
}

const signInFailure = function () {
  $('#message').text('Could not sign in')
  $('#message').css('background-color', 'red')
}

const changePasswordSuccess = function (data) {
  $('#message').text('Password changed')
  $('#message').css('background-color', 'green')
}

const changePasswordFailure = function () {
  $('#message').text('Could not change password')
  $('#message').css('background-color', 'red')
}

const signOutSuccess = function (data) {
  $('#message').text('Successfully signed out')
  $('#message').css('background-color', 'green')
  $('#change-password').addClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#sign-up').removeClass('hidden')
  $('#sign-in').removeClass('hidden')
  $('#new-game').addClass('hidden')
  $('#games-played').addClass('hidden')
  store.user = null
}

const signOutFailure = function () {
  $('#message').text('Something went wrong with sign out')
  $('#message').css('background-color', 'red')
}
module.exports = {
  signUpFailure,
  signUpSuccess,
  signInFailure,
  signInSuccess,
  changePasswordFailure,
  changePasswordSuccess,
  signOutFailure,
  signOutSuccess
}
