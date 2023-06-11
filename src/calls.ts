import { getContract } from "./contract";
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
  const contract = await getContract();

  if (!contract) {
    return;
  }

  console.log(contract);

  const res = await contract.ratingSum(
    "0xA77E4A084d7d4f064E326C0F6c0aCefd47A5Cb21"
  );

  console.log(res);
};
