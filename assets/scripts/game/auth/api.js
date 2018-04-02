const config = require('../../config')
const store = require('../../store')

const createGame = function () {
  console.log('game created')
  return $.ajax({
    url: config.apiUrl + `/games`,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

module.exports = {
  createGame
}
