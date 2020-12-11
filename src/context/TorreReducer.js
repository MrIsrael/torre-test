const TorreReducer = (state, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return {
        ...state,
        userinfo: action.payload,
        flagDataLoaded: action.flag
      }
    default:
      return state
  }
}

export default TorreReducer
