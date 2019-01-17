// this state is associated with a certain property in the Store, e.g.
// in this example, the state in the Store looks like const state = 
// { todos: { loaded: false, loading: false, data: [] } };
export const initialState = {
    loaded: false,
    loading: false,
    data: [{ label: "Eat pizza", complete: false }]
};

export function reducer(state = initialState, action: {type: string, payload: any}) {
    switch(action.type) {
        case 'ADD_TODO': {
            const todo = action.payload;
            const data = [...state.data, todo];
            return { ...state, data };
        };
    }

    return state;
}