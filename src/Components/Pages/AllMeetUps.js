import React from "react";
import MeetUpList from "../Meetups/MeetUpList";
import { useState, useEffect } from "react";


function AllMeetUpsPage ()
{
  const [ isLoading, setIsLoading ] = useState( true );

  const [ loadedMeetups, setLoadedMeetups ] = useState( [] );

  useEffect( () =>
  {
    setIsLoading( true );
    fetch(
      'https://meet-up-app-13adf-default-rtdb.firebaseio.com/meetups.json'
    )
      .then( ( response ) =>
      {
        return response.json();
      } )
      .then( ( data ) =>
      {
        const meetups = [];

        for ( const key in data )
        {
          const meetup = {
            id: key,
            ...data[ key ]
          };
          meetups.push( meetup );
        }


        setIsLoading( false );
        setLoadedMeetups( meetups );
      } );
  }, [] );


  if ( isLoading )
  {
    return (
      <section>
        <br /><br /><br />
        <p>Loading.....</p>
      </section>
    );
  }

  return (
    <section>
      <br /><br /><br />
      <h1>All Meetups</h1>
      <MeetUpList meetups={ loadedMeetups } />
    </section>
  );
}

export default AllMeetUpsPage;