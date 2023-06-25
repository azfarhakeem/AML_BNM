import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Footer from 'src/components/Footer';

import AccountBalance from './AccountBalance';
import Wallets from './Wallets';
import AccountSecurity from './AccountSecurity';
import WatchList from './WatchList';
import Overview from './Overview';
import Revenue from './Revenue';
import Transactions from './Transactions';
import MonthlyVolume from './MonthlyVolume';
import TransactionsList from './TransactionsList';

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
          
          <Grid item lg={9} xs={12}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <Overview />
              </Grid>
              <Grid item xs={12}>
                <Revenue />
              </Grid>
              <Grid item xs={12}>
                <TransactionsList />
              </Grid>
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
            <MonthlyVolume />
          </Grid>
        </Grid>
</Container>

      {/* <Footer /> */}
    </>
  );
}

export default DashboardCrypto;
