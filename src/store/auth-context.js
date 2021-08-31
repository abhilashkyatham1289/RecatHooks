import React, {useState,useEffect} from "react";

const AuthConext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin : (email, password) => {}
});

export const AuthConextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storeUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storeUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (<AuthConext.Provider value={{
      isLoggedIn : isLoggedIn,
      onLogout : logoutHandler,
      onLogin : loginHandler
  }}>{props.children}</AuthConext.Provider>);
};

export default AuthConext;
