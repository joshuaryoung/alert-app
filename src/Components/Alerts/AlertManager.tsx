import React, { useReducer } from "react";
import AlertComponent from "./AlertComponent"

const initialState: any = []

export const useAlertReducer = () => {
    const [alerts, dispatch] = useReducer(reducer, initialState)
    return { alerts, dispatch }
}

const reducer = (alerts: any, action: { type: 'add_alert' | 'remove_alert', payload: any }) => {
    switch (action.type) {
        case 'add_alert': 
            return addAlert(alerts, action?.payload)
        case 'remove_alert':
            return removeAlert(alerts, action?.payload)
        default:
            throw new Error('Unknown action type received!')
    }
}

const addAlert = (alerts: any, newAlert: AlertType) => {
    const _newAlert = { ...newAlert }
    if (!_newAlert.id) {
        _newAlert.id = crypto.randomUUID()
    }
    return [ ...alerts, _newAlert ]
}

const removeAlert = (alerts: any, idIn: string) => {
    const alertToRemoveIndex = alerts?.findIndex((el: any) => el.id === idIn)
    const newState = [...alerts]
    newState.splice(alertToRemoveIndex, 1)
    return [ ...newState ]
}

export type AlertType = {
    alertType: 'error' | 'warning' | 'info' | 'success',
    id?: string,
    alertTitle?: string,
    timeLimit?: number,
    text: string,
    link?: string
}

function AlertManager({ open, setOpen, alerts }: any) {

    const handleClose = (index: number) => {
        const newOpen = [...open]
        newOpen[index] = false
        setOpen(newOpen)
    }

    return (
        <div>
            {alerts && alerts.map((el: any, i: number) => {
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
        </div>
    )
}

export default AlertManager