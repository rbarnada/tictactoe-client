'use strict'
const authEvents = require('./auth/events')
// const gameLogic = require('./game/gameLogic')
const gameEvents = require('./game/auth/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  authEvents.addHandlers()
  // gameLogic.runGame()
  gameEvents.addHandlers()
})
