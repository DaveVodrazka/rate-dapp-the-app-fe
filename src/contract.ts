import { ethers } from "ethers";
import abi from "./abi/abi.json";
import { store } from "./redux/store";

export const getContract = async () => {
  const { provider, address } = store.getState().userData;

  if (!provider || !address) {
    return;
  }

  const prov = new ethers.BrowserProvider(provider);

  const signer = await prov.getSigner(address);

  const contract = new ethers.Contract(
    "0xE26FF0C2e86e985b26200F715f5ae71103055478",
    abi,
    signer
  );

  return contract;
};
