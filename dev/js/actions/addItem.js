export const addItem = (item) => {
    console.log('Item added ', item);
    return {
        type: 'ADD_ITEM',
        payload: item
    };
};