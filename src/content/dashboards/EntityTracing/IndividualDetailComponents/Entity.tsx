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
import { Circle, ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
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

function Entity() {
  const [checked, setChecked] = useState(['phone_verification']);
  const [firstOpen, setFirstOpen] = useState(false);



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
      <Circle sx={{color:'#66d6a6'}}/>
      &nbsp;&nbsp;&nbsp;
      <ListItemText primary="NurHaqiem" />
    </ListItemButton>
    <ListItemButton>
    <Circle sx={{color:'#66d6a6'}}/>
      &nbsp;&nbsp;&nbsp;
      <ListItemText primary="Al Sadd Investment Pte. Ltd." />
    </ListItemButton>
    <ListItemButton>
    <Circle sx={{color:'#66d6a6'}}/>
      &nbsp;&nbsp;&nbsp;
      <ListItemText primary="Crescent Energy Limited" />
    </ListItemButton>
    <ListItemButton>
    <Circle sx={{color:'#ffc108'}}/>
      &nbsp;&nbsp;&nbsp;
      <ListItemText primary="Utara Capital Limited" />
    </ListItemButton>
    <ListItemButton>
    <Circle sx={{color:'#fe5252'}}/>
      &nbsp;&nbsp;&nbsp;
      <ListItemText primary="Kenanga Investment" />
    </ListItemButton>
    
    
    
    
  </List>
    </Card>
  );
}

export default Entity;
