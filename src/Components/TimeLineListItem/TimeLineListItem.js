import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TimeLineListItem = ({
  year, repositories, ...props
}) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date={year}
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
    >
      {repositories.map(repo => (
        <React.Fragment>
          <h2 className="vertical-timeline-element-title">{repo.name}</h2>
          <h3 className="vertical-timeline-element-subtitle">{repo.description}</h3>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
        </p>
          <hr />
        </React.Fragment>
      ))}

    </VerticalTimelineElement>
  );
};

export default TimeLineListItem;
