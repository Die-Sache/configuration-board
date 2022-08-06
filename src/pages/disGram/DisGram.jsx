import { Add, Delete, Edit, Update } from '@mui/icons-material';
import { IconButton, Grid, Input, TextField, Box, InputAdornment } from '@mui/material';
import { useEffect, useState } from 'react';
import FormField from '../../components/formField/FormField';
import './disGram.css';
import update from 'immutability-helper'

function DisGram() {

    const [state, setState] = useState({
        data: {
            discordBotToken: '',
            discordChannelName: '',
            telegramBotToken: ''
        },
        edit: {
            discordBotToken: true,
            discordChannelName: true,
            telegramBotToken: true
        }
    });

    let handleSave = (value) => {

    }

    let handleDiscordBotTokenOnChange =

        (event) => setState((state, props) => {
            return update(state, {
                data: {
                    discordBotToken: {
                        $set: event.target.value
                    }
                }
            })
        }
        )

    let handleDiscordChannelNameOnChange =

        (event) => setState((state, props) => {
            return update(state, {
                data: {
                    discordChannelName: {
                        $set: event.target.value
                    }
                }
            })
        }
        )

    let handleTelegramBotTokenOnChange =

        (event) => setState((state, props) => {
            return update(state, {
                data: {
                    telegramBotToken: {
                        $set: event.target.value
                    }
                }
            })
        }
        )

    let handleTelegramChannelIdOnChange =

        (event) => setState((state, props) => {
            return update(state, {
                data: {
                    telegramChannelId: {
                        $set: event.target.value
                    }
                }
            })
        }
        )


    let handleOnSave = async (data) => {
        await fetch('https://disgramm.herokuapp.com/config/setEnv', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state.data)
        });
        await fetch('https://disgramm.herokuapp.com/config/start');
    }

    return (
        <div className="disGram">
            <hr />
            <h2 className='sectionTitle'>Discord</h2>

            <FormField onChange={handleDiscordBotTokenOnChange} disabled={state.edit.discordBotToken} label="Discord bot token" buttons={[<IconButton onClick={() => setState((state, props) => update(state, {
                edit: {
                    discordBotToken: {
                        $set: !state.edit.discordBotToken
                    }
                }
            }))}><Edit /></IconButton>]}></FormField>
            <FormField onChange={handleDiscordChannelNameOnChange} disabled={state.edit.discordChannelName} label="Discord channel name" buttons={[<IconButton onClick={() => setState((state, props) => update(state, {
                edit: {
                    discordChannelName: {
                        $set: !state.edit.discordChannelName
                    }
                }
            }))} ><Edit /></IconButton>]}></FormField>
            <hr />
            <h2 className='sectionTitle'>Telegram</h2>
            <FormField onChange={handleTelegramBotTokenOnChange} disabled={state.edit.telegramBotToken} label="Telegram bot token" buttons={[<IconButton onClick={() => setState((state, props) => update(state, {
                edit: {
                    telegramBotToken: {
                        $set: !state.edit.telegramBotToken
                    }
                }
            }))}><Edit /></IconButton>]}></FormField>
            <h3 className='subSectionTitle'>Telegram Kanäle</h3>
            <FormField onChange={handleTelegramChannelIdOnChange} buttons={[<IconButton><Edit /></IconButton>, <IconButton><Delete /></IconButton>]}></FormField>

            <hr />


            <button onClick={handleOnSave}>Save</button>
        </div>

    )
}

export default DisGram