import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";
import "@nomiclabs/hardhat-solhint";

import "hardhat-deploy";
import "hardhat-deploy-ethers";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  namedAccounts: {
    deployer: {
      default: 0
    }
  },
  networks:{
    holesky:{
      url:"https://rpc.holesky.ethpandaops.io",
      accounts:{ mnemonic: process.env.MNEMONIC || "test test test test test test test test test test test junk"}
    }
  }
};

export default config;
