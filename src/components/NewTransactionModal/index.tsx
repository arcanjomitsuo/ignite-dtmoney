import React from "react";
import Modal from "react-modal";
import { Container } from "./styles";
import CloseImg from "../../assets/close.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={CloseImg} alt="Fechar" />
      </button>

      <Container>
        <h2>Cadastar transação</h2>

        <input type="text" placeholder="Título"></input>
        <input type="number" placeholder="Valor"></input>
        <input type="text" placeholder="Categotria"></input>
        <button type="submit">Cadastar</button>
      </Container>
    </Modal>
  );
}
