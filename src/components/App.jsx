import React, { Component } from 'react';
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
      <div>
        <div>
          <Header />
        </div> 
        <div>
          <MusicList />
          <SongForm />
        </div>
        <div>
          <Footer />
        </div>
      </div>
     );
  }
}
 
export default App;