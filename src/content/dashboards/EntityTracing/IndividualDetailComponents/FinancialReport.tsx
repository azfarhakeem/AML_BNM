import {
    Avatar,
    Card,
    CardHeader,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    TextField,
    Typography,
    styled
  } from '@mui/material';
  import React from 'react';
  import { useState } from 'react';
  import SendIcon from '@mui/icons-material/Send';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';



  
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
  
  function FinancialReport() {
    const [checked, setChecked] = useState(['phone_verification']);
    const [firstOpen, setFirstOpen] = useState(false);
    const [secondOpen, setSecondOpen] = useState(false);



  
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
    const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleFirstClick = () => {
    setFirstOpen(!firstOpen);
  };
  const handleSecondClick = () => {
    setSecondOpen(!secondOpen);
  };
  
    return (
        <Card sx={{ 
            backgroundColor: '#FFF'
            , boxShadow: '0px 9px 16px rgba(159, 162, 191, .5)' ,
            width: '100%'
            }}>

        <Typography variant="h5" sx={{color:'#FFF', backgroundColor:'#0a5a99',padding:'15px', fontSize:'12px'}}>FINANCIAL REPORTS</Typography>
        
        <Divider />
        {/* <List disablePadding> */}
        {/* <ListItemButton>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Sent mail" />
            </ListItemButton>
       <ListItemButton>
           */}
           {/* </List> */}
           <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      // subheader={
      //   <ListSubheader component="div" id="nested-list-subheader">
      //     Nested List Items
      //   </ListSubheader>
      // }
    >
      <ListItemButton>
        <ListItemText primary="Maybank" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Maxis Communications" />
      </ListItemButton>
      
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="AMBANK GROUP" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={handleFirstClick}>
            <ListItemText primary="2023" />
            {firstOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={firstOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 6 }}>
                <ListItemText primary="Audit_Report Q1" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 6 }}>
                <ListItemText primary="Audit_Report Q2" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton sx={{ pl: 4 }} onClick={handleSecondClick}>
            <ListItemText primary="2022" />
            {secondOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={secondOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 6 }}>
                <ListItemText primary="Audit_Report Q1" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 6 }}>
                <ListItemText primary="Audit_Report Q2" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Collapse>
      
      
    </List>
      </Card>
    );
  }
  
  export default FinancialReport;
  