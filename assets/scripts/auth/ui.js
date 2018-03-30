const signUpSuccess = function (data) {
  $('#message').text('Successfully signed up')
  $('#message').css('background-color', 'green')
}

const signUpFailure = function () {
  $('#message').text('Something went wrong with signup')
  $('#message').css('background-color', 'red')
}

module.exports = {
  signUpFailure,
  signUpSuccess
}
