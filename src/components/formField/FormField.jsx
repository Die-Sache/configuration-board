import { Add, Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import './formField.css'

function FormField({ inputCount = 1, label, defaultValue, placeholder, disabled, buttonIcons }) {

    let buttons = buttonIcons ? buttonIcons.map(it => <IconButton>{it}</IconButton>) : [];
    let inputFields = [];
    for (let i = 0; i < inputCount; i++) {
        inputFields.push(<input className="inputField" disabled={disabled} defaultValue={defaultValue} placeholder={placeholder}  >
        </input>)
    }

    return (
        <div className="formField">
            {label ? <label className="formLabel">
                {label}
            </label> : <></>
            }
            <div className="formInput">
                {inputFields}
                {buttons}
            </div>
        </div>
    )
}

export default FormField;