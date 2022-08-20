import React, { useReducer } from "react";

const initialState: any = []

export const useAlertReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return { state, dispatch }
}

const reducer = (state: any, action: { type: 'add_alert' | 'remove_alert', payload: any }) => {
    // console.log({ state, action })
    switch (action.type) {
        case 'add_alert': 
            return addAlert(state, action?.payload)
        case 'remove_alert':
            return removeAlert(state, action?.payload)
        default:
            throw new Error('Unknown action type received!')
    }
}

const addAlert = (state: any, newAlert: AlertType) => {
    const _newAlert = { ...newAlert }
    if (!_newAlert.id) {
        _newAlert.id = crypto.randomUUID()
    }
    return [ ...state, _newAlert ]
}

const removeAlert = (state: any, idIn: string) => {
    const alertToRemoveIndex = state?.findIndex((el: any) => el.id === idIn)
    const newState = [...state]
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