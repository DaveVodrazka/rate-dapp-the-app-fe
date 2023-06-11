import protocolFile from "./protocols.json";
import chainsFile from "./chains.json";

export type Chain = {
  chainId: string;
  name: string;
  logo: string;
};

export type Protocol = {
  address: string;
  name: string;
  logo: string;
  chainId: string;
};

const unknownChain: Chain = {
  chainId: "0",
  name: "Unknown Chain",
  logo: "/unknown-logo.png",
};

export const chains: Chain[] = chainsFile;

export const protocols: Protocol[] = protocolFile;

export const getChain = (chainId: string): Chain =>
  chains.find((c) => c.chainId === chainId) || unknownChain;

export const getProtocol = (address: string): Protocol =>
  protocols.find((protocol) => protocol.address === address)!;

export const getContractAddress = (chainId: string): string => {
  switch (chainId) {
    case "0x1389":
      // Mantle Testnet
      return "0x7F200A7F5AE72105cd334d78AD94B556d773B209";
    case "0xa":
      // Optimism
      return "0x8AA88a8400Be771554935fDf8bD283105C4d99fa";
    default:
      return "";
  }
};
