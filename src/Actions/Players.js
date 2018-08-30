export const addPlayersNames = (player1name, player2name) => ({
    type: "ADD_PLAYERS_NAMES",
    player1name,
    player2name
})

export const updateScore = (player1win, player2win, draw) => ({
    type: 'UPDATE_SCORE',
    player1win,
    player2win,
    draw
})