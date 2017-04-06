export const deleteItem = (item) => {
    return {
        type: 'DELETE_ITEM',
        payload: item
    };
};