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
