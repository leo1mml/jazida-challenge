import React from 'react'

class AssignScreen extends React.Component {

    beginGame = (e) => {
        e.preventDefault();
        console.log("passei");
        this.props.history.push('/game');
    }

    render(){
        return (
            <div className="assign-screen">
                <form action="/game">
                    <label htmlFor="player1">Jogador 1 - Nome: </label>
                    <input type="text" name="player1name" id="player1"/>
                    <label htmlFor="player2">Jogador 2 - Nome: </label>
                    <input type="text" name="player2name" id="player2"/>
                    <input type="submit" value="Começar!"/>
                </form>
            </div>
        )
    }
}

export default AssignScreen;