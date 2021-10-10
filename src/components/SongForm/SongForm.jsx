import React, { Component } from 'react';
import './SongForm.css';


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
        event.preventDefault();
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
                                    <input className='form-control input-style-left shadow m-1' name='title' type="text" value={this.state.title} onChange={this.handleChange} />
                            </div>
                            <div className='col'>
                                    Artist:
                                    <input className='form-control input-style-right shadow m-1' name='artist' type="text" value={this.state.artist} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                    Album:
                                    <input className='form-control input-style-left shadow m-1' name='album' type="text" value={this.state.album} onChange={this.handleChange} />
                            </div>
                            <div className='col'>
                                    Genre:
                                    <input className='form-control input-style-middle shadow m-1' name='genre' type="text" value={this.state.genre} onChange={this.handleChange} />
                            </div>
                            <div className='col'>
                                    Release Date:
                                    <input className='form-control input-style-right shadow m-1' name='release_date' type="datetime-local" value={this.state.release_date} onChange={this.handleChange} />
                            </div>
                        </div>
                        <input className='form-control shadow submit-format mt-4 m-1' type="submit" value="Add Song" />
                    </form>
                </div>
            </div>
         );
    }
}
 

export default SongForm;