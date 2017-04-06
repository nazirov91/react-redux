export const crossSelected = (item) => {

    if(item.done === false){
        return {
            type: 'CROSS_SELECTED',
            id: item.id,
            payload: {
                value: true
            }
        };
    } else {
        return {
            type: 'CROSS_SELECTED',
            id: item.id,
            payload: {
                value: false
            }
        };
    }

};