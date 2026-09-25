import { createContext, useContext } from "react";

export const PrivateAccessContext = createContext(false);

export function usePrivateAccess() {
  return useContext(PrivateAccessContext);
}
