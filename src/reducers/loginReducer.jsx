// const initState = {
//   errorMsg: '',
// };

// export default (state = initState, action) => {
//   switch (action.type) {
//     case 'SIMPLE_ACTION':
//       return {
//         result: action.payload,
//       };
//     default:
//       return state;
//   }
// };
import * as ActionTypes from '../actions/ActionTypes';

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
export default function Auth(state = {
  isLoading: false,
  // isAuthenticated: (localStorage.getItem('token') != null),
  isAuthenticated: true,
  token: localStorage.getItem('token'),
  // user: localStorage.getItem('creds') ? JSON.parse(localStorage.getItem('creds')) : null,
  errMess: null,
}, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isAuthenticated: false,
        // user: action.creds,
      };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        errMess: null,
        token: action.token,
      };
    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        errMess: action.message,
      };
    case ActionTypes.LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isAuthenticated: true,
      };
    case ActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        token: '',
        // user: null,
      };
    default:
      return state;
  }
}
