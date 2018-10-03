const todoListReducer = (state = {list: []}, action) => {
    switch(action.type){
        case 'ADD_EVENT': 
            let listArray = [...state.list]
            listArray.push(action.payload.data)
            return {...state, listArray};
        default:
            return state;
    }
}