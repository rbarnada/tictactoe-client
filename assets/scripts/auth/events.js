const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// Sign up event handler
const onSignUp = function (event) {
  event.preventDefault()
  // console.log('working')
  const data = getFormFields(event.target)
  // console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

// Sign in event handler
const onSignIn = function (event) {
  event.preventDefault()
  console.log('sign in working')
  const data = getFormFields(event.target)
  // // console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
}
module.exports = {
  addHandlers
}
