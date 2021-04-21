import React, { useState } from 'react';
import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './styles';
import CloseImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        type='button'
        onClick={onRequestClose}
        className='react-modal-close'
      >
        <img src={CloseImg} alt='Fechar' />
      </button>

      <Container>
        <h2>Cadastar transação</h2>

        <input type='text' placeholder='Título'></input>
        <input type='number' placeholder='Valor'></input>

        <TransactionTypeContainer>
          <button type='button' onClick={() => setType('deposit')}>
            <img src={incomeImg} alt='Entrada' />
            <span>Entrada</span>
          </button>

          <button type='button' onClick={() => setType('wirhdraw')}>
            <img src={outcomeImg} alt='Saída' />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>

        <input type='text' placeholder='Categotria'></input>
        <button type='submit'>Cadastar</button>
      </Container>
    </Modal>
  );
}
