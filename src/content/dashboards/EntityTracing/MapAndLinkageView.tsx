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
    CardMedia
  } from '@mui/material';
  import TrendingUp from '@mui/icons-material/TrendingUp';
  import Text from 'src/components/Text';
  import Chart from 'react-apexcharts';
  import type { ApexOptions } from 'apexcharts';
import { ArrowDropDown, North, South, SquareRounded } from '@mui/icons-material';
import { useState } from 'react';
  
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
  
  function MapAndLinkageView() {
    const [mode, setMode] = useState('chart');

    const handleButtonClick = () => {
      setMode(prevMode => (prevMode === 'chart' ? 'map' : 'chart'));
    };
    const theme = useTheme();
  
    const chartOptions: ApexOptions = {
        chart: {
          height: 280,
          type: "area",
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        series: [
          {
            name: "Bitcoin Price",
            data: [50000, 66000, 80000, 50000, 60000, 66000, 75000, 73000, 80000, 90000, 85000, 76000]
          }
        ],
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100]
          }
        },
        xaxis: {
          categories: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ]
        },
        yaxis: {
          labels: {
            formatter: (value: number) => {
              const formattedValue = (value / 1000) * 1000;
              return formattedValue.toLocaleString('en-US');
            }
          }
        }
      };
      
      const chart1Data = [
        {
          name: 'Bitcoin Price',
          data: [50000, 66000, 80000, 50000, 60000, 66000, 75000, 73000, 80000, 90000, 85000, 76000]
        }
      ];
      
  
    const chartSeries = [10, 20, 25, 45];
  
    return (
      <Card 
      // sx={{boxShadow:'none'}}
      
      >
        <Grid spacing={0} container>
          <Grid item xs={12} md={12}>
            <Box p={1}>
              <Typography
                sx={{
                  pb: 1
                }}
                variant="h4"
              >
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h4">Azfar Hakeem</Typography>
                    <div>
                      <Button onClick={handleButtonClick}>{mode === 'chart' ? 'Map View' : 'Chart View'}</Button>
                    </div>
                  </div>
              </Typography>
              
              <Box>
              <Grid container 
                sx={{
                  pb: 1
                }}>
                

                </Grid>
                
              </Box>
              
              <Grid container spacing={3} >
                <Grid xs={12} sm={6} md={12} item>
                  <Card sx={{
                          px: 1,
                          boxShadow: 'none'
                      }}>
                        {mode === 'chart' && <CardMedia
                            component="img"
                            alt="Image"
                            height="auto"
                            image="/static/images/avatars/amlLinkage.jpg"
                          />}
                          {mode === 'map' && <CardMedia
                            component="img"
                            alt="Image"
                            height="auto"
                            image="/static/images/avatars/map.jpg"
                          />}
                  
                  </Card>
                </Grid>
              </Grid>
              
              
            </Box>
          </Grid>
          
        </Grid>
      </Card>
    );
  }
  
  export default MapAndLinkageView;
  