import React, { useReducer } from 'react';
import { INIT_STATE, SidebarContext } from './consts';
import { setOpenSidebar } from './dispatchers';
import Reducer from './reducer';

export const SidebarCtx = React.createContext<SidebarContext>(INIT_STATE);

export default function SidebarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(Reducer, INIT_STATE);

  const setters = {
    setOpenSidebar: (isOpenSidebar: boolean) =>
      setOpenSidebar(dispatch, isOpenSidebar),
  };

  return (
    <SidebarCtx.Provider value={{ ...state, ...setters }}>
      {children}
    </SidebarCtx.Provider>
  );
}
