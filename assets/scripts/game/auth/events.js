const api = require('./api')
const store = require('../../store')
const gameLogic = require('../gameLogic')

const createNewGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(function (data) {
      store.game = data.game
      console.log(store.game.cells)
      console.log(gameLogic)
      gameLogic.runGame()
    })
    .catch()
}

const addHandlers = function () {
  $('#new-game').on('submit', createNewGame)
}

module.exports = {
  addHandlers
}
