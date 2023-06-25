import { Helmet } from 'react-helmet-async';
import { Container, Grid } from '@mui/material';

import AccountBalance from './AccountBalance';
import Wallets from './Wallets';
import AccountSecurity from './AccountSecurity';
import WatchList from './WatchList';
import Overview from './Overview';
import Revenue from './Revenue';
import Transactions from './Transactions';
import MonthlyVolume from './RiskAssesment';
import TransactionsList from './TransactionsList';
import React from 'react';
import RiskAssesment from './RiskAssesment';
import IndividualDetail from './IndividualDetailComponents/IndividualDetail';

function DashboardCrypto() {
  return (
    <>
      <Helmet>
        <title>Crypto Dashboard</title>
      </Helmet>
      {/* <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper> */}
      <Container maxWidth="xl">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={2}
        >
          <Grid item lg={3} xs={12}>
            <IndividualDetail />
          </Grid>
          <Grid item lg={6} xs={12}>
            <Grid container spacing={1}>
            {/* <Grid item xs={12}>
                <Overview />
              </Grid> */}
              <Grid item xs={12}>
                <Revenue />
              </Grid>
              {/* <Grid item xs={12}>
                <TransactionsList />
              </Grid> */}
              {/* <Grid item xs={12}>
                <AccountBalance />
              </Grid>
              <Grid item xs={12}>
                <Wallets />
              </Grid>
              <Grid item xs={12}>
                <WatchList />
              </Grid> */}
            </Grid>
          </Grid>
          <Grid item lg={3} xs={12}>
            <RiskAssesment />
          </Grid>
        </Grid>
      </Container>

      {/* <Footer /> */}
    </>
  );
}

export default DashboardCrypto;
