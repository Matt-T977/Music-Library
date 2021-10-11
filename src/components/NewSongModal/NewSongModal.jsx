import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import './NewSongModal.scss'


const NewSongModal = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <input className='form-control shadow  mt-4 m-1' id='submit-format' type="submit" onClick={handleShow} value="Add Song" />


            <Modal show={show} onHide={handleShow} className='modal-font text-center'
            {...props}
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'
            centered
            >
                <Modal.Header closeButton id='modal-header-styling'>
                    <Modal.Title id='contained-modal-title-vcenter'>
                        New Song to be Added!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body id='modal-body-styling'>
                    <h4>{props.song.title} By: {props.song.artist}</h4>
                    <p>
                        Album: {props.song.album}  |  Genre: {props.song.genre}
                        <br/>Release Date: {props.song.release_date.slice(0, 4)}
                    </p>
                </Modal.Body>
                <Modal.Footer id='modal-footer-styling'>
                    <input varient='primary' className='btn' id='button-close' onClick={handleClose} value='Close' />
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default NewSongModal;