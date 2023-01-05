import * as React from 'react';
import { refreshAccount } from '@elrondnetwork/dapp-core/utils';
import { signMessage } from '@elrondnetwork/dapp-core/utils/account/signMessage';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SignMessage = () => {
  const handleSignMessage = async () => {
    await refreshAccount();
    const message = await signMessage({
      message: 'asl pls'
    });
    alert(JSON.stringify(message.toJSON()));
  };

  return (
    <div className='d-flex mt-4 justify-content-center'>
      <div className='action-btn' onClick={handleSignMessage}>
        <button className='btn'>
          <FontAwesomeIcon icon={faCommentAlt} className='text-primary' />
        </button>
        <div className='text-white text-decoration-none'>Sign Message</div>
      </div>
    </div>
  );
};
