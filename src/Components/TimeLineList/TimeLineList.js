import { Heading, Spinner } from "evergreen-ui"
import React from "react"
import { connect } from "react-redux"
import { VerticalTimeline } from "react-vertical-timeline-component"
import { acumulateByYear } from "../../Helpers/acumulator"
import TimeLineListItem from "../TimeLineListItem/TimeLineListItem"
const TimeLineList = ({ repositories, repositoriesByYear, ...props }) => {
  if (repositories.loading) {
    return <Spinner margin="auto" marginTop={10} />
  } else if (repositories.loaded) {
    return (
      <VerticalTimeline>
        {Object.keys(repositoriesByYear)
          .slice(0)
          .reverse()
          .map(year => (
            <React.Fragment>
              <TimeLineListItem
                year={`Repositórios criados em: ${year}`}
                repositories={repositoriesByYear[year]}
              />
            </React.Fragment>
          ))}
      </VerticalTimeline>
    )
  }

  return (
    <Heading size={900} marginTop="default">
      GitHub Timeline
    </Heading>
  )
}

function mapStateToProps({ repositories }) {
  let repos = repositories.repositories.filter(
    repo => !repo.private && !repo.archived && !repo.forked
  )
  return {
    repositoriesByYear: acumulateByYear(repos, "created_at"),

    repositories: {
      ...repositories,
      repositories: repositories.repositories
        .sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
        .filter(repo => !repo.private && !repo.archived && !repo.forked)
    }
  }
}

export default connect(mapStateToProps)(TimeLineList)
