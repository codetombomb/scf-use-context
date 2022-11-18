import { useContext } from 'react';
import { UserContext } from '../context/UserProvider'

function ChildFive() {
  const {user, setUser} = useContext(UserContext)

  const handleSetUserClick = () => {
    setUser({
      name: "Richard Starkey",
      username: "⭐️Ringo Starr⭐️",
      email: "ringo@thebeatles.com",
      favoriteSongs: [
        {artist: "Ray Charles", title: "Tell the Truth"},
        {artist: "The Beatles", title: "Yellow Submarine"}
      ]
    })
  }

  return (
    <div className="child-five">
        <h1>ChildFive</h1>
        <p>Renders the user, {user.name}'s data that originates in the App component</p>
        <button onClick={handleSetUserClick}>Update User</button>
    </div>
  )
}
export default ChildFive