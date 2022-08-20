import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import React, { useEffect, useState } from "react"
import AlertComponent from "./AlertComponent"
import { useAlertReducer } from "./AlertManager"

function AlertExample() {
    const { state, dispatch } = useAlertReducer()
    const [open, setOpen] = useState([true])
    const [alertType, setAlertType] = useState<string>()
    const [alertTitle, setAlertTitle] = useState<string>()
    const [alertText, setAlertText] = useState<string>()
    const [alertLink, setAlertLink] = useState<string>()
    const [alertTimeLimit, setAlertTimeLimit] = useState<number>()

    const handleClose = (index: number) => {
        console.log({ index })
        const newOpen = [...open]
        newOpen[index] = false
        setOpen(newOpen)
    }

    const handleAddButtonClick = () => {
        setOpen([...open, true])
        dispatch({ type: 'add_alert', payload: { alertTitle, alertType, text: alertText, link: alertLink, timeLimit: alertTimeLimit }})
    }
    return (
        <div>
            {state && state.map((el, i) => {
                return (
                <AlertComponent
                    key={el.id}
                    alertType={el.alertType}
                    alertTitle={el.alertTitle}
                    text={el.text}
                    link={el.link}
                    timeLimit={el.timeLimit}
                    handleClose={handleClose}
                    open={open[i]}
                    index={i}
                />)
            })}
            <div id="input-container">
                <FormControl>
                    <InputLabel id="alert-type-select-label">Alert Type</InputLabel>
                    <Select id="alert-type-input" labelId="alert-type-select-label" label="Alert Type" value={alertType} onChange={e => setAlertType(e.target.value)}>
                        {['success', 'info', 'warning', 'error'].map(el => {
                            return <MenuItem value={el} key={el}>{el}</MenuItem>
                        })}
                    </Select>
                    <TextField label="Alert Title" id="alert-title-input" value={alertTitle} onChange={e => setAlertTitle(e.target.value)} />
                    <TextField label="Alert Message" id="alert-text-input" value={alertText} onChange={e => setAlertText(e.target.value)} />
                    <TextField label="Alert Link(optional)" id="alert-Link-input" value={alertLink} onChange={e => setAlertLink(e.target.value)} />
                    <TextField label="Alert Link(optional)" id="alert-Link-input" value={alertTimeLimit} onChange={e => setAlertTimeLimit(parseInt(e.target.value))} />
                    <Button onClick={handleAddButtonClick}>Add Alert</Button>
                </FormControl>
            </div>
        </div>
    )
}

export default AlertExample