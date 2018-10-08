import React, { Component } from "react";
import axios from "axios";
import UsersList from "./UsersList.json";
import HomePage from "./HomePage/HomePage";
import LogIn from "./LogIn/LogIn";
import Register from "./Register/Register";
import CommentCaMarche from "./CommentCaMarche/CommentCaMarche";
import AddTroc from "./AddTroc/AddTroc";
import SearchTroc from "./SearchTroc/SearchTroc";
import UserProfile from "./UserProfile/UserProfile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar/NavBar.js";
import FooterPage from "./FooterPage/FooterPage";
import TrocDetail from "./TrocDetail/TrocDetail";
import Message from "./Message/Message";
import EditProfile from "./EditProfile/EditProfile";
import UserTrocList from "./UserTrocList/UserTrocList";

class App extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Data: [],
      User: []
    };
  }
  getbase(value) {
    this.setState({
      Data: value,
      User: value
    });
  }

  componentDidMount() {
    axios
      .get("/trocs")
      .then(res => this.getbase(res.data))
      .catch(err => console.log(err));
  }

  render() {
    localStorage.setItem("_id", "5bab978c1f997d1e18eabe8c");
    if (this.state.Data.length !== 0) {
      console.log("test", this.state.Data);
    }
    return (
      <Router>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <div>
                  <NavBar /*navstyle={this.state.color}*/ />
                  <HomePage />
                  <FooterPage />
                </div>
              )}
            />
            <Route
              path="/"
              render={() => (
                <div>
                  <NavBar /*navstyle={this.componentDidMount}*/ />
                  <Route path="/log-in" component={LogIn} />
                  <Route path="/register" component={Register} />
                  <Route
                    path="/comment-ca-marche"
                    component={CommentCaMarche}
                  />
                  <Route path="/add-troc" component={AddTroc} />
                  <Route
                    path="/search-troc"
                    render={() => <SearchTroc trocList={this.state.Data} />}
                  />
                  <Route
                    path="/troc-detail/:id"
                    render={props => (
                      <TrocDetail
                        trocList={this.state.Data}
                        id={props.match.params.id}
                      />
                    )}
                  />
                  <Route
                    path="/user-profile"
                    render={() => (
                      <UserProfile
                        usersList={UsersList}
                        trocList={this.state.Data}
                      />
                    )}
                  />
                  <Route path="/message" component={Message} />
                  <Route path="/edit-profile" component={EditProfile} />
                  <Route path="/user-troc-list" component={UserTrocList} />
                  <FooterPage />
                </div>
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
