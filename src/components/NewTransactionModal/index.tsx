import React, { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import CloseImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from '../../services/api';
import { TransactionsContext } from '../../TransactionsContext';

interface NewTransactionModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function NewTransactionModal({
	isOpen,
	onRequestClose,
}: NewTransactionModalProps) {
	const { createTransaction } = useContext(TransactionsContext);

	const [title, setTitle] = useState('');
	const [category, setCategory] = useState('');
	const [amount, setAmount] = useState(0);

	const [type, setType] = useState('deposit');

	async function handleCreateNewTransaction(event: FormEvent) {
		event.preventDefault();

		await createTransaction({ title, amount, category, type });

		setTitle('');
		setCategory('');
		setType('');
		setAmount(0);
		onRequestClose();
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
					value={amount}
					onChange={(event) => setAmount(Number(event.target.value))}
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
						onClick={() => setType('withdraw')}
						isActive={type === 'withdraw'}
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
