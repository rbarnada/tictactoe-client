const api = require('./api')
// const store = require('../../store')
// const gameLogic = require('../gameLogic')
const ui = require('./ui')

const createNewGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const showGamesPlayed = function () {
  event.preventDefault()
  api.getGames()
    .then(ui.showGamesSuccess)
    .catch(ui.showGamesFailure)
}

const addHandlers = function () {
  $('#new-game').on('submit', createNewGame)
  $('#games-played').on('submit', showGamesPlayed)
}

module.exports = {
  addHandlers
}
