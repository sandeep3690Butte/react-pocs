import "./styles.css";
import React from "react";
import { createStore } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import reducers from "./reducers";

import { Provider } from "./context";
import ClassContext from "./ClassContext";
import FuncContext from "./FuncContext";
import ReactHOC from "./ReactHOC";
import ReactTrottling from "./ReactTrottling_Debounce";
import ReduxClassComponent, { ReducxFunc } from "./ReactReduxExample";
import Routes from "./Routing";
import Clock from "./Clock";
import QRCodeGenrator from "./QRCode";

const store = createStore(reducers);
console.log("store", store.getState());
const ReactHigherOrder = ReactHOC(
  function HigherOrder(props) {
    return (
      <div>
        <h2>Higher Order function: {props.compLength}</h2>
      </div>
    );
  },
  { color: "blue" }
);

class ReactRefs extends React.Component {
  constructor(props) {
    super(props);
    this.myref = React.createRef();
  }

  changeColors = () => {
    const color = [
      "red",
      "yellow",
      "blue",
      "orange",
      "#9345d2",
      "purple",
      "violent",
      "black"
    ];
    const selectedColor =
      color[Math.floor((Math.random() * 100) % 5)] || "green";
    const bgColor = color[Math.floor((Math.random() * 100) % 5)] || "#cec3c8";
    console.log("selectedcolor", selectedColor);
    this.myref.current.style.color = selectedColor;
    this.myref.current.style.background = bgColor;
  };

  render() {
    return (
      <div>
        <h2 ref={this.myref} onClick={() => this.changeColors()}>
          React Ref's
        </h2>
      </div>
    );
  }
}

export default function App() {
  return (
    <ReduxProvider store={store}>
      <Provider value={{ age: 20, name: "context" }}>
        <div className="App">
          <h2>React POC'S</h2>
          <Routes />
          <Clock />
          <QRCodeGenrator />
          <ClassContext />
          <FuncContext />
          <ReactHigherOrder />
          <ReactRefs />
          <ReactTrottling />
          <ReduxClassComponent />
          <ReducxFunc />
        </div>
      </Provider>
    </ReduxProvider>
  );
}
