const todos = [
  { id: 1, desc: "Task1", status: "progress" },
  { id: 2, desc: "Task2", status: "complete" },
  { id: 3, desc: "Task3", status: "progress" },
  { id: 4, desc: "Task4", status: "complete" },
  { id: 5, desc: "Task5", status: "progress" }
];

const toDoList = (state = { todos }, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case "getDetails":
      return { ...state };
    case "add":
      state.todos.push(payload);
      return { ...state };
    case "delete":
      const index = state.todos.findIndex((val) => val.id === payload);
      state.todos.splice(index, 1);
      return { ...state };
    default:
      return { ...state };
  }
};

export default toDoList;
