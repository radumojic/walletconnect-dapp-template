import * as React from 'react';

import { useGetAccountProvider } from '@elrondnetwork/dapp-core/hooks/account/useGetAccountProvider';
import { getProviderType } from '@elrondnetwork/dapp-core/providers/utils';
import { LoginMethodsEnum } from '@elrondnetwork/dapp-core/types';
import { faTableTennis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const WalletConnectPing = () => {
  const { provider } = useGetAccountProvider();
  const providerType = getProviderType(provider);

  const isSigningWithWalletConnectV2 =
    providerType === LoginMethodsEnum.walletconnectv2;

  const pingWalletConnect = async () => {
    const response = await provider?.ping?.();
    alert(response ? 'Pinged Ok' : 'No Ping');
  };

  if (!isSigningWithWalletConnectV2) {
    return null;
  }

  return (
    <div className='d-flex mt-4 justify-content-center'>
      <div className='action-btn' onClick={pingWalletConnect}>
        <button className='btn'>
          <FontAwesomeIcon icon={faTableTennis} className='text-primary' />
        </button>
        <div className='text-white text-decoration-none'>
          Ping WC Connection
        </div>
      </div>
    </div>
  );
};
