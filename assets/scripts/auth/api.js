const config = require('../config')

const signUp = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiUrl + `/sign-up`,
    method: 'POST',
    data
  })
}

module.exports = {
  signUp
}
