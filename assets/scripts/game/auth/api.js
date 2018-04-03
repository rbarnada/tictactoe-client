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

const updateGame = function (event) {
  // console.log('api connected')
  // console.log($(event.target).attr('data-value'))
  // console.log(store.player)
  // console.log(store.gameState)
  return $.ajax({
    url: config.apiUrl + `/games/${store.game.id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: $(event.target).attr('data-value'),
          value: store.player
        },
        over: store.gameState
      }
    }
  })
}

module.exports = {
  createGame,
  updateGame
}
