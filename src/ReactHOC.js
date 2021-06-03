import React from "react";

function ReactHOC(WrappedComponent, props) {
  return class Component extends React.Component {
    render() {
      return <WrappedComponent {...props} compLength={5} />;
    }
  };
}

export default ReactHOC;
