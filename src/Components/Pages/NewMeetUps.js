import React from "react";
import NewMeetupForm from "../Meetups/NewMeetupForm";
import { useNavigate } from 'react-router-dom';

function NewMeetUpPage ()
{

  const navigate = useNavigate();

  function addMeetupHandler ( meetupData )
  {
    fetch(
      'https://meet-up-app-13adf-default-rtdb.firebaseio.com/meetups.json  ',
      {
        method: 'POST',
        body: JSON.stringify( meetupData ),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then( () =>
    {
      navigate( '/' );
    } );
  }
  return (
    <section>
      <br /><br /><br />
      <h1>Add New MeetUp</h1>
      <NewMeetupForm onAddMeetup={ addMeetupHandler } />
    </section>
  );
}

export default NewMeetUpPage;