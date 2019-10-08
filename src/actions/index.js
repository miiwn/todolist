
export const addItem = (item) => {
    return {
        type: "ADD_ITEM",
        payload: item
    }
}
export const deleteItem = (item) => {
    return {
        type: "DELETE_ITEM",
        payload: item
    }
}
export const editItem = (item) => {
    return {
        type: "EDIT_ITEM",
        payload: {
            old :item.old,
            new: item.new
        }
    }
}
export const doneItem = (item) => {
    return {
        type: "DONE_ITEM",
        payload: item
    }
}