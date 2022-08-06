import { Add, Delete, Edit } from '@mui/icons-material';
import { IconButton, Grid, Input, TextField, Box, InputAdornment } from '@mui/material';
import FormField from '../../components/formField/FormField';
import './disGram.css';

function DisGram() {
    return (
        <div className="disGram">
            <hr />
            <h2 className='sectionTitle'>Discord</h2>

            <FormField label="Discord bot token" buttonIcons={[<Edit />]}></FormField>
            <FormField label="Discord channel name" buttonIcons={[<Edit />]}></FormField>
            <hr />
            <h2 className='sectionTitle'>Telegram</h2>
            <FormField label="Telegram bot token" buttonIcons={[<Edit />]}></FormField>
            <h3 className='subSectionTitle'>Telegram Kanäle</h3>
            <FormField inputCount={2} buttonIcons={[<Edit />, <Delete />]}></FormField>
            <FormField inputCount={2} buttonIcons={[<Add />]}></FormField>
            <hr />
        </div>
        // <Box
        //     component="form"
        //     sx={{
        //         '& > :not(style)': { m: 1, width: '100ch' },
        //     }}
        //     noValidate
        //     autoComplete="off"
        // >
        //     <hr>
        //     </hr>

        //     <h2 className="sectionTitle">Discord</h2>
        //     <Grid ml={1} container spacing={2}>
        //         <Grid item xs={4} sm={4}>
        //             <label for="discordBotToken">DISCORD_BOT_TOKEN</label>
        //         </Grid>
        //         <Grid item xs={8} sm={8}>

        //             <TextField size="small" variant="outlined" label="outlined" id="discordBotToken" fullWidth></TextField>
        //         </Grid>
        //         <Grid item xs={4} sm={4}>
        //             <label>DISCORD_CHANNEL_NAME</label>
        //         </Grid><Grid item xs={8} sm={8}>
        //             <TextField size="small" variant="outlined" label="outlined" id="discordBotToken" fullWidth></TextField>
        //         </Grid>
        //     </Grid>
        //     <hr></hr>
        //     <h2 className="sectionTitle">Telegram</h2>
        //     <Grid ml={1} container spacing={2}>
        //         <Grid item xs={4} sm={4}>
        //             <label for="discordBotToken">TELEGRAM_BOT_TOKEN</label>
        //         </Grid>
        //         <Grid item xs={8} sm={8}>

        //             <TextField size="small" variant="outlined" label="outlined" id="discordBotToken" fullWidth></TextField>
        //         </Grid>
        //     </Grid>
        //     <h3 className='subSectionTitle'>Telegram Kanäle</h3>
        //     <TextField size="small" variant="outlined" label="outlined" id="discordBotToken" InputProps={{ endAdornment: <InputAdornment position="end"><IconButton ico><Add /></IconButton></InputAdornment> }}></TextField >
        //     <hr></hr>

        // </Box >
    )
}

export default DisGram