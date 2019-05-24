export const Types = {
    GET_USERS: 'users/GET_USERS',
    SET_USERS: 'users/SET_USERS',
    SET_USER: 'users/SET_USER',
    RESET_USER: 'users/RESET_USER'
  }

  const defaultState = {
    suggestions: [],
    user: {},
  }

  export default function repositories(state = defaultState, action) {
    switch (action.type) {
/*      case Types.GET_USERS:
        return {
          ...state,
          ...action.users
        }*/
      case Types.SET_USERS:
        return {
          ...state,
          suggestions: action.users
        }        

      case Types.RESET_USER:
        return state
      default:
        return state
    }
  }
  
  export const searchUsers = (searchString) => {
    console.log(searchString)
    return { 
      type: Types.GET_USERS,
      searchString
    }
  }