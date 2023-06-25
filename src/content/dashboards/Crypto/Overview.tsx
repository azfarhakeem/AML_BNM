import {
    Button,
    Card,
    Grid,
    Box,
    CardContent,
    Typography,
    Avatar,
    alpha,
    Tooltip,
    CardActionArea,
    styled,
    colors
  } from '@mui/material';
  import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { ArrowUpward, North, South } from '@mui/icons-material';
  
  const AvatarWrapper = styled(Avatar)(
    ({ theme }) => `
      margin: ${theme.spacing(2, 0, 1, -0.5)};
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: ${theme.spacing(1)};
      padding: ${theme.spacing(0.5)};
      border-radius: 60px;
      height: ${theme.spacing(5.5)};
      width: ${theme.spacing(5.5)};
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
  
  const AvatarAddWrapper = styled(Avatar)(
    ({ theme }) => `
          background: ${theme.colors.alpha.black[10]};
          color: ${theme.colors.primary.main};
          width: ${theme.spacing(8)};
          height: ${theme.spacing(8)};
  `
  );
  
  const CardAddAction = styled(Card)(
    ({ theme }) => `
          border: ${theme.colors.primary.main} dashed 1px;
          height: 100%;
          color: ${theme.colors.primary.main};
          transition: ${theme.transitions.create(['all'])};
          
          .MuiCardActionArea-root {
            height: 100%;
            justify-content: center;
            align-items: center;
            display: flex;
          }
          
          .MuiTouchRipple-root {
            opacity: .2;
          }
          
          &:hover {
            border-color: ${theme.colors.alpha.black[70]};
          }
  `
  );
  
  function Overview() {
    return (
      <>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            pb: 3,
            
          }}
        >
          <Typography variant="h3">Overview</Typography>
          <Button
            size="small"
            variant="outlined"
            startIcon={<AddTwoToneIcon fontSize="small" />}
          >
            New Payment
          </Button>
        </Box>
        <Grid container spacing={3}>
          <Grid xs={12} sm={6} md={3} item>
            <Card
              sx={{
                px: 1,
                border: '1px solid rgba(0, 0, 0, 0.3)', 
                boxShadow: 'none'
              }}
            >
              <CardContent>
                
                <Typography variant="h5" noWrap>
                  Aprroved Transaction
                </Typography>
                {/* <Typography variant="subtitle1" noWrap>
                  BTC
                </Typography> */}
                <Box
                  sx={{
                    pt: 3
                  }}
                >
                <Typography>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h3" gutterBottom noWrap>
                    1748
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom noWrap style={{ marginLeft: '10px', color: '#00D100'}}>
                    <North sx={{paddingTop: '9px'}}/>3.54%
                    </Typography>
                </div>
                </Typography>

                  
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={3} item>
          <Card
              sx={{
                px: 1,
                border: '1px solid rgba(0, 0, 0, 0.3)', 
                boxShadow: 'none'
              }}
            >
              <CardContent>
                
                <Typography variant="h5" noWrap>
                  Declined Transaction
                </Typography>
                {/* <Typography variant="subtitle1" noWrap>
                  BTC
                </Typography> */}
                <Box
                  sx={{
                    pt: 3
                  }}
                >
                <Typography>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h3" gutterBottom noWrap>
                    224
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom noWrap style={{ marginLeft: '10px', color: '#00D100'}}>
                    <North sx={{paddingTop: '9px'}}/>1.23%
                    </Typography>
                </div>
                </Typography>

                  
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={3} item>
          <Card
              sx={{
                px: 1,
                border: '1px solid rgba(0, 0, 0, 0.3)', 
                boxShadow: 'none'
              }}
            >
              <CardContent>
                
                <Typography variant="h5" noWrap>
                  Refunded Transaction
                </Typography>
                {/* <Typography variant="subtitle1" noWrap>
                  BTC
                </Typography> */}
                <Box
                  sx={{
                    pt: 3
                  }}
                >
                <Typography>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h3" gutterBottom noWrap>
                    87
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom noWrap style={{ marginLeft: '10px', color: '#FF0000'}}>
                    <South sx={{paddingTop: '9px'}}/>3.54%
                    </Typography>
                </div>
                </Typography>

                  
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={3} item>
            <Card
                sx={{
                    px: 1,
                    border: '1px solid rgba(0, 0, 0, 0.3)', 
                    boxShadow: 'none'
                }}
                >
                <CardContent>
                    
                    <Typography variant="h5" noWrap>
                    Aprroved Transaction
                    </Typography>
                    {/* <Typography variant="subtitle1" noWrap>
                    BTC
                    </Typography> */}
                    <Box
                    sx={{
                        pt: 3
                    }}
                    >
                    <Typography>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h3" gutterBottom noWrap>
                        344
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom noWrap style={{ marginLeft: '10px', color: '#FF0000'}}>
                        <South sx={{paddingTop: '9px'}}/>3.54%
                        </Typography>
                    </div>
                    </Typography>

                    
                    </Box>
                </CardContent>
                </Card>
          </Grid>
        </Grid>
      </>
    );
  }
  
  export default Overview;
  