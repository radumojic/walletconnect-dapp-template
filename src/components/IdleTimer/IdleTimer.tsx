import { useIdleTimer } from '@multiversx/sdk-dapp/web/hooks/useIdleTimer';

import { logout } from 'helpers';

export const IdleTimer = () => {
  const onLogout = () => logout(`${window.location.origin}/unlock`);
  const minutes = process.env.REACT_APP_IDLE_TIME
    ? Number(process.env.REACT_APP_IDLE_TIME)
    : 60;

  useIdleTimer({
    minutes,
    onLogout
  });

  return null;
};
