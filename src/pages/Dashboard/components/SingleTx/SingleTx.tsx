import * as React from 'react';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGetAccountInfo } from '@multiversx/sdk-dapp/hooks/account/useGetAccountInfo';
import { sendTransactions } from '@multiversx/sdk-dapp/services';
import { refreshAccount } from '@multiversx/sdk-dapp/utils';

export const SingleTx = () => {
  const account = useGetAccountInfo();
  const { address } = account;

  const sendSingleTransaction = async () => {
    const singleSelfTransaction = {
      value: '1000000000000000000',
      data: 'one',
      receiver: address,
      gasLimit: '60000000'
    };
    await refreshAccount();
    await sendTransactions({
      transactions: singleSelfTransaction,
      transactionsDisplayInfo: {
        processingMessage: 'Processing Single Tx',
        errorMessage: 'An error has occured during Single Tx',
        successMessage: 'Single Tx successful'
      },
      redirectAfterSign: false
    });
  };

  return (
    <div className='d-flex mt-4 justify-content-center'>
      <div className='action-btn' onClick={sendSingleTransaction}>
        <button className='btn'>
          <FontAwesomeIcon icon={faCube} className='text-primary' />
        </button>
        <div className='text-white text-decoration-none'>Single Tx</div>
      </div>
    </div>
  );
};
