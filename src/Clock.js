import React from "react";

export default function Clock() {
  const [state, setState] = React.useState({
    time: "",
    timeFormat: 0
  });
  const [format, setFormat] = React.useState(0);
  const formatDate = (date) => {
    let hours = date.getHours();
    let stats = "";
    if (format === "0") {
      if (hours > 12) {
        hours -= 12;
        stats = "PM";
      } else {
        stats = "AM";
      }
    }
    return `${hours}:${date.getMinutes()}:${date.getSeconds()}${stats}`;
  };

  const handleFormatChange = (value) => {
    setFormat(value);
  };

  const fetchTime = () => {
    return setTimeout(() => {
      const currentTime = formatDate(new Date());
      setState({ ...state, time: currentTime, timeFormat: format });
    }, 1000);
  };

  React.useEffect(() => {
    return fetchTime();
  }, [state]);

  return (
    <div className="clock-container">
      <span>CurrentTime: {state.time}</span>
      <span>
        <select
          onChange={(event) => handleFormatChange(event.target.value)}
          style={{ margin: "0 10px" }}
          value={state.timeFormat}
        >
          <option value={0}>12hrs format</option>
          <option value={1}>24hrs format</option>
        </select>
      </span>
    </div>
  );
}
