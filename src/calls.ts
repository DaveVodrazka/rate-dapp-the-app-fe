import { getContract } from "./contract";
import { setRatingSum } from "./redux/actions";
import { store } from "./redux/store";

export const changeChain = async (chainId: string) => {
  const provider = store.getState().userData.provider;

  if (!provider) {
    return;
  }
  const res = await provider
    .request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId }], // chainId must be in hexadecimal numbers
    })
    .then((v) => console.log("THEN", v))
    .catch((v) => console.log("CATCH", v));
  console.log("chain change result", res);
};

export const getRatingData = async () => {
  const { selectedProtocol } = store.getState().uiState;
  const contract = await getContract();

  if (!contract || !selectedProtocol) {
    return;
  }

  const res = await contract.ratingSum(selectedProtocol);

  setRatingSum(res);
};
