import React from "react";
import user from "./context";
import { Consumer } from "./context";

function FuncContext(props) {
  const users = React.useContext(user);

  return (
    <div>
      <h2>Functional component context binding</h2>
      <Consumer>
        {(value) => <div>Bing the values nested: {value.age}</div>}
      </Consumer>
      <div>
        <span>Bind value with no consumers: {users.name}</span>
      </div>
    </div>
  );
}

export default FuncContext;
