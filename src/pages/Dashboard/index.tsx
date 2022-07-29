import * as React from 'react';
import Actions from './Actions';
import MultipleTx from './MultipleTx';
import SignMessage from './SignMessage';
import SingleTx from './SingleTx';
import TopInfo from './TopInfo';
import Transactions from './Transactions';

const Dashboard = () => {
  return (
    <div className='container py-4'>
      <div className='row'>
        <div className='col-12 col-md-10 mx-auto'>
          <div className='card shadow-sm rounded border-0'>
            <div className='card-body p-1'>
              <div className='card rounded border-0 bg-primary'>
                <div className='card-body text-center p-4'>
                  <TopInfo />
                  <div className='d-flex align-items-center justify-content-center'>
                    <SingleTx />
                    <MultipleTx />
                    <SignMessage />
                    <Actions />
                  </div>
                </div>
              </div>
              <Transactions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
