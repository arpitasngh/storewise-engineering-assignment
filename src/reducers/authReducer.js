const initialState = {
  token: localStorage.getItem('token'), // Retrieve token from localStorage if present
  isAuthenticated: null,
  loading: true, // Assume loading is true until we verify the user
  user: null,
};

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'USER_LOADED':
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload, // User data from the server
      };

    case 'REGISTER_SUCCESS':
    case 'LOGIN_SUCCESS':
      localStorage.setItem('token', payload.token); // Store token in localStorage
      return {
        ...state,
        token: payload.token,
        isAuthenticated: true,
        loading: false,
      };

    case 'REGISTER_FAIL':
    case 'LOGIN_FAIL':
    case 'AUTH_ERROR':
    case 'LOGOUT':
      localStorage.removeItem('token'); // Remove token from localStorage on failure/logout
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };

    case 'SET_LOADING':
      return {
        ...state,
        loading: payload, // Set loading state explicitly
      };

    default:
      return state; // Return the current state by default
  }
}
