import { Alert, AlertTitle, Link, Snackbar } from "@mui/material"
import React, { useState } from "react"
import { AlertType } from "./AlertManager"

function AlertComponent({ alertType, id, alertTitle, timeLimit = 10000, text, link }: AlertType) {
    const [open, setOpen] = useState(true)

    const handleClose = () => {
        setOpen(false)
    }
    return (
        <Snackbar open={open} key={id} autoHideDuration={timeLimit} anchorOrigin={{horizontal: 'right', vertical: 'top'}} onClose={handleClose}>
            <Alert severity={alertType} >
                {alertTitle && <AlertTitle>{alertTitle}</AlertTitle>}
                {link && <Link href={link}>
                    {text}
                </Link>}
                {!link && text}
            </Alert>
        </Snackbar>
    )
}

export default AlertComponent