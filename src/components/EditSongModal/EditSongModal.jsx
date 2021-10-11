import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import './EditSongModal.scss'




const EditSongModal = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    const handleSubmit = (event) => {
        props.editSong(props.song.id, props.song);
    }

    
    return (
        <>
            <input className='btn btn-sm rounded-circle btn-outline-info p-1 mt-1' id='submit-format' type="button" onClick={handleShow} value="Edit" />


            <Modal show={show} onHide={handleClose} className='modal-font text-center'
            {...props}
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'
            centered
            >
                <Modal.Header closeButton id='modal-header-styling'>
                    <Modal.Title id='contained-modal-title-vcenter'>
                        Song Editor:
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body id='modal-body-styling'>
                    <form onSubmit={handleSubmit()} className='post'>
                        <div className='row'>
                            <div className='col'>
                                    Title:
                                    <input className='form-control shadow m-1' id='input-style-left' name='title' type="text" value={props.song.title} onChange={handleChange} />
                            </div>
                            <div className='col'>
                                    Artist:
                                    <input className='form-control shadow m-1' id='input-style-right' name='artist' type="text" value={props.song.artist} onChange={handleChange} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                    Album:
                                    <input className='form-control shadow m-1' id='input-style-left' name='album' type="text" value={props.song.album} onChange={handleChange} />
                            </div>
                            <div className='col'>
                                    Genre:
                                    <input className='form-control shadow m-1' id='input-style-middle' name='genre' type="text" value={props.song.genre} onChange={handleChange} />
                            </div>
                            <div className='col'>
                                    Release Date:
                                    <input className='form-control shadow m-1' id='input-style-right' name='release_date' type="datetime-local" value={props.song.release_date} onChange={handleChange} />
                            </div>
                        </div>
                        <input varient='primary' className='btn' id='button-close' onClick={handleSubmit} value='Submit' />
                    </form>
                </Modal.Body>
                <Modal.Footer id='modal-footer-styling'>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditSongModal;