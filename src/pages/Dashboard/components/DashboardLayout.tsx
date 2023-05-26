import React from 'react';
import styles from './../dashboard.module.scss';
import { Actions } from './Actions';
import { BalanceTx } from './BalanceTx';
import { MultipleTx } from './MultipleTx';
import { SignMessage } from './SignMessage';
import { SingleTx } from './SingleTx';
import { TopInfo } from './TopInfo';
import { WalletConnectPing } from './WalletConnectPing';

export const DashboardLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className='container py-4'>
      <div className='row'>
        <div className='col-12 col-md-10 mx-auto'>
          <div className='card shadow-sm border-0'>
            <div className='card-body p-1'>
              <div className='card border-0 bg-primary'>
                <div className='card-body text-center p-4'>
                  <TopInfo />
                  <div className='d-flex align-items-center justify-content-center'>
                    <BalanceTx />
                    <SingleTx />
                    <MultipleTx />
                    <SignMessage />
                    <WalletConnectPing />
                    <Actions />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.transactions}>{children}</div>
        </div>
      </div>
    </div>
  );
};
