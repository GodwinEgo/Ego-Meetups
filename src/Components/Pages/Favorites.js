import { useContext } from "react";
import React from "react";

import FavoritesContext from "../../Store/favorites-context";
import MeetUpList from "../Meetups/MeetUpList";


function FavoritesPage ()
{
  const favoritesCtx = useContext( FavoritesContext );

  let content;

  if ( favoritesCtx.totalFavorites === 0 )
  {
    content = <p>You got no favorites yet! Wanna Add Some?</p>
  } else
  {
    content = <MeetUpList meetups={ favoritesCtx.favorites } />
  }

  return (
    <section>
      <br /><br /><br />
      <h1>
        My Favorites
      </h1>
      { content }
    </section>
  );
}

export default FavoritesPage;