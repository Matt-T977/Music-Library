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
      this.getAllSongs();
      })
    .catch(err => {
      console.log(err);
    });
  }

  editSong = async (id, song) => {
    const path = 'http://127.0.0.1:8000/music/' + id + '/'
    await axios.put(path, song)
    .then(res => {
      this.getAllSongs();
      })
    .catch(err => {
      console.log(err);
    });
  }

  handleLike = async (id) => {
    const path = 'http://127.0.0.1:8000/music/like/' + id + '/';
    await axios.patch(path)
    .then(res => {
      this.getAllSongs();
      })
    .catch(err => {
      console.log(err);
    });
  }

  handleDislike = async (id) => {
    const path = 'http://127.0.0.1:8000/music/dislike/' + id + '/';
    await axios.patch(path)
    .then(res=> {
      this.getAllSongs();
      })
    .catch(err => {
      console.log(err);
    });
  }

  handleDelete = async (id) =>{
    const path = 'http://127.0.0.1:8000/music/' + id + '/';
    await axios.delete(path)
    .then(res => {
      this.getAllSongs();
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
      <div className='container-fluid mx-auto app-bg'>
        <div className='row'>
          <Header />
        </div>
        <div className='row'>
          <div className='col-1'></div>
          <div className='col-10'>
            <SearchBar songs={this.state.songs} filterSearch={this.filterSearch} getAllSongs={this.getAllSongs} />
            <MusicList songs={this.state.songs} handleDelete={this.handleDelete} handleLike={this.handleLike} handleDislike={this.handleDislike} editSong={this.editSong} />
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