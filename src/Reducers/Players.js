const playersReducerDefaultState = {
  player1:{
    name: '',
    wins: 0
  },
  player2:{
    name: '',
    wins: 0
  },
  draws: 0
}

export default (state = playersReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_PLAYERS_NAMES':
      return {
        player1: {
          name: action.player1name
        },
        player2: {
          name: action.player2name
        }
      };
    case 'UPDATE_SCORE':
    return {
      player1: {
        ...state.player1,
        wins: action.player1win? state.player1.wins + 1 : state.player1.wins
      },
      player2: {
        ...state.player1,
        wins: action.player2win? state.player2.wins + 1 : state.player2.wins
      },
      draws: action.draw? state.draws + 1 : state.draws
    }
    default:
      return state;
  }
};
