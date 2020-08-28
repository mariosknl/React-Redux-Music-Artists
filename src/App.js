import React from 'react';
import SearchArtist from './components/SearchArtist';
import './index.css';
import AppStyles from './styles/AppStyles.styles.tw';

const App = () => (
  <AppStyles>
    <div className="container">
      <h1>Search for your favorite artist</h1>
      <p>Welcome to my Music Artist Finder Application</p>
      <SearchArtist />
    </div>
  </AppStyles>
);

export default App;
