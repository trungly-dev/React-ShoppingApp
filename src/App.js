// import logo from "./logo.svg";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import SignIn from "./features/SignIn";
import SignUp from "./features/SignUp";
import HomepageLayout from "./layouts/HomepageLayout";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )}
        />
        <Route
          path="/login"
          render={() => (
            <HomepageLayout>
              <SignIn />
            </HomepageLayout>
          )}
        />
        <Route
          path="/registration"
          render={() => (
            <HomepageLayout>
              <SignUp />
            </HomepageLayout>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
