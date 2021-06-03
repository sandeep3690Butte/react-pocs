export const TodoList = (payload) => {
  return {
    type: "getDetails",
    payload: payload
  };
};

export const addToDo = (payload) => {
  return {
    type: "add",
    payload
  };
};

export const deleteToDo = (payload) => {
  return {
    type: "delete",
    payload
  };
};
