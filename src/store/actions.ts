// action constants
export const ADD_TODO = '[Todo] Add Todo';
export const REMOVE_TODO = '[Todo] Remove Todo';


// action creator
export class AddTodo {

    readonly type = ADD_TODO;
    
    constructor(private payload: any){}

}

// action creator
export class RemoveTodo {

    readonly type = REMOVE_TODO;
    
    constructor(private payload: any){}

}