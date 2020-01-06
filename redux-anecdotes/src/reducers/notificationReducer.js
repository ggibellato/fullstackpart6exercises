const reducer = (state = '', action) => {
  switch (action.type) {
    case 'SETMESSAGE':
      return action.data.message
    default:
      return state
  }
}

export const setNotification = (message, timeToDisplay) => {
  return async dispatch => {
    dispatch({
      type: 'SETMESSAGE',
      data: { message }
    })
    setTimeout(() => {
      dispatch({
        type: 'SETMESSAGE',
        data: { message: '' }
      })
    }, timeToDisplay * 1000)
  }
}

export default reducer