import React from 'react'
import { connect } from 'react-redux';
import {addPlayersNames} from '../Actions/Players'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class AssignScreen extends React.Component {

    beginGame = (e) => {
        e.preventDefault();
        if((this.state.player1name === '' || this.state.player2name === '') || (this.state.player1name === this.state.player2name)){
            NotificationManager.warning('Digite um nome e que seja diferente do outro player', 'Informe os nomes corretamente', 3000);
            return
        }
        this.props.addPlayersNames(this.state.player1name, this.state.player2name)
        this.props.history.push('/game');
    }

    state = {
        player1name: '',
        player2name: ''
    }

    onPlayer1nameChanged = (e) => {
        const name = e.target.value
        this.setState(() => ({
            player1name: name
        }))
    }

    onPlayer2nameChanged = (e) => {
        const name = e.target.value
        this.setState(() => ({
            player2name: name
        }))
    }

    render(){
        return (
            <div className="assign-screen">
                <form onSubmit={this.beginGame}>
                    <label htmlFor="player1">Jogador 1 - Nome: </label>
                    <input autoFocus value={this.state.player1name} onChange={this.onPlayer1nameChanged} type="text"/>
                    <label htmlFor="player2">Jogador 2 - Nome: </label>
                    <input value={this.state.player2name} onChange={this.onPlayer2nameChanged} type="text"/>
                    <input type="submit" value="Começar!"/>
                </form>
                <NotificationContainer/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    addPlayersNames: (player1, player2) => dispatch(addPlayersNames(player1, player2))
})

export default connect(undefined, mapDispatchToProps)(AssignScreen);