import React from "react";
import TimeLineListItem from "../TimeLineListItem/TimeLineListItem";
import { connect } from "react-redux";

const TimeLineList = ({ repositories, Loaded, ...props }) => {
    
  if (Loaded) {
    return (
      <div>
        {repositories.map(repo => {
            console.log(repo.git_commits_url)
          return <TimeLineListItem description={repo.description} language={repo.language} repoName={repo.name} key={repo.id} date={repo.created_at} />;
        })}
      </div>
    );
  } else return null;
};

function mapStateToProps(state) {
  return {
    ...state,
    repositories: state && state.repositories.repositories,
    Loaded: state.repositories.loaded
  };
}

export default connect(mapStateToProps)(TimeLineList);