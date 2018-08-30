import React from 'react';
import { connect } from 'react-redux';
import {updateScore} from '../Actions/Players'


class HashGameScreen extends React.Component {

    state = {
        winner: undefined,
    }
    gameState = {
        turn: 'X',
        gameEnded: false,
        board: Array(9).fill(''),
        totalMoves: 0
    }

    clicked(box) {
        if(this.gameState.gameEnded) return

        if(this.gameState.board[box.dataset.square] === '') {
            this.gameState.board[box.dataset.square] = this.gameState.turn
            box.innerText = this.gameState.turn
            box.style.color = this.gameState.turn === 'X' ? "#F22C1B" : "#02293B"
            
            this.gameState.turn = this.gameState.turn === 'X' ? 'O' : 'X'
            
            this.gameState.totalMoves++;
        }

        var result = this.checkWinner();

        if(result === 'X') {
            this.gameState.gameEnded = true;
            this.setState(() => ({
            winner: 'X',
            winnerLine: 'Match won by X'
            }));
            this.props.winGame(true, false, false)
        } else if(result === 'O') {
            this.gameState.gameEnded = true;
            this.setState(() => ({
            winner: 'O',
            winnerLine: 'Match won by O'
            }));
            this.props.winGame(false, true, false)
        } else if(result === 'draw') {
            this.gameState.gameEnded = true;
            this.setState(() => ({
                winner: 'draw',
                winnerLine: 'Match is drawn'
            }))
            this.props.winGame(true, false, true)
        }

    }

    checkWinner() {
        var moves = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6], [0, 1, 2], [3, 4, 5], [6, 7, 8]];
        var board = this.gameState.board;
        for(let i=0;i<moves.length;i++) {
            if(board[moves[i][0]] === board[moves[i][1]] && board[moves[i][1]] === board[moves[i][2]])
                return board[moves[i][0]];
        }

        if(this.gameState.totalMoves === 9) {
            return 'draw';
        }
    }
    

    render(){
        return (
            <div id="game">
                <div id="status">{this.state.winnerLine}</div>
                <div id="head">
                    World's best tic tac toe AI
                </div>
                <div id="board" onClick={(e)=>this.clicked(e.target)}>
                    <div className="square" data-square="0"></div>
                    <div className="square" data-square="1"></div>
                    <div className="square" data-square="2"></div>
                    <div className="square" data-square="3"></div>
                    <div className="square" data-square="4"></div>
                    <div className="square" data-square="5"></div>
                    <div className="square" data-square="6"></div>
                    <div className="square" data-square="7"></div>
                    <div className="square" data-square="8"></div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    winGame: (player1win, player2win, draw) => dispatch(updateScore(player1win, player2win, draw))
})

export default connect(undefined, mapDispatchToProps)(HashGameScreen);