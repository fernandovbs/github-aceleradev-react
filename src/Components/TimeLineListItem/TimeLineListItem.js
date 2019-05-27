import React, { useState, useEffect } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const randomColor = require("randomcolor");

const TimeLineListItem = ({ year, repositories }) => {
  const [show, setShow] = useState(true);
  const [color, setColor] = useState("");
  const handleClick = e => setShow(!show);
  useEffect(() => {
    setColor(
      randomColor({
        luminosity: "dark",
        format: "rgba",
        alpha: 0.5
      })
    );
  }, []);
  return (
    <React.Fragment>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconOnClick={handleClick}
          date={year}
          icon={<React.Fragment>{repositories.length}</React.Fragment>}
          iconStyle={{
            fontSize: "28px",
            background: `${color}`,
            color: "rgb(255, 255, 255)",
            marginTop: "20px",
            cursor: 'pointer'
          }}
        >
          {show ? repositories.map((repo, index) => (
            <div key={index}>
              <h2 className="vertical-timeline-element-title"><a href={repo.html_url} target="_blank">{repo.name}</a></h2>
              <h3 className="vertical-timeline-element-subtitle">
                {repo.description}
              </h3>
              <hr />
            </div>
          ))
          : <br />}
        </VerticalTimelineElement>
    </React.Fragment>
  );
};

export default TimeLineListItem;
