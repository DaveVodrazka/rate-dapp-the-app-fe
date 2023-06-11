import { store } from "./store";
import { JsonRpcSigner } from "ethers";
import { updateUserData } from "./reducers/user";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { updateUiState } from "./reducers/ui";

export const setProvider = (provider: MetaMaskInpageProvider) =>
  store.dispatch(updateUserData({ provider }));

export const setSigner = (signer: JsonRpcSigner) =>
  store.dispatch(updateUserData({ signer }));

export const setChainId = (chainId: string) =>
  store.dispatch(updateUserData({ chainId }));

export const setAddress = (address: string) =>
  store.dispatch(updateUserData({ address }));

export const setSelectedProtocol = (address: string) =>
  store.dispatch(updateUiState({ selectedProtocol: address }));

export const setRatingSum = (sum: string) =>
  store.dispatch(updateUiState({ ratingSum: sum }));
