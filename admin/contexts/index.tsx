import React from 'react';
import SidebarProvider from './sidebarContext/state';

const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => (
  <SidebarProvider>{children}</SidebarProvider>
);
export default GlobalContextProvider;
