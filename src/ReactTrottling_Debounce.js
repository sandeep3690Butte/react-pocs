import React from "react";

function ReactTrottling(props) {
  const [debounce, setDebounce] = React.useState();
  const [normal, setNormal] = React.useState();
  const [trottling, setTrottling] = React.useState();

  let timer = 0;
  let timerTrottling;
  const handleChange = (event, action) => {
    const { value } = event.target;
    setNormal(value);
    action === 1 ? ReactDebounce(value) : reactTrottle(value);
  };

  const ReactDebounce = (value) => {
    console.log("inside before debounce", value);
    clearTimeout(timer);
    timer = setTimeout(() => setDebounce(value), 1000);
  };

  const reactTrottle = (value) => {
    if (timerTrottling) {
      return;
    }
    timerTrottling = setTimeout(() => {
      setTrottling(value);
      timerTrottling = undefined;
    }, 1000);
  };
  return (
    <div>
      <h3>Deboune in js</h3>
      <div>
        <input type="text" onChange={(event) => handleChange(event, 1)} />
        <div>
          <div>Normal Values: {normal}</div>
          <div>Debounce Values: {debounce}</div>
        </div>
      </div>
      <div>
        <h3>Trottling in js</h3>
        <div>
          <input type="text" onChange={(event) => handleChange(event, 2)} />
          <div>
            <div>Normal Values: {normal}</div>
            <div>Debounce Values: {trottling}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReactTrottling;
