// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import SignIn from "./features/SignIn";
import SignUp from "./features/SignUp";
import HomepageLayout from "./layouts/HomepageLayout";
import MainLayout from "./layouts/MainLayout";
import Homepage from "./pages/Homepage";
import { auth, handleUserProfile } from "firebase/utils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(null);
      }
      console.log("The userAuth:", userAuth);
      console.log("The CurrentUser:", currentUser);
    });
    return () => {
      authListener();
    };
  });

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomepageLayout currentUser={currentUser}>
              <Homepage />
            </HomepageLayout>
          )}
        />
        <Route
          path="/login"
          render={() =>
            currentUser ? (
              <Redirect to="/" />
            ) : (
              <MainLayout currentUser={currentUser}>
                <SignIn />
              </MainLayout>
            )
          }
        />
        <Route
          path="/registration"
          render={() => (
            <MainLayout currentUser={currentUser}>
              <SignUp />
            </MainLayout>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
