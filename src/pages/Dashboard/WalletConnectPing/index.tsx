import * as React from 'react';
import { useGetAccountProvider } from '@elrondnetwork/dapp-core/hooks/account/useGetAccountProvider';
import { faTableTennis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WalletConnectPing = () => {
  const { provider } = useGetAccountProvider();

  const pingWalletConnect = async () => {
    const response = await provider?.ping();
    alert(response);
  };

  return (
    <div className='d-flex mt-4 justify-content-center'>
      <div className='action-btn' onClick={pingWalletConnect}>
        <button className='btn'>
          <FontAwesomeIcon icon={faTableTennis} className='text-primary' />
        </button>
        <a href='/' className='text-white text-decoration-none'>
          Ping WC2
        </a>
      </div>
    </div>
  );
};

export default WalletConnectPing;
