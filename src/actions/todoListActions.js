export const addEvent = (actionData) => {
    return {
        type: 'ADD_EVENT',
        payload: {
            data: actionData.value
        }
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
 