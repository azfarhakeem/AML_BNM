import {
    Button,
    Card,
    Box,
    Grid,
    Typography,
    useTheme,
    styled,
    Avatar,
    Divider,
    alpha,
    ListItem,
    ListItemText,
    List,
    ListItemAvatar,
    Container
  } from '@mui/material';
  import TrendingUp from '@mui/icons-material/TrendingUp';
  import Text from 'src/components/Text';
  import Chart from 'react-apexcharts';
  import type { ApexOptions } from 'apexcharts';
import { ArrowDropDown, North, South, SquareRounded } from '@mui/icons-material';
import TransactionsList from './TransactionsList';
  
  const AvatarSuccess = styled(Avatar)(
    ({ theme }) => `
        background-color: ${theme.colors.success.main};
        color: ${theme.palette.success.contrastText};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
        box-shadow: ${theme.colors.shadows.success};
  `
  );
  
  const ListItemAvatarWrapper = styled(ListItemAvatar)(
    ({ theme }) => `
    min-width: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.spacing(1)};
    padding: ${theme.spacing(0.5)};
    border-radius: 60px;
    background: ${
      theme.palette.mode === 'dark'
        ? theme.colors.alpha.trueWhite[30]
        : alpha(theme.colors.alpha.black[100], 0.07)
    };
  
    img {
      background: ${theme.colors.alpha.trueWhite[100]};
      padding: ${theme.spacing(0.5)};
      display: block;
      border-radius: inherit;
      height: ${theme.spacing(4.5)};
      width: ${theme.spacing(4.5)};
    }
  `
  );
  
  function Transactions() {
    const theme = useTheme();
  
    
  
    return (
      <Card 
    //   sx={{boxShadow:'none'}}
      
      >
        <Grid spacing={0} container>
          <Grid item xs={12} md={12}>
            <Box p={1}>
              
              <Container maxWidth="lg">
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="stretch"
                  spacing={3}
                >
                  <Grid item xs={12}>
                    <TransactionsList />
                  </Grid>
                </Grid>
              </Container>
              
              
              
              
            </Box>
          </Grid>
          
        </Grid>
      </Card>
    );
  }
  
  export default Transactions;
  