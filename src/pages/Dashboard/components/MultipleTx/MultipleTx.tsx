import * as React from 'react';
import { faCubes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGetAccountInfo } from '@multiversx/sdk-dapp/hooks/account/useGetAccountInfo';
import { sendTransactions } from '@multiversx/sdk-dapp/services';
import { refreshAccount } from '@multiversx/sdk-dapp/utils';

export const MultipleTx = () => {
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
        <div className='text-white text-decoration-none'>Multiple Tx</div>
      </div>
    </div>
  );
};
