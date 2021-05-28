import React, { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
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
	const [title, setTitle] = useState('');
	const [category, setCategory] = useState('');
	const [value, setValue] = useState(0);

	const [type, setType] = useState('deposit');

	function handleCreateNewTransaction(event: FormEvent) {
		event.preventDefault();
	}

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

			<Container onSubmit={handleCreateNewTransaction}>
				<h2>Cadastar transação</h2>

				<input
					type='text'
					placeholder='Título'
					value={title}
					onChange={(event) => setTitle(event.target.value)}
				></input>
				<input
					type='number'
					placeholder='Valor'
					value={value}
					onChange={(event) => setValue(Number(event.target.value))}
				></input>

				<TransactionTypeContainer>
					<RadioBox
						type='button'
						onClick={() => setType('deposit')}
						isActive={type === 'deposit'}
						activeColor='green'
					>
						<img src={incomeImg} alt='Entrada' />
						<span>Entrada</span>
					</RadioBox>

					<RadioBox
						type='button'
						onClick={() => setType('wirhdraw')}
						isActive={type === 'wirhdraw'}
						activeColor='red'
					>
						<img src={outcomeImg} alt='Saída' />
						<span>Saída</span>
					</RadioBox>
				</TransactionTypeContainer>

				<input
					type='text'
					placeholder='Categotria'
					value={category}
					onChange={(event) => setCategory(event.target.value)}
				></input>
				<button type='submit'>Cadastar</button>
			</Container>
		</Modal>
	);
}
