const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
// const gameApi = require('../game/auth/api')
// const store = require('../store')

// Sign up event handler
const onSignUp = function (event) {
  event.preventDefault()
  // console.log('working')
  const data = getFormFields(event.target)
  // console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  $('#sign-up')[0].reset()
}

// Sign in event handler
const onSignIn = function (event) {
  event.preventDefault()
  // console.log('sign in working')
  const data = getFormFields(event.target)

  // // console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  $('#sign-in')[0].reset()
}

// $('#sign-in').click()
//    $('#addListItem').modal('hide')

const onChangePassword = function (event) {
  event.preventDefault()
  // console.log('change password is working')
  const data = getFormFields(event.target)
  // // console.log(data)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
  $('#change-password')[0].reset()
}

const onSignOut = function (event) {
  event.preventDefault()
  // console.log('sign out is working')
  const data = getFormFields(event.target)
  // // // console.log(data)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
  $('#change-password')[0].reset()
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
}
module.exports = {
  addHandlers
}
