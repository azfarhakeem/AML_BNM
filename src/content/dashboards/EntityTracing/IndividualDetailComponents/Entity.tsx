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
  
  function Entity() {
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
        <Card sx={{ 
            backgroundColor: '#FFF'
            , boxShadow: '0px 9px 16px rgba(159, 162, 191, .5)' 
            }}>

        <Typography variant="h5" sx={{color:'#FFF', backgroundColor:'#0a5a99',padding:'15px', fontSize:'12px'}}>ENTITY</Typography>
        
        <Divider />
        <List disablePadding>
          <ListItem
            sx={{
              py: 4
            }}
          >
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <Typography variant="h4" sx={{color:'#000000'}}>Test</Typography>
                </Grid>
                
                <Grid item xs={12} marginTop='-15px' marginLeft='-10px'>
                    <TextField 
                    defaultValue="" 
                    fullWidth 
                    sx={{ padding: '10px'}}
                    />
                </Grid>
                
                <Grid item xs={12}>
                <Typography variant="h4" sx={{color:'#000000'}}>Test</Typography>
                </Grid>
                
                {/* <Grid item xs={12} marginTop='-15px' marginLeft='-10px'>
                    <TextField 
                    defaultValue="Malaysia" 
                    fullWidth 
                    sx={{ padding: '10px'}}
                    />
                </Grid> */}
            </Grid>
          </ListItem>
          
          
  
          
          
        </List>
      </Card>
    );
  }
  
  export default Entity;
  