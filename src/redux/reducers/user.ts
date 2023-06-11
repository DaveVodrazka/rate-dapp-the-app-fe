import { MetaMaskInpageProvider } from "@metamask/providers";
import { createSlice } from "@reduxjs/toolkit";
import { JsonRpcSigner } from "ethers";

interface UserData {
  provider: MetaMaskInpageProvider | undefined;
  signer: JsonRpcSigner | undefined;
  chainId: string | undefined;
  address: string | undefined;
}

const getInitialState = (): UserData => ({
  provider: undefined,
  signer: undefined,
  chainId: undefined,
  address: undefined,
});

export const userData = createSlice({
  name: "userData",
  initialState: getInitialState(),
  reducers: {
    updateUserData: (state, action: { payload: Partial<UserData> }) => {
      state = { ...state, ...action.payload };
      return state;
    },
  },
});

export const { updateUserData } = userData.actions;
