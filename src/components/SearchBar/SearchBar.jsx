import React, { Component } from 'react';
import './SearchBar.scss';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            filterInput: '',
            filteredSongList: [],
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
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.state.filterInput = '';
        this.props.getAllSongs();
    }


    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className='h4'>
                        Search:
                        <input className='form-control' id='search-bar-style' name='filterInput' type="text" value={this.state.filterInput} onChange={this.handleChange} />
                        <input className='form-control mt-1' id='reset-button' name='reset' type='submit' value='Reset Search' />
                    </div>
                </form>
            </div>
        );
    }
}
 
export default SearchBar;