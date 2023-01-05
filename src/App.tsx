import React from 'react';
import { EnvironmentsEnum } from '@elrondnetwork/dapp-core/types';
import {
  TransactionsToastList,
  SignTransactionsModals,
  NotificationModal
} from '@elrondnetwork/dapp-core/UI';
import {
  DappProvider,
  AxiosInterceptorContext // using this is optional
} from '@elrondnetwork/dapp-core/wrappers';

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'components';
import { apiTimeout, sampleAuthenticatedDomains } from 'config';
import { PageNotFound, Unlock } from 'pages';
import { routeNames } from 'routes';
import { routes } from 'routes';

const walletConnectV2ProjectId = process.env.REACT_APP_PROJECT_ID;
const walletConnectV2RelayAddresses = [process.env.REACT_APP_RELAY_URL];
const walletConnectDeepLink = process.env.REACT_APP_DEEPLINK_URL ?? '';

export const App = () => {
  return (
    <AxiosInterceptorContext.Provider>
      <AxiosInterceptorContext.Interceptor
        authenticatedDomanis={sampleAuthenticatedDomains}
      >
        <Router>
          <DappProvider
            environment={EnvironmentsEnum.devnet}
            customNetworkConfig={{
              name: 'customConfig',
              apiTimeout,
              walletConnectV2ProjectId,
              walletConnectV2RelayAddresses,
              walletConnectDeepLink,
              walletConnectV2Options: { logger: 'debug' }
            }}
          >
            <Layout>
              <AxiosInterceptorContext.Listener />
              <TransactionsToastList />
              <NotificationModal />
              <SignTransactionsModals className='custom-class-for-modals' />
              <Routes>
                <Route path={routeNames.unlock} element={<Unlock />} />
                {routes.map((route, index) => (
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
      </AxiosInterceptorContext.Interceptor>
    </AxiosInterceptorContext.Provider>
  );
};
