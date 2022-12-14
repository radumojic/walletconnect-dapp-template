import React from 'react';
import { EnvironmentsEnum } from '@elrondnetwork/dapp-core/types';
import {
  TransactionsToastList,
  SignTransactionsModals,
  NotificationModal
} from '@elrondnetwork/dapp-core/UI';
import { DappProvider } from '@elrondnetwork/dapp-core/wrappers';

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Layout from 'components/Layout';
import PageNotFound from 'pages/PageNotFound';
import { routeNames } from 'routes';
import routes from 'routes';
import UnlockPage from './pages/UnlockPage';

const environment = EnvironmentsEnum.devnet;
const walletConnectV2ProjectId = process.env.REACT_APP_PROJECT_ID;
const walletConnectV2RelayAddresses = [process.env.REACT_APP_RELAY_URL];
const walletConnectDeepLink = process.env.REACT_APP_DEEPLINK_URL ?? '';

const App = () => {
  return (
    <Router>
      <DappProvider
        environment={environment}
        customNetworkConfig={{
          name: 'customConfig',
          apiTimeout: 6000,
          walletConnectV2ProjectId,
          walletConnectV2RelayAddresses,
          walletConnectDeepLink
        }}
      >
        <Layout>
          <TransactionsToastList />
          <NotificationModal />
          <SignTransactionsModals className='custom-class-for-modals' />
          <Routes>
            <Route path={routeNames.unlock} element={<UnlockPage />} />
            {routes.map((route: any, index: number) => (
              <Route
                path={route.path}
                key={'route-key-' + index}
                element={<route.component />}
              />
            ))}
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Layout>
      </DappProvider>
    </Router>
  );
};

export default App;
