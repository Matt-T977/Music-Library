import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            filterInput: '',
            filteredSongList: []
        }
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value 
        });
        let newSongs = this.props.songs.filter(song => {
            if (song.title.includes(event.target.value)){
                return true;
            }
            else if (song.artist.includes(event.target.value)){
                return true;
            }
            else if (song.album.includes(event.target.value)){
                return true;
            }
            else if (song.genre.includes(event.target.value)){
                return true;
            }
            else if (song.release_date.includes(event.target.value)){
                return true;
            }
            else{
                return false;
            }
        }); 
        this.props.filterSearch(newSongs)
        console.log(this.state.filterInput)
        console.log(newSongs)
        console.log(this.props.songs)
    }


    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                <div className='h4'>
                    Search:
                    <input className='form-control search-bar-format' name='filterInput' type="text" value={this.state.filterInput} onChange={this.handleChange} />
                </div>
                </form>
            </div>
         );
    }
}
 
export default SearchBar;