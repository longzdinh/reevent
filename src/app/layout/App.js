import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import NavBar from "../../features/nav/NavBar/NavBar";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import EventDetailPage from "../../features/event/EventDetailed/EventDetailPage";
import PeopleDoasboard from "../../features/user/PeopleDashboard/PeopleDoasboard";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import EventForm from "../../features/event/EventForm/EventForm";
import HomePage from "../../features/home/HomePage";
import TestPage from "../../features/test";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Route
          path="/(.+)"
          render={() => (
            <div>
              <NavBar />
              <Container className="main">
                <Switch>
                  <Route path="/test" component={TestPage} />
                  <Route path="/events" component={EventDashboard} />
                  <Route path="/event/:id" component={EventDetailPage} />
                  <Route path="/manage/:id" component={EventForm} />
                  <Route path="/people" component={PeopleDoasboard} />
                  <Route path="/profile/:id" component={UserDetailedPage} />
                  <Route path="/settings" component={SettingsDashboard} />
                  <Route path="/createEvent" component={EventForm} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
