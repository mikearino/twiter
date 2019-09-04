import React from 'react';
import { Container, Image } from 'react-bootstrap'
import Matt from './img/matt.jpg'

function ProfilePic(){
  return (
    <Container>
    <Image src={Matt} roundedCircle />
    </Container>
  );
}

export default ProfilePic;
