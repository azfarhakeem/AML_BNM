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
import Chart from './Chart';
import RiskThresholds from './RiskThresholds';
import Score from './Score';
import PersonalDetail from './PersonalDetail';
import RiskFactors from './RiskFactors';
import Alert from './Alert';

function customerRiskRating() {
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
          
          <Grid item lg={12} xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item lg={3} xs={12}>
                    <Chart />
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <RiskThresholds />
                  </Grid>
                  <Grid item lg={3} xs={12}>
                    <Score />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item lg={3} xs={12}>
                    <PersonalDetail />
                  </Grid>
                  <Grid item lg={4.5} xs={12}>
                    <RiskFactors />
                  </Grid>
                  <Grid item lg={4.5} xs={12}>
                    <Alert />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}>
                
                <Overview />
              </Grid>
              <Grid item xs={12}>
                <Revenue />
              </Grid>
              <Grid item xs={12}>
                <TransactionsList />
              </Grid>
              <Grid item xs={12}>
                <AccountBalance />
              </Grid>
              <Grid item xs={12}>
                <Wallets />
              </Grid>
              <Grid item xs={12}>
                <WatchList />
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item lg={3} xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <AccountSecurity />
              </Grid>
              <Grid item xs={12}>
              <AccountSecurity />
              </Grid>
            </Grid>
            
          </Grid>
          <Grid item lg={3} xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <AccountSecurity />
              </Grid>
              <Grid item xs={12}>
              <AccountSecurity />
              </Grid>
            </Grid>
            
          </Grid>
          <Grid item lg={3} xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <AccountSecurity />
              </Grid>
              <Grid item xs={12}>
              <AccountSecurity />
              </Grid>
            </Grid>
            
          </Grid> */}
        </Grid>
</Container>

      {/* <Footer /> */}
    </>
  );
}

export default customerRiskRating;
