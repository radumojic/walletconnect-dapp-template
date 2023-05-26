import * as React from 'react';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGetAccountInfo } from '@multiversx/sdk-dapp/hooks/account/useGetAccountInfo';
import { sendTransactions } from '@multiversx/sdk-dapp/services';
import { refreshAccount } from '@multiversx/sdk-dapp/utils';

export const BalanceTx = () => {
  const account = useGetAccountInfo();
  const { address } = account;

  const sendBalanceTransaction = async () => {
    const balanceSelfTransaction = {
      value: '100000000000000000',
      receiver: address,
      gasLimit: '60000000'
    };
    await refreshAccount();
    await sendTransactions({
      transactions: balanceSelfTransaction,
      transactionsDisplayInfo: {
        processingMessage: 'Processing Balance Tx',
        errorMessage: 'An error has occured during Balance Tx',
        successMessage: 'Balance Tx successful'
      },
      redirectAfterSign: false
    });
  };

  return (
    <div className='d-flex mt-4 justify-content-center'>
      <div className='action-btn' onClick={sendBalanceTransaction}>
        <button className='btn'>
          <FontAwesomeIcon icon={faCube} className='text-primary' />
        </button>
        <div className='text-white text-decoration-none'>Balance Tx</div>
      </div>
    </div>
  );
};
