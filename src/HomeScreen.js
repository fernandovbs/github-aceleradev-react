import React, { useEffect } from "react";

import { connect } from "react-redux";
import { searchRepos } from "./redux/reducers/repositories";
import NavBar from "./Components/NavBar/NavBar";
import TimeLineList from "./Components/TimeLineList/TimeLineList";
const HomeScreen = ({ ...props }) => {
  const { dispatch, user, repositories } = props

  useEffect(() => {
    user && user.login && dispatch(searchRepos(user.login));
  }, [dispatch, user]);
  return (
    <div className="App">
      <NavBar />
      {repositories.loaded && (
        <TimeLineList />
      )}

    </div>
  );
};
const mapStateToProps = ({
  users, repositories
}) => {
  return {
    repositories,
    user: users.user
  };
};

export default connect(mapStateToProps)(HomeScreen);
