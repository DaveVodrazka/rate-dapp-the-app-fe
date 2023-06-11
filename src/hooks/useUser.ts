import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const useUser = () => useSelector((s: RootState) => s.userData);
