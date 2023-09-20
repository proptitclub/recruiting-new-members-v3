import { ACTIONS } from './actions';

export const setOpenSidebar = (dispatch: any, isOpenSidebar: boolean) => {
  dispatch({ type: ACTIONS.SET_OPEN_SIDEBAR, isOpenSidebar });
};
