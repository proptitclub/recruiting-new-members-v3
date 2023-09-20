export interface SidebarContext {
  isOpenSidebar: boolean;
  setOpenSidebar?: (isOpenSidebar: boolean) => void;
}
export const INIT_STATE: SidebarContext = {
  isOpenSidebar: true,
};
