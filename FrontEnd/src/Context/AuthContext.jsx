import { createContext, useEffect, useReducer } from "react"

const InitialState = {
  user: JSON.parse(localStorage.getItem("Bookinguser")) || null,
  isFething: false,
  isError: false
}

export const AuthContext = createContext(InitialState);
// Now we create the reducers of our auth State;

const AuthContextReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START": return {
      user: null,
      isFething: true,
      isError: false,
    }
    case "LOGIN_SUCCESS": return {
      isFething: false,
      user: action.payload,
      isError: false,

    }
    case "LOGIN_FAILURE": return {
      isFething: false,
      user: null,
      isError: action.payload,
    }
    case "LOG_OUT": return {
      isFething: false,
      user: null,
      isError: null,
    }
    default: return state;
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthContextReducer, InitialState);
  useEffect(() => {
    localStorage.setItem("Bookinguser", JSON.stringify(state.user))
  }, [state.user])
  return <AuthContext.Provider value={{ user: state.user, isFething: state.isFething, isError: state.isError, dispatch }}>
    {children}
  </AuthContext.Provider>
}