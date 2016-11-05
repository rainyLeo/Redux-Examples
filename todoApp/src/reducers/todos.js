
const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        {
          text: action.text,
          completed: false,
          id: action.id
        },
        ...state
      ];
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id);
    case 'EDIT_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            text: action.text
          };
        }
        return todo;
      });
    case 'COMPLETE_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });
    case 'COMPLETE_ALL':
      const completeAll = state.every(todo => todo.completed);
      return state.map(todo => {
        return {
          ...todo,
          completed: !completeAll
        };
      });
    case 'CLEAR_COMPLETED':
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
}


