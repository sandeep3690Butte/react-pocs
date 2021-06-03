import React from "react";
import { Consumer } from "./context";
import user from "./context";

export default class ClassContext extends React.Component {
  static contextType = user;
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }
  componentDidMount() {
    this.setState({
      user: this.context
    });
  }
  render() {
    const { user } = this.state;
    return (
      <div>
        <h2>Classbased ContextHooks</h2>
        <Consumer>{(value) => <div>value is {value.age}</div>}</Consumer>
        <div>
          <span>Context Binding</span>
          <span>name: {user.name}</span>
        </div>
      </div>
    );
  }
}
