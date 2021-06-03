import React from "react";
import { connect } from "react-redux";
import { TodoList, addToDo, deleteToDo } from "./actions/userdetails";
import { useSelector, useDispatch } from "react-redux";

export function ReducxFunc(props) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.toDoList.todos);
  console.log("todos function", todos);
  return (
    <div>
      <h2>React-Redux integration in Functional Component using React hooks</h2>
      <ul style={{ listStyle: "none" }}>
        {todos.map((value) => (
          <li>
            <span>id: {value.id}</span>
            <span>desc:{value.desc}</span>
            <span>Status:{value.status}</span>
            <button>Add</button>
            <button>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

class ReduxClass extends React.Component {
  render() {
    return (
      <div>
        <h2>React-Redux integartion in classComponent using the Connect HOC</h2>
        <ul style={{ listStyle: "none" }}>
          {this.props.todos.map((value) => (
            <li>
              <span>id: {value.id}</span>
              <span>desc:{value.desc}</span>
              <span>Status:{value.status}</span>
              <button>Add</button>
              <button>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    TodoList: (data) => dispatch(TodoList(data)),
    addToDo: (data) => dispatch(addToDo(data)),
    deleteToDO: (data) => dispatch(deleteToDo(data))
  };
};

const mapStateToProps = (state) => {
  return {
    todos: state.toDoList.todos
  };
};

const ReduxClassComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxClass);
export default ReduxClassComponent;
