import update from 'immutability-helper';

export default (state = list, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.payload,
                    done: false
                }
            ];
            break;
        case 'DELETE_ITEM': return state.filter(element => element !== action.payload);
            break;
        case 'CROSS_SELECTED':
            return update(state, {
                [action.id]: {done: {$set: action.payload.value}}
            });
            break;
        default:
            return state;
    }


}

let list = [
    {
        id: 0,
        name: 'Tomato',
        done: false
    },
    {
        id: 1,
        name: 'Potato',
        done: false
    }
];