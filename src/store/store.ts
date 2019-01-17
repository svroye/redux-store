export class Store {

    private subscribers: Function[];
    private reducers: { [key: string]: Function };
    private state: { [key: string]: any };

    constructor(reducers = {}, initialState = {}){
        this.state = initialState;
        this.reducers = reducers;
    }

    get value() {
        return this.state;
    }

    dispatch(action) {
        // reassign the state makes it immutable
        this.state = {
            ...this.state, todos: [...this.state.todos, action.payload]
        };
        console.log(this.state);
    }
}