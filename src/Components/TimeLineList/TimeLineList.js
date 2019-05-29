import { Heading, Spinner } from "evergreen-ui"
import React from "react"
import { connect } from "react-redux"
import { VerticalTimeline } from "react-vertical-timeline-component"
import { acumulateByYear } from "../../Helpers/acumulator"
import TimeLineListItem from "../TimeLineListItem/TimeLineListItem"
import User from "./../User/User"

const TimeLineList = ({ repositories, repositoriesByYear, user, ...props }) => {
  if (repositories.loading) {
    return <Spinner margin="auto" marginTop={50} />
  } else if (repositories.loaded) {
    return (
      <React.Fragment>
        
        {user && 
        <User user={user} />}

        <h2 style={{ marginTop: "2rem", fontWeight: "normal" }}>
          {repositories.repositories.length} repositórios agrupados por ano de
          criação
        </h2>
        <VerticalTimeline>
          <div data-testid="timeline">
            {Object.keys(repositoriesByYear)
              .slice(0)
              .reverse()
              .map((year, index) => (
                <TimeLineListItem
                  year={`${year}`}
                  repositories={repositoriesByYear[year]}
                  key={index}
                />
              ))}
          </div>
        </VerticalTimeline>
      </React.Fragment>
    )
  }

  return <Heading size={900} marginTop="default" />
}

function mapStateToProps({ repositories, users }) {
  let repos = repositories.repositories
    .sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
    .filter(repo => !repo.private && !repo.archived && !repo.forked)
  return {
    repositoriesByYear: acumulateByYear(repos, "created_at"),

    repositories: {
      ...repositories,
      repositories: repositories.repositories
        .sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
        .filter(repo => !repo.private && !repo.archived && !repo.forked)
    },
    user: users.user
  }
}

export default connect(mapStateToProps)(TimeLineList)
