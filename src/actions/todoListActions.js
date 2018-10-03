export const addEvent = (actionData) => {
    return {
        type: 'ADD_EVENT',
        payload: {
            data: actionData.value
        }
    }
}

 