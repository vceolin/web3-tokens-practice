const { ethers } = require('hardhat')

async function main() {
  const [deployer] = await ethers.getSigners()

  console.log('Deploying contracts with the account:', deployer.address)

  const Skylean = await ethers.getContractFactory('Skylean')
  const skylean = await Skylean.deploy()
  const skyleanAdress = await skylean.getAddress()

  console.log('Skylean deployed to:', skyleanAdress)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
