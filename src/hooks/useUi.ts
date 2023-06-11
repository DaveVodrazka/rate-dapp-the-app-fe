import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const useUi = () => useSelector((s: RootState) => s.uiState);