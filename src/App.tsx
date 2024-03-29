import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import {
  AxiosInterceptorContext, // using this is optional
  DappProvider,
  Layout
} from 'components';
import {
  TransactionsToastList,
  NotificationModal,
  SignTransactionsModals,
  IdleTimer
} from 'components';
import { apiTimeout, sampleAuthenticatedDomains } from 'config';
import { PageNotFound, Unlock } from 'pages';
import { routeNames } from 'routes';
import { routes } from 'routes';
import { EnvironmentsEnum } from 'types';

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
              walletConnectV2Options: {
                logger: 'debug'
              },
              walletAddress: 'https://devnet2-wallet.multiversx.com',
              apiAddress: 'https://devnet2-api.multiversx.com',
              explorerAddress: 'http://devnet2-explorer.multiversx.com'
            }}
            dappConfig={{ shouldUseWebViewProvider: true }}
          >
            <IdleTimer />
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
