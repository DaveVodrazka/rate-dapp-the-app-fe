import { setAddress, setChainId, setProvider } from "./redux/actions";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { store } from "./redux/store";

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

const initProvider = () => {
  if (window.ethereum) {
    setProvider(window.ethereum);
  }
};

export const initChainId = async (cb?: (chainId: string) => void) => {
  const provider = store.getState().userData.provider;
  if (provider) {
    const chainId = await provider.request({ method: "eth_chainId" });
    if (chainId) {
      setChainId(chainId as string);
      if (cb) {
        cb(chainId as string);
      }
    }
    provider.on("chainChanged", (chainId) => {
      console.log("Chain id changed", chainId);
      setChainId(chainId as string);
    });
  }
};

const handleAddressChanged = (data: unknown) => {
  if (!data) {
    return;
  }
  const accounts = data as string[];
  const currentAccount = store.getState().userData.address;
  if (accounts.length === 0) {
    console.log("Please connect to MetaMask.");
  } else if (accounts[0] !== currentAccount) {
    setAddress(accounts[0]);
  }
};

const initAddress = () => {
  const provider = store.getState().userData.provider;
  if (!provider) {
    return;
  }
  provider
    .request({ method: "eth_accounts" })
    .then(handleAddressChanged)
    .catch((err) => {
      console.error(err);
    });

  provider.on("accountsChanged", handleAddressChanged);
};

export const setupUser = async () => {
  initProvider();
  initChainId();
  initAddress();
};
