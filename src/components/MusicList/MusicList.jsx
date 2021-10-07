import React, { Component } from 'react';
import axios from 'axios'



class MusicList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs: []
         }
    }

    deleteSong = this.deleteSong.bind(this)

    componentDidMount(){
        this.getAllSongs();
    }

    async getAllSongs(){
        let response = await axios.get('http://127.0.0.1:8000/music/');
        this.setState({
            songs: response.data
        });
    }

    async deleteSong(id){
        return await axios.delete('http://127.0.0.1:8000/music/' + id + '/')
    }

    displaySongs = () => {
        return this.state.songs.map( (song, index) => {
            const {id, title, artist, album, release_date, genre, number_of_likes, number_of_dislikes} = song;
            return (
                <tr className='row text-center' key={id}>
                    <td className='col-2 border'>{title}</td>
                    <td className='col-2 border'>{artist}</td>
                    <td className='col-2 border'>{album}</td>
                    <td className='col-2 border'>{release_date}</td>
                    <td className='col-2 border'>{genre}</td>
                    {/* <td className='col-2 border'><button onClick={this.deleteSong(id)}>Delete</button></td> */}
                </tr>
            )    
        });
    }

    render() { 
        return ( 
            <div>
                {this.displaySongs()}
            </div>
         );
    }
}
 
export default MusicList;