const todoListReducer = (
    state = {
        data: [],
        page: 0,
        per_page: 0,
        total: 0,
        total_pages: 0,
    }, 
    action) => {
    switch(action.type){
        case 'ADD_EVENT': 
            let listArray = [...state.list]
            listArray.push(action.payload.data)
            return {...state, listArray};
        case 'LIST_FETCH_SUCCEEDED':
            return {...state, ...action.list};
        default:
            return state;
    }
}

export default todoListReducer;