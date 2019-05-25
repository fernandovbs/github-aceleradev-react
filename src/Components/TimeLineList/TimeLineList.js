import React from "react";
import TimeLineListItem from "../TimeLineListItem/TimeLineListItem";
import { connect } from "react-redux";
import { Spinner, Heading } from 'evergreen-ui'
import { VerticalTimeline } from "react-vertical-timeline-component";
import { acumulateByYear } from '../../Helpers/acumulator'
const TimeLineList = ({ repositories , repositoriesByYear , ...props }) => {
  if (repositories.loading) {
    return <Spinner margin='auto' marginTop={10} />
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

  return <Heading size={900} marginTop="default">GitHub Timeline</Heading>;
};

function mapStateToProps({ repositories }) {
  return {
    repositoriesByYear: acumulateByYear(repositories.repositories, 'created_at'),
    repositories: {
      ...repositories,
      repositories: repositories.repositories.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at)).filter((repo) => !repo.private && !repo.archived && !repo.forked)
    }
  };
}

export default connect(mapStateToProps)(TimeLineList);