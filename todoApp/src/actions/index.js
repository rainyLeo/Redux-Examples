let todoId = 1;
export const addTodo = (text) => ({
	type: 'ADD_TODO',
	id: todoId++,
	text
});

export const deleteTodo = (id) => ({
	type: 'DELETE_TODO',
	id
});

export const editTodo = (id, text) => ({
	type: 'EDIT_TODO',
	id,
	text
});

export const completeTodo = (id) => ({
	type: 'COMPLETE_TODO',
	id
});

export const completeAll = () => ({
	type: 'COMPLETE_ALL',
});

export const clearCompleted = () => ({
	type: 'CLEAR_COMPLETED',
});

export const setVisibilityFilter = (filter) => ({
	type: 'SET_VISIBILITY',
	filter
});