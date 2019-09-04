import React from 'react';
import '../App.css';
import Bio from "./Bio";
import NavbarButton from './NavbarButton'
import Profile from './Profile'
import MainFeed from './MainFeed'
import FriendsList from './FriendsList'


function App() {
  return (
    <div className="">
    <NavbarButton/>
    <Profile/>
    <Bio/>
    <MainFeed/>
    <FriendsList/>
    
    </div>
  );
}

export default App;
