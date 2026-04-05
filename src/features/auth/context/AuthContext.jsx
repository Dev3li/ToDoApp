import { getUser } from "../services/authService";

import { createContext } from "react";
export let User = createContext(getUser);


