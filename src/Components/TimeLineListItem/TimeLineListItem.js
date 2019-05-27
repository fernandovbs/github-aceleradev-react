import React from "react"
import { VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

const TimeLineListItem = ({ year, repositories, ...props }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date={year}
      icon={<React.Fragment>{repositories.length}</React.Fragment>}
      iconStyle={{
        fontSize: "28px",
        background: "black",
        color: "rgb(255, 255, 255)",
        marginTop: "20px"
      }}
    >
      {repositories.map((repo, index) => (
        <div key={index} data-testid="timeline-item">
          <h2 className="vertical-timeline-element-title">{repo.name}</h2>
          <h3 className="vertical-timeline-element-subtitle">
            {repo.description}
          </h3>
          <hr />
        </div>
      ))}
    </VerticalTimelineElement>
  )
}

export default TimeLineListItem
