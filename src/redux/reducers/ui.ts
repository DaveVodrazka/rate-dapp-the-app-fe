import { createSlice } from "@reduxjs/toolkit";

interface UiState {
  selectedProtocol: string | undefined;
  ratingSum: string;
}

const getInitialState = (): UiState => ({
  selectedProtocol: undefined,
  ratingSum: "",
});

export const uiState = createSlice({
  name: "uiState",
  initialState: getInitialState(),
  reducers: {
    updateUiState: (state, action: { payload: Partial<UiState> }) => {
      state = { ...state, ...action.payload };
      return state;
    },
  },
});

export const { updateUiState } = uiState.actions;
