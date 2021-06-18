let id = 2;
const initialState = [{
        id: 1,
        title: "faire le truc",
        completed: false
    },
    {
        id: 2,
        title: "faire la chose",
        completed: false
    }

]
export const ADD_TODO_ACTION = 'ADD_TODO_ACTION'
export function todosReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO_ACTION:
            return [...state, { id: id++, completed: false, ...action.payload }]
        default:
            return state
    }
}