import React from 'react';
import HomeRoute from './components/HomeRoute';
import { FavouritePhotosProvider } from './components/FavouritePhotosContext';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';

const App = () => {
  return (
    <div className="App">
      <FavouritePhotosProvider>
        <HomeRoute topics={topics} photos={photos} />
      </FavouritePhotosProvider>
    </div>
  );
};

export default App;
