import React from 'react'
import { Button, Modal } from 'react-bootstrap'

interface IProps {
    showModal: boolean,
    title: string,
    description: string,
    action: () => void,
    closeModal: ()=> void
}

function ConfirmationModal({showModal,title,description,action ,closeModal}:IProps) {
    return (
        <Modal centered show={showModal} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{description}</Modal.Body>
            <Modal.Footer>
                <Button variant="muted" onClick={closeModal}>
                    Close
                </Button>
                <Button variant="danger" onClick={action}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ConfirmationModal