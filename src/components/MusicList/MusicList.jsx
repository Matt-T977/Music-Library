import React, { Component } from 'react';
import EditSongModal from '../EditSongModal/EditSongModal';
import './MusicList.css'



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
                    <td>{release_date.slice(0, 4)}</td>
                    <td>{genre}</td>
                    <td>{number_of_likes}</td>
                    <td>{number_of_dislikes}</td>
                    <td className='btn-group btn-group-style' >
                        <button type='button' className='btn btn-sm btn-outline-dark p-1' onClick={() => this.props.handleLike(id)}>Like</button>
                        <button type='button' className='btn btn-sm btn-outline-dark p-1' onClick={() => this.props.handleDislike(id)}>Dislike</button>
                        <EditSongModal song={song} editSong={this.props.editSong} /> 
                        <button type='button' className='btn btn-sm btn-outline-dark p-1' onClick={() => this.props.handleDelete(id)}>Delete</button>
                    </td>
                </tr>
            )    
        });
    }

    render() { 
        return ( 
            <table className='table table-bg-color table-format table-striped table-borderless shadow mt-5 text-center'>
                <thead className='table-header-color'>
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
                            Likes
                        </th>
                        <th scope='col'>
                            Dislikes
                        </th>
                        <th scope='col'>
                            Options
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