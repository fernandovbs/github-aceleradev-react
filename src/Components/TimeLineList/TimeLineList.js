import React from "react";
import TimeLineListItem from "../TimeLineListItem/TimeLineListItem";
import { connect } from "react-redux";
import { Spinner, Heading } from 'evergreen-ui'
import { VerticalTimeline } from "react-vertical-timeline-component";

const TimeLineList = ({ repositories, ...props }) => {
  
  if (repositories.loading) {
    return <Spinner margin='auto' marginTop={10}/>
  }

  if (repositories.loaded) {
    return (
      <VerticalTimeline>
        {repositories.repositories.map(repo => {
            console.log(repo.git_commits_url)
          return <TimeLineListItem description={repo.description} language={repo.language} repoName={repo.name} key={repo.id} date={repo.created_at} />;
        })}
      </VerticalTimeline>
    );
  }

  return <Heading  size={900} marginTop="default">GitHub Timeline</Heading>;
};

function mapStateToProps({repositories}) {
  return {
    repositories,
  };
}

export default connect(mapStateToProps)(TimeLineList);