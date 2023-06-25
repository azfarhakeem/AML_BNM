import { ArrowDropDown, North, SquareRounded } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  ListItemAvatar,
  Typography,
  alpha,
  styled,
  useTheme
} from '@mui/material';
import type { ApexOptions } from 'apexcharts';
import React from 'react';
import Chart from 'react-apexcharts';
  
  // const AvatarSuccess = styled(Avatar)(
  //   ({ theme }) => `
  //       background-color: ${theme.colors.success.main};
  //       color: ${theme.palette.success.contrastText};
  //       width: ${theme.spacing(8)};
  //       height: ${theme.spacing(8)};
  //       box-shadow: ${theme.colors.shadows.success};
  // `
  // );
  
  // const ListItemAvatarWrapper = styled(ListItemAvatar)(
  //   ({ theme }) => `
  //   min-width: 0;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   margin-right: ${theme.spacing(1)};
  //   padding: ${theme.spacing(0.5)};
  //   border-radius: 60px;
  //   background: ${
  //     theme.palette.mode === 'dark'
  //       ? theme.colors.alpha.trueWhite[30]
  //       : alpha(theme.colors.alpha.black[100], 0.07)
  //   };
  
  //   img {
  //     background: ${theme.colors.alpha.trueWhite[100]};
  //     padding: ${theme.spacing(0.5)};
  //     display: block;
  //     border-radius: inherit;
  //     height: ${theme.spacing(4.5)};
  //     width: ${theme.spacing(4.5)};
  //   }
  // `
  // );
  
  function Revenue() {
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
      sx={{boxShadow:'none'}}
      
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
                Revenue
              </Typography>
              <Box>
              <Grid container 
                sx={{
                  pb: 1
                }}>
                <Grid item xs={12} md={3}>
                    <Typography
                    variant="h5"
                    color="text.secondary"
                    style={{ display: 'flex', alignItems: 'center' }}
                    >
                    <SquareRounded sx={{ color: '#0000FF' }} style={{ marginRight: '8px' }} />
                    Gross Volume
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography
                    variant="h5"
                    color="text.secondary"
                    style={{ display: 'flex', alignItems: 'center' }}
                    >
                    <SquareRounded sx={{ color: '#808080' }} style={{ marginRight: '8px' }} />
                    Net Volume
                    </Typography>
                </Grid>
               </Grid>

               <Grid container 
                sx={{
                  pb: 1
                }}>
                <Grid item xs={12} md={3}>
               <Typography>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h3" gutterBottom noWrap>
                        RM35,678
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom noWrap style={{ marginLeft: '10px', color: '#00D100'}}>
                        <North sx={{paddingTop: '9px'}}/>3.54%
                        </Typography>
                        <Typography variant="body1" gutterBottom noWrap style={{ marginLeft: '10px', marginTop:'5px' ,color: '#808080'}}>
                        last year
                        </Typography>
                    </div>
                </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
               <Typography>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h3" gutterBottom noWrap>
                        RM29,540
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom noWrap style={{ marginLeft: '10px', color: '#00D100'}}>
                        <North sx={{paddingTop: '9px'}}/>3.54%
                        </Typography>
                        <Typography variant="body1" gutterBottom noWrap style={{ marginLeft: '10px', marginTop:'5px' ,color: '#808080'}}>
                        last year
                        </Typography>
                    </div>
                </Typography>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Button sx={{padding: '1px', backgroundColor:'#C5C5C5', paddingX:'50px', borderRadius:'4px'}}>
                        <Typography color='#000000' >
                            This year
                        </Typography>
                        <ArrowDropDown sx={{color:'#000000'}}/>

                    </Button>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Button sx={{padding: '1px', backgroundColor:'#C5C5C5', paddingX:'50px', borderRadius:'4px'}}>
                        <Typography color='#000000' >
                            Decline
                        </Typography>
                        <ArrowDropDown sx={{color:'#000000'}}/>

                    </Button>
                </Grid>

                </Grid>
                
              </Box>
              {/* <Box> */}
              {/* <Chart
                options={chartOptions}
                series={chart1Data}
                type="area"
                height={200}
                style={{ marginLeft: '20px' }}
              /> */}
              {/* <Card sx={{
                px: 1
              }}>
              <Chart
                    options={chartOptions}
                    series={chart1Data}
                    type="area"
                    height={200}
                    width='80%'
                />
                </Card>
              </Box> */}
              <Grid container spacing={3} >
                <Grid xs={12} sm={6} md={12} item>
                <Card sx={{
                        px: 1,
                        boxShadow: 'none'
                    }}>
                
                <Chart
                    options={chartOptions}
                    series={chart1Data}
                    type="area"
                    height={250}
                    width='100%'
                />
                
                
                </Card>
                </Grid>
              </Grid>
              
              
            </Box>
          </Grid>
          
        </Grid>
      </Card>
    );
  }
  
  export default Revenue;
  