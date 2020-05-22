import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

export default function AlertMessage({ show, setShow, title, msg, button, func, colorAlert, colorButton }) {
    return (
        <>
            <Alert show={show} variant={colorAlert} onClose={() => setShow(false)} dismissible>
                <Alert.Heading>{title}</Alert.Heading>
                <p>
                    {msg}
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={func} variant={colorButton}>
                        {button}
                    </Button>
                </div>
            </Alert>
        </>
    )
}