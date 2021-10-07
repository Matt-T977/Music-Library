import React, { Component } from 'react';
import axios from 'axios'



class MusicList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs: []
         }
    }


    componentDidMount(){
        this.getAllSongs();
    }

    async getAllSongs(){
        let response = await axios.get('http://127.0.0.1:8000/music/');
        this.setState({
            songs: response.data
        });
    }

    handleDelete = async (id) =>{
        const path = 'http://127.0.0.1:8000/music/' + id + '/'
        await axios.delete(path).then(res => {
            this.setState({
                songs: res.data
            })
        })
        .catch(err => {
            console.log(err);
        });
    }

    displaySongs = () => {
        return this.state.songs.map( (song, index) => {
            const {id, title, artist, album, release_date, genre, number_of_likes, number_of_dislikes} = song;
            return (
                <tr className='row text-center' key={id}>
                    <td className='col border'>{title}</td>
                    <td className='col border'>{artist}</td>
                    <td className='col border'>{album}</td>
                    <td className='col border'>{release_date}</td>
                    <td className='col border'>{genre}</td>
                    <td className='col border'>{number_of_likes}</td>
                    <td className='col border'>{number_of_dislikes}</td>
                    <button className='col border' onClick={() => this.handleDelete(id)}>Delete</button>
                </tr>
            )    
        });
    }

    render() { 
        return ( 
            <table>
                <thead>
                    <th className='row text-center'>
                        <td className='col border'>
                            Title
                        </td>
                        <td className='col border'>
                            Artist
                        </td>
                        <td className='col border'>
                            Album
                        </td>
                        <td className='col border'>
                            Release Date
                        </td>
                        <td className='col border'>
                            Genre
                        </td>
                        <td className='col border'>
                            Likes
                        </td>
                        <td className='col border'>
                            Dislikes
                        </td>
                        <td className='col border'>
                            Delete Song
                        </td>
                    </th>
                </thead>
                <tbody>
                    <div>
                        {this.displaySongs()}
                    </div>
                </tbody>
            </table>
         );
    }
}
 
export default MusicList;