import { TOGGLE_ITEM, ADD_NEW_TODO, SAVED_NEW_LIST } from "./actions";

export default function reducers(state, action) {
    let modifiedState = Object.assign({}, state);

    switch(action.type) {
    case TOGGLE_ITEM:
        let todoList = modifiedState.todoList.map((item) => {
            if(item.id == action.id){
                return Object.assign({}, item, {status: (item.status) ? 0 :1});
            } else {
                return Object.assign({}, item);
            }
        });
        modifiedState.todoList = [...todoList];
        break;
    case ADD_NEW_TODO:
        let newItem = action.data;
        modifiedState.addTodoValue = newItem;
        break;
    case SAVED_NEW_LIST:
        let newList = modifiedState.todoList;
        let newTodoItem = {};
        const lastId = newList[newList.length-1].id;
        newTodoItem.id = lastId+1;
        newTodoItem.key = lastId+1;
        newTodoItem.text = modifiedState.addTodoValue;
        newTodoItem.status = 0;
        newList.push(newTodoItem);
        modifiedState.todoList = [...newList];
        break;
    default:
        return state;
    }

    return modifiedState;
}