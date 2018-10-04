export const addEvent = (actionData) => {
    return {
        type: 'ADD_EVENT',
        payload: {
            id: actionData.id,
            data: actionData.value
        }
    }
}

export const deleteEvent = (id) => {
    return {
        type: 'DELETE_EVENT',
        id: id
    }
}

export const fetchList = (actionData) => {
    return {
        type: 'TODO_LIST_FETCH_REQUESTED',
        payload: {
            url: actionData
        }
    }
}

export const setFetchStatus = (status) => {
    return {
        type: 'SET_FETCH_STATUS',
        payload: {
            status: status
        }
    }
}
 