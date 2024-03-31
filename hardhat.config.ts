import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import '@nomiclabs/hardhat-waffle'
import { privateKey } from './sepolia.private'

const config: HardhatUserConfig = {
  networks: {
    sepolia: {
      url: 'https://sepolia.com', // Sepolia testnet RPC URL
      accounts: [privateKey]
    }
  },
  solidity: '0.8.24'
}

export default config
