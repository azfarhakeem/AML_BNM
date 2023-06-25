import {
  Avatar,
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  Typography,
  styled
} from '@mui/material';
import { useState } from 'react';

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

function MonthlyVolume() {
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
    <Card sx={{backgroundColor:'#f7f6f9'}}>
      <CardHeader sx={{color:'#000000'}} title="Monthly Volume" />
      <div style={{ display: 'flex', alignItems: 'center', marginBottom:'5px' }}>
                    <Typography variant="subtitle1" gutterBottom noWrap style={{ marginLeft: '15px', color:'#000000'}}>
                    Total
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom noWrap style={{ marginLeft: '35px', color:'#000000'}}>
                    Transaction
                    </Typography>
                    <Typography fontWeight="bold" variant="subtitle1" gutterBottom noWrap style={{ marginLeft: '35px', color:'#000000'}}>
                    Day Sale
                    </Typography>
                </div>
      <Divider />
      <List disablePadding>
        <ListItem
          sx={{
            py: 20
          }}
        >
          {/* <ListItemAvatar>
            <AvatarWrapperError>
              <LockTwoToneIcon />
            </AvatarWrapperError>
          </ListItemAvatar>
          <ListItemText
            primary={<Text color="black">2FA Authentication</Text>}
            primaryTypographyProps={{
              variant: 'body1',
              fontWeight: 'bold',
              color: 'textPrimary',
              gutterBottom: true,
              noWrap: true
            }}
            secondary={<Text color="error">Disabled</Text>}
            secondaryTypographyProps={{ variant: 'body2', noWrap: true }}
          />
          <Switch
            edge="end"
            color="primary"
            onChange={handleToggle('2fa')}
            checked={checked.indexOf('2fa') !== -1}
          /> */}
        </ListItem>
        
        <Divider />
        <ListItem
          sx={{
            py: 17
          }}
        >
          {/* <ListItemAvatar>
            <AvatarWrapperSuccess>
              <PhoneLockedTwoToneIcon />
            </AvatarWrapperSuccess>
          </ListItemAvatar>
          <ListItemText
            primary={<Text color="black">Phone Verification</Text>}
            primaryTypographyProps={{
              variant: 'body1',
              fontWeight: 'bold',
              color: 'textPrimary',
              gutterBottom: true,
              noWrap: true
            }}
            secondary={<Text color="success">Active</Text>}
            secondaryTypographyProps={{ variant: 'body2', noWrap: true }}
          />
          <Switch
            edge="end"
            color="primary"
            onChange={handleToggle('phone_verification')}
            checked={checked.indexOf('phone_verification') !== -1}
          /> */}
        </ListItem>

        
        <Divider />
        <ListItem
          sx={{
            py: 3
          }}
        >
          {/* <ListItemAvatar>
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
          /> */}
        </ListItem>
      </List>
    </Card>
  );
}

export default MonthlyVolume;
