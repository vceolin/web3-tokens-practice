const { ethers } = require('hardhat')

async function main() {
  const [deployer] = await ethers.getSigners()

  await deployERC20(deployer)
  await deployERC721(deployer)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

async function deployERC20(deployer) {
  console.log('Deploying ERC20 contracts with the account:', deployer.address)

  const Skylean = await ethers.getContractFactory('Skylean')
  const deployed = await Skylean.deploy()
  const skyleanAdress = await deployed.getAddress()

  console.log('Skylean deployed to:', skyleanAdress)
}

async function deployERC721(deployer) {
  console.log('Deploying ERC721 contract with the account:', deployer.address)

  const SkyleanNft = await ethers.getContractFactory('SkyleanNFT')
  const deployed = await SkyleanNft.deploy()
  const skyleanNftAdress = await deployed.getAddress()

  console.log('ERC721 contract deployed to address:', skyleanNftAdress)
}
