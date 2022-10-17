import * as React from 'react';
import { useGetAccountInfo } from '@elrondnetwork/dapp-core/hooks/account/useGetAccountInfo';
import { sendTransactions } from '@elrondnetwork/dapp-core/services';
import { refreshAccount } from '@elrondnetwork/dapp-core/utils';
import { faCubes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MultipleTx = () => {
  const account = useGetAccountInfo();
  const { address } = account;

  const sendMultipleTransactions = async () => {
    const firstTransaction = {
      value: '10000000000000000',
      data: 'first',
      receiver: address,
      gasLimit: '60000000'
    };
    const secondTransaction = {
      value: '20000000000000000',
      data: 'second',
      receiver: address,
      gasLimit: '60000000'
    };
    const thirdTransaction = {
      value: '30000000000000000',
      data: 'third',
      receiver: address,
      gasLimit: '60000000'
    };
    await refreshAccount();
    await sendTransactions({
      transactions: [firstTransaction, secondTransaction, thirdTransaction],
      transactionsDisplayInfo: {
        processingMessage: 'Processing Multiple transactions',
        errorMessage: 'An error has occured during Multiple tx',
        successMessage: 'Multiple transactions successful'
      },
      redirectAfterSign: false
    });
  };

  return (
    <div className='d-flex mt-4 justify-content-center'>
      <div className='action-btn' onClick={sendMultipleTransactions}>
        <button className='btn'>
          <FontAwesomeIcon icon={faCubes} className='text-primary' />
        </button>
        <a href='/' className='text-white text-decoration-none'>
          Multiple Tx
        </a>
      </div>
    </div>
  );
};

export default MultipleTx;
