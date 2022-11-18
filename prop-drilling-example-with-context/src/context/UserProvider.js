import { createContext, useState } from "react";

export const UserContext = createContext();
// Creates a special React object with two key properties:
  // - Consumer
  // - Provider

console.log(UserContext)

// UserContext.displayName = "TheUserContext";

// The UserProvider is our 'Wrapper' for our app. This will be the thing that contains our global state. 

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "John Lennon",
    username: "🦭🦭IAmTheWalrusGooGooGJoob🦭🦭",
    email: "john@thebeatles.com",
    favoriteSongs: [
      { artist: "Chuck Berry", title: "Johnny B Goode" },
      { artist: "Bob Dylan", title: "Positively 4th Street" },
    ],
  });
  return <UserContext.Provider value={{user, setUser}} >{children}</UserContext.Provider>;
};

export default UserProvider;
