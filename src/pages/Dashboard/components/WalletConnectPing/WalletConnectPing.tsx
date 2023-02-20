import * as React from 'react';
import { faTableTennis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGetAccountProvider } from '@multiversx/sdk-dapp/hooks/account/useGetAccountProvider';
import { getProviderType } from '@multiversx/sdk-dapp/providers/utils';
import { LoginMethodsEnum } from '@multiversx/sdk-dapp/types';

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
