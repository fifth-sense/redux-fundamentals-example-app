import todoReducer from "./todoSlice";

test('Toggle a todo based on id', ()=>{
    const initialState = [{id: 1, text: "Test text", completed: false}];
    const action = {type: "todos/todoToggled", payload: 0}
    const result = todoReducer(initialState, action)
    expect(result[0].completed).toBe(false)
})
