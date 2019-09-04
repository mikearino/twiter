import React from 'react';
import { Card } from 'react-bootstrap'
import ProfilePic from './ProfilePic'


function Profile(){
  return (
    <div>

    <Card bg="primary" text="white" style={{ height: '20rem' }}>
    <Card.Header style={{ height: '20rem' }}>Header</Card.Header>

    <Card.Body style = {{backgroundColor: 'white', color: '#333'}} >
    <Card.Title>Primary Card Title</Card.Title>
    <ProfilePic/>
    <Card.Text>
    Some quick example text to build on the card title and make up the bulk
    of the card's content.
    </Card.Text>
    </Card.Body>
    </Card>
    </div>
  );
}
export default Profile;
