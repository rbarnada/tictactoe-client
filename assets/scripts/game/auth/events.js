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

// const onUpdateGame = function (event) {
//   api.updateGame()
// }

const addHandlers = function () {
  $('#new-game').on('submit', createNewGame)
}

module.exports = {
  addHandlers
}
