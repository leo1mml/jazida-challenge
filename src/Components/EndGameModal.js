import React from 'react';
import Modal from 'react-modal';

const EndGameModal = (props) => (
    <Modal
        isOpen={props.winner ? true : false}
        contentLabel="Game Over"
        onRequestClose={props.handleClearModal}
        ariaHideApp={false}
        closeTimeoutMS={200}
        className="modal"
    >
        <h3>Parabéns {props.winner}, você venceu!</h3>
        <h4>Placar</h4>
        <h5>{props.player1.name}: {props.player1.wins} x {props.player2.name}: {props.player2.wins}</h5>
        <h5>Empates: props.draws</h5>
        <button className="play-again-btn" onClick={props.handleClearModal}>Revanche</button>
    </Modal>
)

export default EndGameModal;