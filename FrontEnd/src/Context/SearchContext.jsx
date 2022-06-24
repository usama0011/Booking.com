import { createContext, useReducer } from "react"

// Now we Create our State of Search Context;
const INITIAL_STATE = {
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined
  }
}

// Now we Create the Actual State Context;

export const SearchContext = createContext(INITIAL_STATE);

// Now we Create thre reducers of our Search Context 

const SearchContextReducers = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH": return action.payload;
    case "RESET_SEARCH": return action.payload;
    default: return state;
  }
}

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchContextReducers, INITIAL_STATE);
  console.log(state);
  return <SearchContext.Provider value={{ city: state.city, dates: state.dates, options: state.options, dispatch }}>
    {children}
  </SearchContext.Provider>
}