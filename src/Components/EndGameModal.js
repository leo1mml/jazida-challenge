import React from 'react';
import Modal from 'react-modal';

const EndGameModal = (props) => (
    <Modal
        isOpen={props.shouldShow}
        contentLabel="Game Over"
        onRequestClose={props.handleClearModal}
        ariaHideApp={false}
        closeTimeoutMS={200}
        className="modal"
    >
        <h3>{props.winner ? `Parabéns ${props.winner}, você venceu!` : "EMPATE!"}
        </h3>
        <h4>Placar</h4>
        <h5>{props.player1.name}: {props.player1.wins} | {props.player2.name}: {props.player2.wins}</h5>
        <h5>Empates: {props.draws}</h5>
        <button className="play-again-btn" onClick={props.handleClearModal}>REVANCHE</button>
    </Modal>
)

export default EndGameModal;