import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Grid, Stack, Box, TextField, Button, Typography } from '@mui/material'
import { Dashboard, Edit, Telegram } from '@mui/icons-material';
import CssBaseline from '@mui/material/CssBaseline';
//import Sidebar from './components/sidebar/Sidebar';
import Sidebar from './components/sidebar/Sidebar';
import DisGram from './pages/disGram/DisGram';
import FormField from './components/formField/FormField';
import './App.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    h5: {
      color: 'cyan'
    },
  }
});

function App() {


  return (
    <div className='App'>
      <Sidebar className="sideBar" />
      <DisGram className="disGram" />
    </div>
    //   <ThemeProvider theme={darkTheme}>
    //     <CssBaseline />
    //     <Box sx={{ width: '100%' }}>
    //       <hr></hr>
    //       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    //         <Grid item xs={12}>
    //           <Typography variant="h5" component="div" gutterBottom>
    //             DisGram Konfiguration
    //           </Typography>

    //         </Grid>
    //         <Grid item xs={6}>
    //           <Typography variant="h6" component="div" gutterBottom>
    //             Umgebungsvariablen
    //           </Typography>

    //         </Grid>
    //         <Grid item xs={6}>

    //         </Grid>
    //         <Grid item xs={6}>
    //           Config vars change the way your app behaves. In addition to creating your own, some add-ons come with their own.
    //         </Grid>
    //         <Grid item xs={5}>
    //           <Stack spacing={3} >
    //             <TextField id="outlined-basic" label="DISCORD_BOT_TOKEN" variant="outlined" />
    //             <TextField id="outlined-basic" label="DISCORD_CHANNEL_NAME" variant="outlined" />
    //             <TextField id="outlined-basic" label="TELEGRAM_BOT_TOKEN" variant="outlined" />

    //           </Stack>
    //         </Grid>
    //         <Grid item xs={6}>

    //         </Grid>
    //         <Grid item xs={5}>
    //           <Typography component="div" mt={3} gutterBottom>
    //             Telegram channel ids:
    //           </Typography>

    //         </Grid>
    //         <Grid item xs={6}>

    //         </Grid>
    //         <Grid item xs={5}>
    //           <Stack spacing={3} >
    //             <TextField id="outlined-basic" disabled defaultValue="u3hrufhuhfui4hfuihiu4hrfi" variant="outlined" />

    //             <TextField id="outlined-basic" label="TELEGRAM_CHANNEL_ID" variant="outlined" InputProps={{ endAdornment: <Button variant="text">Hinzufügen</Button> }} />

    //           </Stack>


    //         </Grid>
    //       </Grid>
    //       <hr></hr>
    //     </Box>
    //   </ThemeProvider>
  );
}

export default App;
