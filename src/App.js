import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";

function App() {
  return (
      <Layout>
        <Switch> {/* Matches exact route*/}  
          <Route path="/" exact>
            <AllMeetups></AllMeetups>
          </Route>
          <Route path="/new-meetup">
            <NewMeetup></NewMeetup>
          </Route>
          <Route path="/favorites">
            <Favorites></Favorites>
          </Route>
        </Switch>
      </Layout>
  );
}

export default App;
