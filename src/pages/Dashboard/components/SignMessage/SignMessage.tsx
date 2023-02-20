import * as React from 'react';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { refreshAccount } from '@multiversx/sdk-dapp/utils';
import { signMessage } from '@multiversx/sdk-dapp/utils/account/signMessage';

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
