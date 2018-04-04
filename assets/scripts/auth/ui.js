const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Successfully signed up')
  $('#message').css('background-color', '#7F95A4')
  setTimeout(() => $('#message').text(''), 3000)
  $('#SignUp').modal('hide')
}

const signUpFailure = function () {
  $('#up-fail-message').text('Something went wrong with sign up')
  $('#up-fail-message').css('background-color', 'pink')
  setTimeout(() => $('#up-fail-message').text(''), 3000)
}

const signInSuccess = function (data) {
  $('#message').text('Successfully signed in')
  $('#message').css('background-color', '#7F95A4')
  setTimeout(() => $('#message').text(''), 3000)
  // $('#change-password').removeClass('hidden')
  // $('#sign-out').removeClass('hidden')
  // $('#sign-up').addClass('hidden')
  // $('#sign-in').addClass('hidden')
  $('#SignIn').modal('hide')
  $('#new-game').removeClass('hidden')
  $('#games-played').removeClass('hidden')
  // $('#SignUp').modal('hide')
  $('#sign-in-modal').addClass('hidden')
  $('#sign-up-modal').addClass('hidden')
  $('#pass-modal').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  store.user = data.user
  // console.log(data.user.id)
}

const signInFailure = function () {
  $('#in-fail-message').text('Incorrect Login. Try Again')
  $('#in-fail-message').css('background-color', 'pink')
  setTimeout(() => $('#in-fail-message').text(''), 3000)
}

const changePasswordSuccess = function (data) {
  $('#message').text('Password changed')
  $('#message').css('background-color', '#7F95A4')
  setTimeout(() => $('#message').text(''), 3000)
  $('#ChangePass').modal('hide')
}

const changePasswordFailure = function () {
  $('#pass-fail-message').text('Could not change password')
  $('#pass-fail-message').css('background-color', 'pink')
  setTimeout(() => $('#pass-fail-message').text(''), 3000)
  $('#pass-modal').removeClass('hidden')
}

const signOutSuccess = function (data) {
  $('#message').text('Successfully signed out')
  $('#message').css('background-color', '#7F95A4')
  setTimeout(() => $('#message').text(''), 3000)
  // $('#change-password').addClass('hidden')
  // $('#sign-out').addClass('hidden')
  // $('#sign-up').removeClass('hidden')
  // $('#sign-in').removeClass('hidden')
  $('#sign-in-modal').removeClass('hidden')
  $('#sign-up-modal').removeClass('hidden')
  $('#pass-modal').addClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#new-game').addClass('hidden')
  $('#games-played').addClass('hidden')
  $('.game-board').addClass('hidden')
  $('#user-message').text('')
  store.user = null
}

const signOutFailure = function () {
  $('#message').text('Something went wrong with sign out')
  $('#message').css('background-color', 'pink')
  setTimeout(() => $('#message').text(''), 3000)
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
