import React from 'react';
import { Card, ListGroup } from 'react-bootstrap'
import NavSearch from './NavSearch'
import Friends from './Friends'

function FriendsList(){
  return (
    <div>
    <Card style={{ width: '18rem' }}>
    <Card.Header>Featured</Card.Header>
    <ListGroup variant="flush">
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
    <Friends/>
    </Card>
    </div>
  );
}

export default FriendsList;
