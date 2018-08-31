import React from 'react';
import { connect } from 'react-redux';
import {updateScore} from '../Actions/Players';
import EndGameModal from '../Components/EndGameModal';


class HashGameScreen extends React.Component {

    state = {
        winner: undefined,
        turn: 'X',
        gameEnded: false,
    }
    gameState = {
        board: Array(9).fill(''),
        totalMoves: 0
    }

    componentDidMount(){
        console.log(this.props);
    }

    clicked(box) {
        if(this.state.gameEnded) return

        if(this.gameState.board[box.dataset.square] === '') {
            this.gameState.board[box.dataset.square] = this.state.turn
            box.innerText = this.state.turn
            box.style.color = this.state.turn === 'X' ? "#F22C1B" : "#02293B"
            
            this.setState((prevState) => ({turn: prevState.turn === 'X' ? 'O' : 'X'}))
            
            this.gameState.totalMoves++;
        }

        var result = this.checkWinner();

        if(result){
            let winner = undefined
            switch (result) {
                case 'X':
                    winner = this.props.player1.name
                    this.props.winGame(true, false, false)
                break;
                case 'O':
                    winner = this.props.player2.name
                    this.props.winGame(false, true, false)
                break;
                case 'draw':
                    this.props.winGame(false, false, true)
                break;
                default:
                    break;
            }

            console.log("passei");
            this.setState(() => ({
                gameEnded: true,
                winner
            }))
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

    handleClearModal = () => {
        this.gameState.board = Array(9).fill('')
        this.gameState.totalMoves = 0
        this.setState(() => ({
            gameEnded: false,
            winner: undefined
        }))
        Array.from(document.getElementsByClassName("square"), elem => elem.innerText="")
    }
    

    render(){
        return (
            <div id="game">
                <div id="status">Boa Sorte!</div>
                <div id="head">
                    {!this.state.gameEnded ? 
                        `É a vez de ${this.state.turn === 'X'? this.props.player1.name : this.props.player2.name}`
                        :
                        "GAME OVER"
                    }
                    
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
                <EndGameModal 
                    shouldShow={this.state.gameEnded}
                    winner={this.state.winner}
                    player1={this.props.player1}
                    player2={this.props.player2}
                    draws={this.props.draws}
                    handleClearModal={this.handleClearModal}
                ></EndGameModal>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    winGame: (player1win, player2win, draw) => dispatch(updateScore(player1win, player2win, draw))
})

const mapStateToProps = (state, props) => ({
    player1: state.players.player1,
    player2: state.players.player2,
    draws: state.players.draws
})

export default connect(mapStateToProps, mapDispatchToProps)(HashGameScreen);