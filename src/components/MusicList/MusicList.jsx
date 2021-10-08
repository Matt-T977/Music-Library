import React, { Component } from 'react';
import './MusicList.css'
import axios from 'axios'



class MusicList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    displaySongs = (props) => {
        return this.props.songs.map( (song, index) => {
            const {id, title, artist, album, release_date, genre, number_of_likes, number_of_dislikes} = song;
            return (
                <tr key={id}>
                    <th scope='row'>{title}</th>
                    <td>{artist}</td>
                    <td>{album}</td>
                    <td>{release_date}</td>
                    <td>{genre}</td>
                    <button type='button' className='btn btn-md' onClick={() => this.props.handleDelete(id)}>Delete</button>
                </tr>
            )    
        });
    }

    render() { 
        return ( 
            <table className='table table-bg-color table-striped rounded my-5 text-center'>
                <thead>
                    <tr>
                        <th scope='col'>
                            Title
                        </th>
                        <th scope='col'>
                            Artist
                        </th>
                        <th scope='col'>
                            Album
                        </th>
                        <th scope='col'>
                            Release Date
                        </th>
                        <th scope='col'>
                            Genre
                        </th>
                        <th scope='col'>
                            Delete Song
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.displaySongs(this.props)}
                </tbody>
            </table>
         );
    }
}
 
export default MusicList;