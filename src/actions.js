/* eslint-disable no-console */

export const ADD_NEW_TODO = "ADD_NEW_TODO";
export const TOGGLE_ITEM = "TOGGLE_ITEM";
export const DISPLAY_ITEMS = "DISPLAY_ITEMS";
export const SAVED_NEW_LIST = "SAVED_NEW_LIST";
//export const ADD_TO_DO_VALUE = "ADD_TO_DO_VALUE";

export function displayItems(){
    return {
        type: DISPLAY_ITEMS
    };
}

export function toggleItem(id){
    // Toggling the current list item
    return{
        type: TOGGLE_ITEM,
        id: id
    };
}

export function saveNewList(){
    return {
        type: SAVED_NEW_LIST
    };
}

export function addNewItem(ownProps){
    return {
        // Setting the new item to do value
        // Calling the reducers
        type: ADD_NEW_TODO,
        data: ownProps

    };
}