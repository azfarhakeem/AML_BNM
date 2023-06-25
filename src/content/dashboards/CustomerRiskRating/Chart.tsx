import {
    Avatar,
    Card,
    CardHeader,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Switch,
    styled,
    useTheme
} from '@mui/material';
import { useState } from 'react';
// import { ApexOptions } from 'apexcharts';
import type { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts';


const AvatarWrapperError = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.error.lighter};
      color:  ${theme.colors.error.main};
`
);

const AvatarWrapperSuccess = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.lighter};
      color:  ${theme.colors.success.main};
`
);

const AvatarWrapperWarning = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.warning.lighter};
      color:  ${theme.colors.warning.main};
`
);

function ChartX() {
  const [checked, setChecked] = useState(['phone_verification']);

  const theme = useTheme();

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const chartOptions: ApexOptions = {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      pie: {
        donut: {
            labels: {
                show: true,
                name: {
                  show: true,
                  offsetY: -15,
                  formatter: function () {
                    return 'Total: 100';
                  }
                }
              },
          size: '60%'
        }
      }
    },
    colors: ['#ff9900', '#1c81c2', '#333', '#5c6ac0'],
    dataLabels: {
      enabled: true,
      formatter: (val: number) => {
        return val;
      },
      style: {
        colors: [theme.colors.alpha.trueWhite[100]]
      },
      background: {
        enabled: true,
        foreColor: theme.colors.alpha.trueWhite[100],
        padding: 8,
        borderRadius: 4,
        borderWidth: 0,
        opacity: 0.3,
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 1,
          color: theme.colors.alpha.black[70],
          opacity: 0.5
        }
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 1,
        color: theme.colors.alpha.black[50],
        opacity: 0.5
      }
    },
    fill: {
      opacity: 1
    },
    labels: ['Bitcoin', 'Ripple', 'Cardano', 'Ethereum'],
    legend: {
      labels: {
        colors: theme.colors.alpha.trueWhite[100]
      },
      show: false
    },
    stroke: {
      width: 0
    },
    theme: {
      mode: theme.palette.mode
    }
  };

  const chartSeries = [10, 20, 25, 45];

  return (
    <Card>
      <CardHeader title="Chart" />
      <Divider />
      <List disablePadding>
        
        {/* <Divider /> */}
        <ListItem
          sx={{
            py: 0
          }}
        >
          <Grid
                xs={12}
                sm={12}
                item
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Chart
                  height={250}
                  width={250}
                  options={chartOptions}
                  series={chartSeries}
                  type="donut"
                />
              </Grid>
        </ListItem>
        {/* <Divider /> */}
        {/* <ListItem
          sx={{
            py: 2
          }}
        >
          <ListItemAvatar>
            <AvatarWrapperWarning>
              <EmailTwoToneIcon />
            </AvatarWrapperWarning>
          </ListItemAvatar>
          <ListItemText
            primary={<Text color="black">Recovery Email</Text>}
            primaryTypographyProps={{
              variant: 'body1',
              fontWeight: 'bold',
              color: 'textPrimary',
              gutterBottom: true,
              noWrap: true
            }}
            secondary={<Text color="warning">Not completed</Text>}
            secondaryTypographyProps={{ variant: 'body2', noWrap: true }}
          />
          <Switch
            edge="end"
            color="primary"
            onChange={handleToggle('recovery_email')}
            checked={checked.indexOf('recovery_email') !== -1}
          />
        </ListItem> */}
        
      </List>
    </Card>
  );
}

export default ChartX;
