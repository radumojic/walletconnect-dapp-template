import * as React from 'react';
import { useGetAccountInfo } from '@elrondnetwork/dapp-core/hooks/account/useGetAccountInfo';
import { sendTransactions } from '@elrondnetwork/dapp-core/services';
import { refreshAccount } from '@elrondnetwork/dapp-core/utils';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SingleTx = () => {
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
        <a href='/' className='text-white text-decoration-none'>
          Single Tx
        </a>
      </div>
    </div>
  );
};

export default SingleTx;
