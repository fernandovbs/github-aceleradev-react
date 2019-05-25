import React from "react";
import TimeLineListItem from "../TimeLineListItem/TimeLineListItem";
import { connect } from "react-redux";
import { Spinner, Heading } from 'evergreen-ui'
import { VerticalTimeline } from "react-vertical-timeline-component";
import { acumulateByYear } from '../../Helpers/acumulator'
const TimeLineList = ({ repositories, repositoriesByYear, ...props }) => {
  if (repositories.loading) {
    return <Spinner margin='auto' marginTop={10} />
  }
  if (repositories.loaded) {
    return (
      <VerticalTimeline>

        {Object.keys(repositoriesByYear).map((year) => (
          <React.Fragment>

            <TimeLineListItem
              year={year} repositories={repositoriesByYear[year]}
            />
          </React.Fragment>
        ))}

      </VerticalTimeline>
    );
  }

  return <Heading size={900} marginTop="default">GitHub Timeline</Heading>;
};

function mapStateToProps({ repositories }) {
  let repos = repositories.repositories.filter((repo) => !repo.private && !repo.archived && !repo.forked)
  return {
    repositoriesByYear: acumulateByYear(repos, 'created_at')
    
    ,
    repositories: {
      ...repositories,
      repositories: repositories.repositories.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at)).filter((repo) => !repo.private && !repo.archived && !repo.forked)
    }
  };
}

export default connect(mapStateToProps)(TimeLineList);