import React, { useEffect } from "react";

import { connect } from "react-redux";
import { searchRepos } from "./redux/reducers/repositories";
import NavBar from "./Components/NavBar/NavBar";
import TimeLineList from "./Components/TimeLineList/TimeLineList";
const HomeScreen = ({ ...props }) => {
  const { dispatch, user } = props

  useEffect(() => {
    user && user.login && dispatch(searchRepos(user.login));
  }, [dispatch, user]);
  return (
    <div className="App">
      <NavBar />
      <TimeLineList />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    ...state,
   user: state.users.user
  };
};

export default connect(mapStateToProps)(HomeScreen);
