import React from "react";
import TimeLineListItem from "../TimeLineListItem/TimeLineListItem";
import { connect } from "react-redux";
import { Spinner } from 'evergreen-ui'

const TimeLineList = ({ repositories, ...props }) => {
  
  if (repositories.loading) {
    return <Spinner margin='auto' marginTop={10}/>
  }

  if (repositories.loaded) {
    return (
      <div>
        {repositories.repositories.map(repo => {
            console.log(repo.git_commits_url)
          return <TimeLineListItem description={repo.description} repoName={repo.name} key={repo.id} date={repo.created_at} />;
        })}
      </div>
    );
  } else return <h1>Search a user first</h1>;
};

function mapStateToProps(state) {

  return {
    ...state,
    repositories: state && state.repositories,
  };
}

export default connect(mapStateToProps)(TimeLineList);