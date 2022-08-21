import { Box, TextField, ThemeProvider, Button, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#550064',
    },
    secondary: {
      main: '#7966ce',
    },
  },
});

function MyProfile(props) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ textAlign: 'center' }}>
        <Box sx={{ width: '30vw', marginLeft: '35%', color: 'black', marginTop: '1%', height: '5vh' }}>
          <TextField
            id="name"
            margin="dense"
            label={props.nickName}
            color="secondary"
            variant="filled"
            fullWidth
            sx={{ backgroundColor: 'white', borderRadius: '0.3em' }}
            helperText="Please set a nickname to change"
          />
          <TextField
            sx={{ backgroundColor: 'white', borderRadius: '0.3em' }}
            color="secondary"
            label={props.email}
            name="email"
            margin="dense"
            fullWidth
            helperText="Please set a email to change"
          />
          <TextField
            sx={{ backgroundColor: 'white', borderRadius: '0.3em' }}
            color="secondary"
            label={props.wallet}
            name="password"
            margin="dense"
            fullWidth
            helperText="Please set a wallet address to change"
          />
          <Button variant="contained" color="secondary" sx={{ width: '70%', marginTop: '2%' }}>
            change
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default MyProfile;