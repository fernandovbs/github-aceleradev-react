import React, { useState } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TimeLineListItem = ({ year, repositories }) => {
  const [show, setShow] = useState(true);
  const handleClick = e => setShow(!show);
  return (
    <React.Fragment>
      {show && (
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconOnClick={handleClick}
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
            <div key={index}>
              <h2 className="vertical-timeline-element-title">{repo.name}</h2>
              <h3 className="vertical-timeline-element-subtitle">
                {repo.description}
              </h3>
              <hr />
            </div>
          ))}
        </VerticalTimelineElement>
      )}
      {!show && (
        <React.Fragment>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date={year}
            iconOnClick={handleClick}
            icon={<React.Fragment>{repositories.length}</React.Fragment>}
            iconStyle={{
              fontSize: "28px",
              background: "black",
              color: "rgb(255, 255, 255)",
              marginTop: "20px"
            }}
          />
          <br />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default TimeLineListItem;
