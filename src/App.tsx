import ReactModal from 'react-modal';
import { useState } from 'react';
import { TransactionProvider, TransactionsContext } from './TransactionContext'

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/NewTranasactionModal';

import { GlobalStyle } from './styles/global';


ReactModal.setAppElement('#root');

 export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionProvider>
      <Header
      onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />


      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionProvider>
  );
}


