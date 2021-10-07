import React, { Component } from 'react';
import axios from 'axios';


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

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/music/', this.state);
    }

    render() { 
        return ( 
            <div className='row'>
                <form onSubmit={this.handleSubmit} method='POST'>
                    <label>
                        Title:
                        <input name='title' type="text" value={this.state.title} onChange={this.handleChange} />
                    </label>
                    <label>
                        Artist:
                        <input name='artist' type="text" value={this.state.artist} onChange={this.handleChange} />
                    </label>
                    <label>
                        Album:
                        <input name='album' type="text" value={this.state.album} onChange={this.handleChange} />
                    </label>
                    <label>
                        Genre:
                        <input name='genre' type="text" value={this.state.genre} onChange={this.handleChange} />
                    </label>
                    <label>
                        Release Date:
                        <input name='release_date' type="datetime-local" value={this.state.release_date} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Add Song" />
                </form>
            </div>
         );
    }
}
 

export default SongForm;