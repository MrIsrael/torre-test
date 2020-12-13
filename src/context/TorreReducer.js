const TorreReducer = (state, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return {
        ...state,
        userinfo: action.payload,
        flagDataLoaded: action.flag
      }
    case 'RESET_USER_INFO':
      return {
        ...state,
        userinfo: action.payload
      }
    default:
      return state
  }
}

export default TorreReducer
