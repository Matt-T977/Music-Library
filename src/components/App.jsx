import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import MusicList from './MusicList/MusicList';
import SongForm from './SongForm/SongForm';
import Footer from './Footer/Footer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      songs: []
     }
  }


  componentDidMount(){
    this.getAllSongs();
  }

  getAllSongs = async () => {
    let response = await axios.get('http://127.0.0.1:8000/music/');
    this.setState({
        songs: response.data
    });
  }

  addSong = async (song) => {
    await axios.post('http://127.0.0.1:8000/music/', song)
    .then( res => {
      let newList = this.state.songs
      newList.push(song)
      this.setState({
        songs: newList
      })
    })
    .catch(err => {
      console.log(err);
    });
    alert(`The song "${song.title}" By: ${song.artist} was successfully added!`)
  }

  handleDelete = async (id) =>{
    const path = 'http://127.0.0.1:8000/music/' + id + '/'
    await axios.delete(path)
    .then(res => {
      this.setState(previousState => {
          let newMusicList = previousState.songs.filter(target => 
            target.id !== id)
          return {
            songs: newMusicList
            };
        })
    })
    .catch(err => {
        console.log(err);
    });
  }

  filterSearch = async (newSongs) =>{
    this.setState({
      songs: newSongs
    })
  }

  render() { 
    return ( 
      <div className='container-fluid app-bg'>
        <div className='row'>
          <Header />
        </div>
        <div className='row'>
          <div className='col-1'></div>
          <div className='col-10'>
            <SearchBar songs={this.state.songs} filterSearch={this.filterSearch} getAllSongs={this.getAllSongs} />
            <MusicList songs={this.state.songs} handleDelete={this.handleDelete} />
          </div>
          <div className='col-1'></div>
        </div>
        <div className='row'>
          <div className='col-1'></div>
          <div className='col-10'>
            <SongForm addSong={this.addSong} />
          </div>
          <div className='col-1'></div>
        </div>
        <div className='row'>
          <Footer />
        </div>
      </div>
    );
  }
}
 
export default App;