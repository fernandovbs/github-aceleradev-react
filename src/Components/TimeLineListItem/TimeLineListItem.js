import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TimeLineListItem = props  => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date={props.date}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h2 className="vertical-timeline-element-title">{props.repoName}</h2>
        <h3 className="vertical-timeline-element-subtitle">{props.description}</h3>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default TimeLineListItem;
