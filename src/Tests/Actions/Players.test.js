import {addPlayersNames, updateScore} from '../../Actions/Players'

test('should set players names', () => {
    const action = addPlayersNames("João", "Maria")
    expect(action).toEqual({
        type: "ADD_PLAYERS_NAMES",
        player1name: "João",
        player2name: "Maria"
    })
})

test('should add a win to player 1', () => {
    const action = updateScore(true, false, false)
    expect(action).toEqual({ 
        type: 'UPDATE_SCORE',
        player1win: true,
        player2win: false,
        draw: false 
    })
})

test('should add a win to player 2', () => {
    const action = updateScore(false, true, false)
    expect(action).toEqual({ 
        type: 'UPDATE_SCORE',
        player1win: false,
        player2win: true,
        draw: false 
    })
})

test('should add a draw', () => {
    const action = updateScore(false, false, true)
    expect(action).toEqual({ 
        type: 'UPDATE_SCORE',
        player1win: false,
        player2win: false,
        draw: true 
    })
})