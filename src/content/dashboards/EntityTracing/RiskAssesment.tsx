import { InfoOutlined, Padding } from '@mui/icons-material';
import {
  Avatar,
  Button,
  Card,
  CardHeader,
  Divider,
  Grid,
  List,
  ListItem,
  TextField,
  Typography,
  styled
} from '@mui/material';
import React from 'react';
import { useState } from 'react';
import Label from 'src/components/Label';

// const AvatarWrapperError = styled(Avatar)(
//   ({ theme }) => `
//       background-color: ${theme.colors.error.lighter};
//       color:  ${theme.colors.error.main};
// `
// );

// const AvatarWrapperSuccess = styled(Avatar)(
//   ({ theme }) => `
//       background-color: ${theme.colors.success.lighter};
//       color:  ${theme.colors.success.main};
// `
// );

// const AvatarWrapperWarning = styled(Avatar)(
//   ({ theme }) => `
//       background-color: ${theme.colors.warning.lighter};
//       color:  ${theme.colors.warning.main};
// `
// );

function RiskAssesment() {
  const [checked, setChecked] = useState(['phone_verification']);

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

  const LabelWrapper = styled('span')(
    ({ theme }) => `
        background-color: ${theme.colors.alpha.black[5]};
        padding: ${theme.spacing(0.5, 1)};
        font-size: ${theme.typography.pxToRem(13)};
        border-radius: ${theme.general.borderRadius};
        display: inline-flex;
        align-items: center;
        justify-content: center;
        max-height: ${theme.spacing(3)};
        
        &.MuiLabel {
          &-primary {
            background-color: ${theme.colors.primary.lighter};
            color: ${theme.palette.primary.main}
          }
  
          &-grey {
            background-color: ${theme.colors.alpha.black[100]};
            color: ${theme.colors.alpha.white[100]};
          }
          
          &-green {
            background-color: ${theme.colors.secondary.lighter};
            color: ${theme.palette.secondary.main}
          }
          
          &-blue {
            background-color: ${theme.colors.success.lighter};
            color: ${theme.palette.success.main}
          }
          
          &-yellow {
            background-color: ${theme.colors.warning.lighter};
            color: ${theme.palette.warning.main}
          }
                
          &-error {
            background-color: ${theme.colors.error.lighter};
            color: ${theme.palette.error.main}
          }
          
          &-info {
            background-color: ${theme.colors.info.lighter};
            color: ${theme.palette.info.main}
          }
        }
  `
  );

  return (
    <Card sx={{backgroundColor:'#FFF'}}>
      <Typography variant="h5" sx={{color:'#FFF', backgroundColor:'#0a5a99',padding:'15px', fontSize:'12px'}}>RISK ASSESMENT</Typography>
      
      <Divider />
      <List disablePadding>
        <ListItem
          sx={{
            py: 2
          }}
        >
          <Grid container spacing={2}>
          <Grid item xs={12}>
                <Typography variant="h5" sx={{color:'#000000', marginTop:'-15px'}}>Officer</Typography>
                </Grid>
                
                <Grid
                  
                  item 
                  xs={12} 
                  marginTop='-15px' 
                  marginLeft='-10px'>
                    <TextField 
                    className='custom-textInput' 
                    defaultValue="Azfar Hakeem" 
                    fullWidth 
                    inputProps={{
                      style: {
                        height: "10px",
                      },
                    }}
                    sx={{ padding: '10px', marginBottom:'-10px'}}
                    />
                </Grid>
              
                <Grid item xs={12}>
                <Typography variant="h5" sx={{color:'#000000'}}>Issue Reports</Typography>
                </Grid>
                
                <Grid item xs={12} marginTop='-15px' marginLeft='-10px'>
                    <TextField 
                    defaultValue="HIGH VALUE TRANSACTION" 
                    fullWidth 
                    inputProps={{
                      style: {
                        height: "10px",
                      },
                    }}
                    sx={{ padding: '10px', marginBottom:'-10px'}}
                    />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="h5" sx={{ color: '#000000' }}>Risk</Typography>
                  <InfoOutlined sx={{ fontSize: '20px', marginLeft: '5px', color:'#808080' }} />
                </Grid>
                <Button 
                  variant="outlined" 
                  sx={{
                    marginLeft:'15px',
                    marginTop:'15px', 
                    fontSize:'12px', 
                    padding:'5px', 
                    height:'30px', 
                    borderRadius:'5px', 
                    color:'#9e9e9e', 
                    backgroundColor:'#ececec', 
                    borderColor:'#9e9e9e',
                    '&:hover': {
                      backgroundColor: '#ececec',
                      borderColor: '#9e9e9e' },
                    }}
                    >Notify</Button>
                <Button 
                  variant="outlined" 
                  sx={{
                    marginLeft:'15px',
                    marginTop:'15px', 
                    fontSize:'12px', 
                    padding:'5px', 
                    height:'30px', 
                    borderRadius:'5px', 
                    color:'#66d6a6', 
                    backgroundColor:'#e0f7ed', 
                    borderColor:'#66d6a6',
                    '&:hover': {
                      backgroundColor: '#e0f7ed',
                      borderColor: '#66d6a6' },
                    
                    }}
                    >Good</Button>
                <Button 
                  variant="outlined" 
                  sx={{
                    marginLeft:'15px',
                    marginTop:'15px', 
                    fontSize:'12px', 
                    padding:'5px', 
                    height:'30px', 
                    borderRadius:'5px', 
                    color:'#536dfe', 
                    backgroundColor:'#d8dcfc', 
                    borderColor:'#536dfe',
                    '&:hover': {
                      backgroundColor: '#d8dcfc',
                      borderColor: '#536dfe' },
                    }}
                    >Monitor</Button>
                <Button 
                  variant="outlined" 
                  sx={{
                    marginLeft:'15px',
                    marginTop:'15px', 
                    fontSize:'12px', 
                    padding:'5px', 
                    height:'30px', 
                    borderRadius:'5px', 
                    color:'#ffc107', 
                    backgroundColor:'#ffedda', 
                    borderColor:'#ffc107',
                    '&:hover': {
                      backgroundColor: '#ffedda',
                      borderColor: '#ffc107' },
                    }}
                    >Minor</Button>
                <Button 
                  variant="outlined" 
                  sx={{
                    marginLeft:'15px',
                    marginTop:'15px', 
                    fontSize:'12px', 
                    padding:'5px', 
                    height:'30px', 
                    borderRadius:'5px', 
                    color:'#ff5252', 
                    backgroundColor:'#ffdada', 
                    borderColor:'#ff5252',
                    '&:hover': {
                      backgroundColor: '#ffdada',
                      borderColor: '#ff5252' },
                    }}
                    >Critical</Button>
                <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h5" sx={{ color: '#000000' }}>Analysis</Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
                <TextField 
                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in accumsan turpis, eget pellentesque dolor. Nulla non urna ut orci euismod elementum sit amet eget dui. Integer faucibus semper metus, eu fringilla augue hendrerit in. Vestibulum vel dolor sapien. Donec dignissim, metus nec dignissim volutpat, arcu massa placerat tellus, pulvinar sollicitudin ligula orci eu purus. Fusce lacinia risus quis tempus commodo. " 
                    fullWidth 
                    multiline
                    rows={3}
                    inputProps={{
                      style: {
                        height:'200px',
                        // backgroundColor: '#ececec',
                        // borderRadius: '10px',
                        // margin:'-10px'
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        backgroundColor: '#ececec',
                      }
                    }}
                    sx={{ padding: '10px', marginBottom: '-10px'}}
                  />

                </Grid>

                
                {/* <Grid item xs={12} marginTop='-15px' marginLeft='-10px'>
                    <TextField 
                    defaultValue="HIGH VALUE TRANSACTION" 
                    fullWidth 
                    inputProps={{
                      style: {
                        height: "10px",
                      },
                    }}
                    sx={{ padding: '10px', marginBottom:'-10px'}}
                    />
                </Grid> */}
          </Grid>
        </ListItem>
        
        {/* <Divider /> */}
        <ListItem
          sx={{
            py: 10
          }}
        >
          {/* <FinancialReport/> */}
        </ListItem>

        
        {/* <Divider /> */}
        {/* <ListItem
          sx={{
            py: 34
          }}
        >
          <Entity/>
        </ListItem> */}
      </List>
    </Card>
  );
}

export default RiskAssesment;
