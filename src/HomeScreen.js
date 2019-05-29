import React, { useEffect } from "react";
import { connect } from "react-redux";
import NavBar from "./Components/NavBar/NavBar";
import TimeLineList from "./Components/TimeLineList/TimeLineList";
import { searchRepos } from "./redux/reducers/repositories";

const HomeScreen = ({ ...props }) => {
  const { dispatch, user, repositories } = props;

  useEffect(() => {
    user && user.login && dispatch(searchRepos(user.login, "user"));
  }, [dispatch, user]);
  return (
    <div className="App" data-testid="home-screen">

      <NavBar repositories={repositories} />
      <TimeLineList />
    </div>
  );
};
const mapStateToProps = ({ users, repositories }) => {
  return {
    repositories,
    user: users.user
  };
};

export default connect(mapStateToProps)(HomeScreen);
