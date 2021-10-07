import React, { Component } from 'react';
import './App.css'
import Header from './Header/Header';
import MusicList from './MusicList/MusicList';
import SongForm from './SongForm/SongForm';
import Footer from './Footer/Footer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }



  render() { 
    return ( 
    <body className='container-fluid'>
      <div>
        <div className='row'>
          <Header />
        </div> 
        <div className='row'>
            <MusicList />
        </div>
        <div className='row'>
          <SongForm />
        </div>
        <div className='row'>
          <Footer />
        </div>
      </div>
    </body>
     );
  }
}
 
export default App;