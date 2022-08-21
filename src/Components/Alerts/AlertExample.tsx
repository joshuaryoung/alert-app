import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import React, { useState } from "react"

function AlertExample({ dispatch, open, setOpen }: any) {
    const [alertType, setAlertType] = useState<string>('')
    const [alertTitle, setAlertTitle] = useState<string>('')
    const [alertText, setAlertText] = useState<string>('')
    const [alertLink, setAlertLink] = useState<string>('')
    const [alertTimeLimit, setAlertTimeLimit] = useState<number>(10000)

    const handleAddButtonClick = () => {
        setOpen([...open, true])
        dispatch({ type: 'add_alert', payload: { alertTitle, alertType, text: alertText, link: alertLink, timeLimit: alertTimeLimit }})
    }
    return (
        <div>
            <div id="input-container">
                <FormControl>
                    <InputLabel id="alert-type-select-label">Alert Type</InputLabel>
                    <Select id="alert-type-input" labelId="alert-type-select-label" label="Alert Type" value={alertType} onChange={e => setAlertType(e.target.value)}>
                        {['success', 'info', 'warning', 'error'].map(el => {
                            return <MenuItem value={el} key={el}>{el}</MenuItem>
                        })}
                    </Select>
                    <TextField label="Alert Title(optional)" id="alert-title-input" value={alertTitle} onChange={e => setAlertTitle(e.target.value)} />
                    <TextField label="Alert Message" id="alert-text-input" value={alertText} onChange={e => setAlertText(e.target.value)} />
                    <TextField label="Alert Link(optional)" id="alert-link-input" value={alertLink} onChange={e => setAlertLink(e.target.value)} />
                    <TextField label="Alert Time Limit(in ms -- optional)" id="alert-time-limit-input" value={alertTimeLimit} onChange={e => setAlertTimeLimit(parseInt(e.target.value))} />
                    <Button onClick={handleAddButtonClick}>Add Alert</Button>
                </FormControl>
            </div>
        </div>
    )
}

export default AlertExample