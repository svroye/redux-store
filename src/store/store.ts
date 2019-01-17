export class Store {

    private subscribers: Function[];
    private reducers: { [key: string]: Function };
    private state: { [key: string]: any };

    constructor(reducers = {}, initialState = {}){
        this.subscribers = [];
        this.reducers = reducers;
        this.state = this.reduce(initialState, {});
    }

    get value() {
        return this.state;
    }

    subscribe(fn) {
        this.subscribers = [...this.subscribers, fn];
        this.notify();
        return () => this.subscribers = this.subscribers.filter(item => item !== fn);
    }

    dispatch(action) {
        // reassign the state to make it immutable
        this.state = this.reduce(this.state, action);
        this.notify();
    }

    private notify() {
        this.subscribers.forEach( fn => {
            fn(this.value);
        });
    }

    private reduce(state, action){
        const newState = {};
        for (const prop in this.reducers) {
            // copy the key name, call the corresponding reducer function
            // and pass it only the state which it needs (!) and the action
            newState[prop] = this.reducers[prop](state[prop], action);
        }
        return newState;
    }
}