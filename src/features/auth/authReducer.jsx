import { setAccounts, getAccounts, setUser } from "./services/authService";
export function Reducer(state, action) {
  let newAccounts = [
    ...state,
    {
      id: action.id,
      email: action.email,
      name: action.name,
      password: action.password,
    },
  ];
  setAccounts(newAccounts);
  return newAccounts;
}

let Accounts = getAccounts();
export function LoginReducer(state, action) {
  if (action.type === "") {
    state = null;
    return state;
  }

  for (let i = 0; i < Accounts.length; i++) {
    if (Accounts[i].email === action.email) {
      if (Accounts[i].password === action.password) {
        setUser(Accounts[i]);
        state = "good";
        return state;
      } else {
        setUser({});
        state = "Error on Email or password";
        return state;
      }
    }
  }
  setUser({});
  state = "You Not Have Account!";
  return state;
}
