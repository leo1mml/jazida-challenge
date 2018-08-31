import gameState from '../Fixtures/GameState';
import playersReducer from '../../Reducers/Players';

test('should set default state', () => {
    const state = playersReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        player1:{
          name: '',
          wins: 0
        },
        player2:{
          name: '',
          wins: 0
        },
        draws: 0
      })
})

test('should set initial state', () => {
    const state = playersReducer(gameState, {type: '@@INIT'})
    expect(state).toEqual({
        player1:{
          name: 'Joãozinho',
          wins: 0
        },
        player2:{
          name: 'Jabosinha',
          wins: 0
        },
        draws: 0
    })
})
test('should set players names', () => {
    const action = {
        type: 'ADD_PLAYERS_NAMES',
        player1name: "João",
        player2name: "Maria"
    }

    const state = playersReducer(gameState, action)

    expect(state).toEqual({
        player1: {
            name: "João",
            wins: 0
        },
        player2: {
            name: "Maria",
            wins: 0
        },
        draws: 0
    })
})
test('should add win to player 1', () => {
    const action = {
        type: 'UPDATE_SCORE',
        player1win: true,
        player2win: false,
        draw: false 
    }

    const state = playersReducer(gameState, action)

    expect(state).toEqual({
        ...gameState,
        player1: {
            name: gameState.player1.name,
            wins: 1
        }
    })
})


test('should add win to player 2', () => {
    const action = {
        type: 'UPDATE_SCORE',
        player1win: false,
        player2win: true,
        draw: false 
    }

    const state = playersReducer(gameState, action)

    expect(state).toEqual({
        ...gameState,
        player2: {
            name: gameState.player2.name,
            wins: 1
        }
    })
})

test('should add a draw', () => {
    const action = {
        type: 'UPDATE_SCORE',
        player1win: false,
        player2win: false,
        draw: true 
    }

    const state = playersReducer(gameState, action)

    expect(state).toEqual({
        ...gameState,
        draws: gameState.draws + 1
    })
})