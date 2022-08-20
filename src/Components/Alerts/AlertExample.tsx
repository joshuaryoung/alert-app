import React, { useEffect } from "react"
import AlertComponent from "./AlertComponent"
import { useAlertReducer } from "./AlertManager"

function AlertExample() {
    const { state, dispatch } = useAlertReducer()
    useEffect(() => {
        dispatch({ type: 'add_alert', payload: { alertTitle: 'Title', alertType: 'success', timeLimit: 1000, text: 'test', link: 'http://joshyoung.io' }})
    }, [])
    console.log({ state })
    return (
        <div>
            {state && state.map(el => {
                return (
                <AlertComponent
                    key={el.id}
                    alertType={el.alertType}
                    alertTitle={el.alertTitle}
                    text={el.text}
                    link={el.link}
                    timeLimit={el.timeLimit}
                />)
            })}
        </div>
    )
}

export default AlertExample