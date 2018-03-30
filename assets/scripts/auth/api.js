const config = require('../config')

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

// data.user.id
module.exports = {
  signUp,
  signIn
}
