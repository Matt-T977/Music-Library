import React, { Component } from 'react';
import './SongForm.scss';


class SongForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            artist: '',
            album: '',
            release_date: '',
            genre: '',
            number_of_likes: 0,
            number_of_dislikes: 0
         }
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = async (event) => {
        // event.preventDefault();
        this.props.addSong(this.state);
    }

    render() { 
        return ( 
            <div className='row mt-5 table-positon'>
                <div>
                    <form onSubmit={this.handleSubmit} className='post'>
                        <div className='row'>
                            <div className='col'>
                                    Title:
                                    <input className='form-control shadow m-1' id='input-style-left' name='title' type="text" value={this.state.title} onChange={this.handleChange} />
                            </div>
                            <div className='col'>
                                    Artist:
                                    <input className='form-control shadow m-1' id='input-style-right' name='artist' type="text" value={this.state.artist} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                    Album:
                                    <input className='form-control shadow m-1' id='input-style-left' name='album' type="text" value={this.state.album} onChange={this.handleChange} />
                            </div>
                            <div className='col'>
                                    Genre:
                                    <input className='form-control shadow m-1' id='input-style-middle' name='genre' type="text" value={this.state.genre} onChange={this.handleChange} />
                            </div>
                            <div className='col'>
                                    Release Date:
                                    <input className='form-control shadow m-1' id='input-style-right' name='release_date' type="datetime-local" value={this.state.release_date} onChange={this.handleChange} />
                            </div>
                        </div>
                        {/* Modal Code */}
                        {/* <div>
                            <input type="button" className='form-control shadow  mt-4 m-1' id='submit-format' data-bs-toggle='modal' data-bs-target='addSongModal' value='Add Song'/>
                        </div>
                        <div className='modal' id='addSongModal' tabindex='-1'>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Add a New Song!</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <p>Song Details</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <input className='form-control shadow  mt-4 m-1' id='submit-format' type="submit" value="Add Song" />
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* Modal Code */}
                        <input className='form-control shadow  mt-4 m-1' id='submit-format' type="submit" value="Add Song" />
                    </form>
                </div>
            </div>
         );
    }
}
 

export default SongForm;