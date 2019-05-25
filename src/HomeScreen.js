import React, { useEffect } from "react";

import { connect } from "react-redux";
import { searchRepos } from "./redux/reducers/repositories";
import NavBar from "./Components/NavBar/NavBar";
import TimeLineList from "./Components/TimeLineList/TimeLineList";
const HomeScreen = ({ ...props }) => {
  useEffect(() => {
    props.dispatch(searchRepos("brognilucas"));
  }, []);
  console.log(props);
  return (
    <div className="App">
      <NavBar />
      <TimeLineList />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(HomeScreen);
