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

export const chains: Chain[] = [
  {
    chainId: "0x1389",
    name: "Mantle Testnet",
    logo: "/unknown-logo.png",
  },
  {
    chainId: "0x89",
    name: "Polygon Mainnet",
    logo: "https://icons.llamao.fi/icons/chains/rsz_polygon.jpg",
  },
  {
    chainId: "0x5",
    name: "Goerli",
    logo: "/unknown-logo.png",
  },
  {
    chainId: "0x28c5d",
    name: "Taiko (Alpha-3 Testnet)",
    logo: "/unknown-logo.png",
  },
  {
    chainId: "0xa",
    name: "Optimism",
    logo: "/unknown-logo.png",
  },
];

export const protocols: Protocol[] = [
  {
    address: "0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d",
    name: "Lens Protocol",
    chainId: "0x89",
    logo: "bla.png",
  },
  {
    address: "0xA77E4A084d7d4f064E326C0F6c0aCefd47A5Cb21",
    name: "AAVE",
    chainId: "0xa",
    logo: "bla.png",
  },
  {
    address: "0x272465431A6b86E3B9E5b9bD33f5D103a3F59eDb",
    name: "fusionx",
    chainId: "0x1389",
    logo: "mantle.png",
  },
  {
    address: "0xC13e21B648A5Ee794902342038FF3aDAB66BE987",
    name: "Spark",
    chainId: "0x1",
    logo: "bla.png",
  },
  {
    address: "0x123",
    name: "Dull Dog",
    chainId: "0x1",
    logo: "nasrat.png",
  },
  {
    address: "0x321",
    name: "Cute Cat",
    chainId: "0x1",
    logo: "nasrat.png",
  },
  {
    address: "0x456",
    name: "Girthy Giraffe",
    chainId: "0x89",
    logo: "nasrat.png",
  },
  {
    address: "0x666",
    name: "Scamy Finance",
    chainId: "0x5",
    logo: "nasrat.png",
  },
  {
    address: "0x667",
    name: "Facebook but worse",
    chainId: "0x5",
    logo: "nasrat.png",
  },
  {
    address: "0x765",
    name: "Linkedout",
    chainId: "0x28c5d",
    logo: "nasrat.png",
  },

  {
    address: "0x12345",
    name: "Dapp A",
    chainId: "0xa",
    logo: "nasrat.png",
  },
  {
    address: "0x1235",
    name: "Dapp B",
    chainId: "0xa",
    logo: "nasrat.png",
  },
  {
    address: "0x1245",
    name: "Dapp C",
    chainId: "0xa",
    logo: "nasrat.png",
  },

  {
    address: "0xabc",
    name: "Mantle Dapp",
    chainId: "0x1389",
    logo: "nasrat.png",
  },
  {
    address: "0x11abc",
    name: "Cool Dapp",
    chainId: "0x1389",
    logo: "nasrat.png",
  },
  {
    address: "0x21abc",
    name: "Defi Dapp",
    chainId: "0x1389",
    logo: "nasrat.png",
  },
];

export const getChain = (chainId: string): Chain =>
  chains.find((c) => c.chainId === chainId) || unknownChain;

export const getProtocol = (address: string): Protocol =>
  protocols.find((protocol) => protocol.address === address)!;
