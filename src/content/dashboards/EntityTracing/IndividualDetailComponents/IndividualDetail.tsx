import {
    Avatar,
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
import FinancialReport from './FinancialReport';
import Entity from './Entity';
  
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
  
  function IndividualDetail() {
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
  
    return (
      <Card sx={{backgroundColor:'#FFF'}}>
        <Typography variant="h5" sx={{color:'#FFF', backgroundColor:'#0a5a99',padding:'15px', fontSize:'12px'}}>INDIVIDUAL DETAILS</Typography>

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
                    defaultValue="Tengku Amir Bin Tengku Mohamad" 
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
                <Typography variant="h5" sx={{color:'#000000'}}>Linked Countries</Typography>
                </Grid>
                
                <Grid item xs={12} marginTop='-15px' marginLeft='-10px'>
                    <TextField 
                    defaultValue="Malaysia" 
                    fullWidth 
                    inputProps={{
                      style: {
                        height: "10px",
                      },
                    }}
                    sx={{ padding: '10px', marginBottom:'-10px'}}
                    />
                </Grid>
            </Grid>
          </ListItem>
          
          {/* <Divider /> */}
          <ListItem
            sx={{
              py: 0
            }}
          >
            <FinancialReport/>
          </ListItem>
  
          
          <Divider />
          <ListItem
            sx={{
              py: 1
            }}
          >
            <Entity/>
          </ListItem>
        </List>
      </Card>
    );
  }
  
  export default IndividualDetail;
  