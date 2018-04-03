const store = require('../../store')
const gameLogic = require('../gameLogic')

const createGameSuccess = function (data) {
  store.game = data.game
  console.log(store.game.cells)
  console.log(store.game)
  gameLogic.runGame()
  $('#user-message').text('')
  $('.spaces').html('')
}

const createGameFailure = function () {
  console.log('failed to create game')
}

module.exports = {
  createGameSuccess,
  createGameFailure
}
