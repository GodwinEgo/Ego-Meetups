import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllMeetUpsPage from './Components/Pages/AllMeetUps';
import NewMeetUpPage from './Components/Pages/NewMeetUps';
import FavoritesPage from './Components/Pages/Favorites';
import Layout from './Components/Layout/Layout';

function App ()
{
  return (
    <Layout>
      <Routes>
        <Route path='/' element={ <AllMeetUpsPage /> } />
        <Route path='/ne-meetup' element={ <NewMeetUpPage /> } />
        <Route path='/favorites' element={ <FavoritesPage /> } />
      </Routes>
    </Layout>
  );
}

export default App;
