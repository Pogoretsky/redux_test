const todoListReducer = (
    state = {
        fetchStatus: null,
        data: [],
        page: 0,
        per_page: 0,
        total: 0,
        total_pages: 0,
    }, 
    action) => {
    switch(action.type){
        case 'ADD_EVENT': 
            let listArray = [...state.data]
            let newItem = {id: action.payload.id, first_name: action.payload.data, last_name: ''}
            listArray.push(newItem)
            return {...state, data: listArray};
        case 'DELETE_EVENT': 
            let eventArray = [...state.data]
            let eventIndex = eventArray.findIndex(item => item.id === action.id)
            eventArray.splice(eventIndex, 1)
            return {...state, data: eventArray};
        case 'SET_FETCH_STATUS':
            return {...state, fetchStatus: action.status}
        case 'LIST_FETCH_SUCCEEDED':
            return {...state, ...action.list, fetchStatus: 'successful'};
        default:
            return state;
    }
}

export default todoListReducer;