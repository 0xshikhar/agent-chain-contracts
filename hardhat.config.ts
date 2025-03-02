import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: "0.8.20",

  networks: {
    hardhat: {
      chainId: 1337,
    },
    
    aurora_testnet: {
      url: process.env.AURORA_TESTNET_URL || (() => { throw new Error("AURORA_TESTNET_URL is not defined"); })(),
      accounts: [process.env.PRIVATE_KEY || (() => { throw new Error("PRIVATE_KEY is not defined"); })()],
    },
    agentchain_mainnet: {
      url: process.env.AGENTCHAIN_MAINNET_URL || (() => { throw new Error("AGENTCHAIN_MAINNET_URL is not defined"); })(),
      accounts: [process.env.PRIVATE_KEY || (() => { throw new Error("PRIVATE_KEY is not defined"); })()],
    },
  },
};

export default config;
