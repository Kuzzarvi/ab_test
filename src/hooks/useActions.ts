import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import ActionCreators from "../store/action-creators";

type ActionCreatorsType = typeof ActionCreators;

export const useActions = (): ActionCreatorsType => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};
