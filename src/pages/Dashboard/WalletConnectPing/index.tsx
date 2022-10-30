import * as React from 'react';

import { useGetAccountProvider } from '@elrondnetwork/dapp-core/hooks/account/useGetAccountProvider';
import { LoginMethodsEnum } from '@elrondnetwork/dapp-core/types';
import { getIsProviderEqualTo } from '@elrondnetwork/dapp-core/utils/account/getIsProviderEqualTo';
import { faTableTennis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WalletConnectPing = () => {
  const { provider } = useGetAccountProvider();

  const pingWalletConnect = async () => {
    const response = await provider?.ping?.();
    alert(response ? 'Pinged Ok' : 'No Ping');
  };

  if (!getIsProviderEqualTo(LoginMethodsEnum.walletconnectv2)) {
    return null;
  }

  return (
    <div className='d-flex mt-4 justify-content-center'>
      <div className='action-btn' onClick={pingWalletConnect}>
        <button className='btn'>
          <FontAwesomeIcon icon={faTableTennis} className='text-primary' />
        </button>
        <a href='/' className='text-white text-decoration-none'>
          Ping WC Connection
        </a>
      </div>
    </div>
  );
};

export default WalletConnectPing;
