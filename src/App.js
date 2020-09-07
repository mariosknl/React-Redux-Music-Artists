import React from 'react';
import SearchArtist from './components/SearchArtist';
import './index.css';
import './styles/App.css';
import AppStyles from './styles/AppStyles.styles.tw';

const App = () => (
  <AppStyles>
    <section className="spikes">
      <h1>Search for your favorite artist</h1>
      <p>Welcome to my Music Artist Finder Application</p>
      <SearchArtist />
    </section>
  </AppStyles>
);

export default App;
