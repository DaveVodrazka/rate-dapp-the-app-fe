import { ethers } from "ethers";
import abi from "./abi/abi.json";
import { store } from "./redux/store";
import { getContractAddress } from "./chains";

export const getContract = async () => {
  const { provider, address, chainId } = store.getState().userData;

  if (!provider || !address || !chainId) {
    return;
  }

  const contractAddress = getContractAddress(chainId);

  const prov = new ethers.BrowserProvider(provider);

  const signer = await prov.getSigner(address);

  const contract = new ethers.Contract(contractAddress, abi, signer);

  return contract;
};
