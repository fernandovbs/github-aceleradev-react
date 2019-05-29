import React, { useEffect, useState } from "react"
import { VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

const randomColor = require("randomcolor")

const TimeLineListItem = ({ year, repositories }) => {
  const [show, setShow] = useState(true)
  const [color, setColor] = useState("")
  const handleClick = () => setShow(!show)
  useEffect(() => {
    setColor(
      randomColor({
        luminosity: "dark",
        format: "rgba",
        alpha: 0.5
      })
    )
  }, [])
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      iconOnClick={handleClick}
      date={year}
      icon={<React.Fragment>{repositories.length}</React.Fragment>}
      iconStyle={{
        fontSize: "26px",
        background: `${color}`,
        color: "rgb(255, 255, 255)",
        cursor: "pointer",
        paddingTop: "7px"
      }}
    >
      {show ? (
        repositories.map((repo, index) => (
          <div key={index} data-testid="timeline-item">
            <h2 className="vertical-timeline-element-title">
              <a
                href={repo.html_url}
                target="_blank"
                style={{
                  color: "darkblue",
                  opacity: "0.86",
                  textDecoration: "none",
                  marginTop: "10px"
                }}
              >
                {repo.name}
              </a>
            </h2>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{
                opacity: "0.86",
                fontWeight: "normal",
                lineHeight: "1.5",
                marginBottom: "5px"
              }}
            >
              {repo.description !== null ? (
                repo.description
              ) : (
                <strike>"without description"</strike>
              )}
            </h4>
            <hr />
          </div>
        ))
      ) : (
        <br />
      )}
    </VerticalTimelineElement>
  )
}

export default TimeLineListItem
