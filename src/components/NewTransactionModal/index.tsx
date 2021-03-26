import React from "react";
import Modal from "react-modal";
import { Container } from "./styles";

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
      <Container>
        <h2>Cadastar transação</h2>

        <input type="text" placeholder="Título"></input>
        <input type="number" placeholder="Valor"></input>
        <input type="text" placeholder="Categotria"></input>
        <button>Cadastar</button>
      </Container>
    </Modal>
  );
}
