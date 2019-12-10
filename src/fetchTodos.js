import { actionCreators } from "TodoListRedux";

const API_URL = "http://5def23a2e17c8300140d7e1b.mockapi.io/api/todos";

function fetchTodos() {
  return dispatch => {
    dispatch(actionCreators.fetchTodosPending());
    fetch(API_URL)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(actionCreators.fetchTodosSuccess(res.json()));
        return res.json();
      })
      .catch(error => {
        dispatch(actionCreators.fetchTodosError(error));
      });
  };
}

export default fetchTodos;
