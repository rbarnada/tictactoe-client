const store = require('../../store')
const gameLogic = require('../gameLogic')

const createGameSuccess = function (data) {
  store.game = data.game
  // console.log(store.game.cells)
  // console.log(store.game)
  gameLogic.runGame()
  $('#user-message').text('')
  $('.spaces').html('')
  $('#new-game').addClass('hidden')
  $('.game-board').removeClass('hidden')
}

const createGameFailure = function () {
  // console.log('failed to create game')
  $('#user-message').text('There was an error creating a new game')
}

const showGamesSuccess = function (data) {
  $('#total-message').text(`Total games played: ${data.games.length}`)
  setTimeout(() => $('#total-message').text(''), 5000)
}

const showGamesFailure = function () {
  $('#total-message').text('Could not retrieve games played')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  showGamesSuccess,
  showGamesFailure
}
