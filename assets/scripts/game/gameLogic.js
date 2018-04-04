// const gameEvents = require('./auth/events')
const api = require('./auth/api')
const store = require('../store')

const runGame = function () {
  // player variables
  const playerOne = 'X'
  const playerTwo = 'O'
  let currentPlayer = playerOne
  store.player = currentPlayer
  const gameBoard = store.game.cells
  const gameTest = store.game
  console.log(gameTest)
  // let gameOver = false
  store.gameState = false
  console.log(gameBoard)
  // turn variable. odd numbers = p1, even p2.
  let turn = 1
  console.log(turn)

  const placeMove = function () {
    $('.spaces').on('click', function (event) {
      if ($(event.target).text() === '') {
        $(event.target).append(`<h1>${currentPlayer}</h1>`)
        // console.log($(event.target).text())
        const currentVal = $(event.target).data().value
        store.game.cells[currentVal] = currentPlayer
        // turn incrementer
        turn++
        console.log(turn)
      } else {
        $('#message').text('Invalid move. Try again')
        $('#message').css('background-color', 'red')
        setTimeout(() => $('#message').text(''), 2000)
        // $(event.target).off('click')
        // console.log('error')
      }

      // Sets X or O to position in array

      // determine player
      if (turn % 2 === 0) {
        currentPlayer = playerTwo
        store.player = currentPlayer
      } else {
        currentPlayer = playerOne
        store.player = currentPlayer
      }

      // $(event.target).off('click')

      // console.log(turn)
      // console.log(gameBoard)

      // let gameOver = false
      // store.gameState = gameOver

      // check for winner
      if ((gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') ||
        (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') ||
        (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') ||
        (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') ||
        (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') ||
        (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') ||
        (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') ||
        (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X')) {
        // gameOver = true
        // console.log(gameOver)
        // console.log('Player 1 wins')
        $('#user-message').text('X wins')
        $('.spaces').off('click')
        store.gameState = true
        $('#new-game').removeClass('hidden')
        // console.log(store.gameState)
      } else if ((gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') ||
        (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') ||
        (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') ||
        (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O') ||
        (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') ||
        (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') ||
        (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') ||
        (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O')) {
        // console.log('Player 2 wins')
        $('#user-message').text('O wins')
        $('.spaces').off('click')
        // gameOver = true
        store.gameState = true
        $('#new-game').removeClass('hidden')
      } else if (gameBoard[0] !== '' && gameBoard[1] !== '' && gameBoard[2] !== '' && gameBoard[3] !== '' && gameBoard[4] !== '' && gameBoard[5] !== '' && gameBoard[6] !== '' && gameBoard[7] !== '' && gameBoard[8] !== '') {
        $('#user-message').text("It's a tie")
        $('.spaces').off('click')
        // gameOver = true
        store.gameState = true
        $('#new-game').removeClass('hidden')
      }
      // Update game api function
      api.updateGame(event)
      console.log(store.game.cells)
    })
  }
  placeMove()
}

//   const newGame = function () {
//     placeMove()
//   }
//   newGame()
// }

    // $('.spaces').on('click', function (event) {
    //   $(event.target).append(`<h1>${currentPlayer}</h1>`)
    //   // Sets X or O to position in array
    //   const currentVal = $(event.target).data().value
    //   gameBoard[currentVal] = currentPlayer
    //   turn += 1
    //   // console.log(turn)
    //   if (turn % 2 === 0) {
    //     currentPlayer = playerTwo
    //   } else {
    //     currentPlayer = playerOne
    //   }
    //   $(event.target).off('click')
    //
    //   // console.log(turn)
    //   // console.log(gameBoard)
    //
    //   // check for winner
    //   if ((gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') ||
    //     (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') ||
    //     (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') ||
    //     (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') ||
    //     (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') ||
    //     (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') ||
    //     (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') ||
    //     (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X')) {
    //     console.log('Player 1 wins')
    //     $('#user-message').text('Player 1 wins')
    //     $('.spaces').off('click')
    //     gameOver = true
    //     // $('#restart').removeClass('hidden')
    //   } else if ((gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') ||
    //     (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') ||
    //     (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') ||
    //     (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O') ||
    //     (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') ||
    //     (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') ||
    //     (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') ||
    //     (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O')) {
    //     console.log('Player 2 wins')
    //     $('#user-message').text('Player 2 wins')
    //     $('.spaces').off('click')
    //     gameOver = true
    //     // $('#restart').removeClass('hidden')
    //   } else if (gameBoard[0] !== '' && gameBoard[1] !== '' && gameBoard[2] !== '' && gameBoard[3] !== '' && gameBoard[4] !== '' && gameBoard[5] !== '' && gameBoard[6] !== '' && gameBoard[7] !== '' && gameBoard[8] !== '') {
    //     $('#user-message').text("It's a tie")
    //     gameOver = true
    //     // $('#restart').removeClass('hidden')
    //   }
    // })


  // const restart = function () {
  //   $('#restart').on('submit', function (event) {
  //     event.preventDefault()
  //     turn = 1
  //     currentPlayer = playerOne
  //     // gameBoard[0] = ''
  //     // gameBoard[1] = ''
  //     // gameBoard[2] = ''
  //     // gameBoard[3] = ''
  //     // gameBoard[4] = ''
  //     // gameBoard[5] = ''
  //     // gameBoard[6] = ''
  //     // gameBoard[7] = ''
  //     // gameBoard[8] = ''
  //     $('#user-message').text('')
  //     $('.spaces').html('')
  //     newGame()
  //   })
  // }
  //
  // restart()


module.exports = {
  runGame
}
