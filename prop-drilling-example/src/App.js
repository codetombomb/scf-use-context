import './App.css';
import ChildOne from './components/ChildOne';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({
    name: "John Lennon",
    username: "🦭🦭IAmTheWalrusGooGooGJoob🦭🦭",
    email: "john@thebeatles.com",
    favoriteSongs: [
      {artist: "Chuck Berry", title: "Johnny B Goode"},
      {artist: "Bob Dylan", title: "Positively 4th Street"},
    ]
  })
  return (
    <div className="App">
      <h1>Prop Drilling</h1>
      <h2>Current User</h2>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email {user.email}</p>
      <p>Favorite Songs:</p>
      <ul>{user.favoriteSongs.map(song => <li>{song.title} by {song.artist}</li>)}</ul>

      
      <h3>The Yellow App component is located at the top of the components hierarchy.</h3>
        <h3>It is responsible for rendering the <span style={{color: "#f24822"}}>ChildOne</span> component.</h3>
        <p>The `user` state originates here and is passed 👇 to the ChildOne component</p>

      <ChildOne user={user} setUser={setUser}/>
    </div>
  );
}

export default App;
