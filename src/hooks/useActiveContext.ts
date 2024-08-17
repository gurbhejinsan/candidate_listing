import { createContext, useContext } from "react";
import { IAppcontext } from "../interface/contextProps";

export const AppContext = createContext<IAppcontext>({} as IAppcontext);
export const useAppContext = () => {
  const contexts = useContext(AppContext);
  return { ...contexts };
};
