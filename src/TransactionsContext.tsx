import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface transition {
	id: number;
	title: string;
	amount: number;
	type: string;
	category: string;
	createAt: string;
}

interface TransactionsProviderProps {
	children: ReactNode;
}

export const TransactionsContext = createContext<transition[]>([]);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
	const [transactions, setTransactions] = useState<transition[]>([]);

	useEffect(() => {
		api
			.get('transactions')
			.then((response) => setTransactions(response.data.transactions));
	}, []);

	return (
		<TransactionsContext.Provider value={transactions}>
			{children}
		</TransactionsContext.Provider>
	);
}
