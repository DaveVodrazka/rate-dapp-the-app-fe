import { createSlice } from "@reduxjs/toolkit";

interface UiState {
  selectedProtocol: string | undefined;
}

const getInitialState = (): UiState => ({
  selectedProtocol: undefined,
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
