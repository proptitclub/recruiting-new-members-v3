import { ACTIONS } from './actions';

const Reducer = (state: any, action: any) => {
  const { isOpenSidebar } = action;

  switch (action.type) {
    case ACTIONS.SET_OPEN_SIDEBAR:
      return {
        ...state,
        isOpenSidebar,
      };
    default:
      return state;
  }
};
export default Reducer;
