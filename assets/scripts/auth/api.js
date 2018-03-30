const config = require('../config')
const store = require('../store')
// const ui = require('./ui')

// Sign up ajax call
const signUp = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiUrl + `/sign-up`,
    method: 'POST',
    data
  })
}

// Sign in ajax call
const signIn = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiUrl + `/sign-in`,
    method: 'POST',
    data
  })
}

const changePassword = function (data) {
  // console.log(store.user.token)
  return $.ajax({
    url: config.apiUrl + `/change-password/${store.user.id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// data.user.id
module.exports = {
  signUp,
  signIn,
  changePassword
}
