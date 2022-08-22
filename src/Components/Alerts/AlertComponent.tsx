import { Alert, AlertTitle, Link } from "@mui/material"
import React, { forwardRef } from "react"
import { AlertType } from "./AlertManager"

const AlertComponent = forwardRef<HTMLDivElement, AlertType>(({ alertType, alertTitle, text, link }, ref) => {
    return (
        <div ref={ref}>
            <Alert severity={alertType} >
                {alertTitle && <AlertTitle>{alertTitle}</AlertTitle>}
                {link && <Link href={link} target="_blank"> 
                    {text}
                </Link>}
                {!link && text}
            </Alert>
        </div>
    )
})

export default AlertComponent