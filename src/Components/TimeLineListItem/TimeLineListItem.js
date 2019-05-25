import moment from "moment"
import React from "react"
import { VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

const TimeLineListItem = props => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date={`Criado em: ${moment(props.date).format("DD/MM/YYYY HH:MM")}`}
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
    >
      <h2 className="vertical-timeline-element-title">{props.repoName}</h2>
      <h3 className="vertical-timeline-element-subtitle">
        {props.description}
      </h3>
      <p>
        Creative Direction, User Experience, Visual Design, Project Management,
        Team Leading
      </p>
    </VerticalTimelineElement>
  )
}

export default TimeLineListItem
