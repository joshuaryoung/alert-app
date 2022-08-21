import { Alert, AlertTitle, Link, Snackbar } from "@mui/material"
import React from "react"

function AlertComponent({ alertType, id, alertTitle, timeLimit = 10000, text, link, open, handleClose, index }: any) {
    return (
        <Snackbar open={open} key={id} autoHideDuration={timeLimit} anchorOrigin={{horizontal: 'right', vertical: 'top'}} onClose={el => handleClose(index)}>
            <Alert severity={alertType} >
                {alertTitle && <AlertTitle>{alertTitle}</AlertTitle>}
                {link && <Link href={link} target="_blank">
                    {text}
                </Link>}
                {!link && text}
            </Alert>
        </Snackbar>
    )
}

export default AlertComponent