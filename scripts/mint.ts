import { ethers } from 'hardhat'
import { SkyleanNFT } from '../typechain-types'

async function mintNFT() {
  const [deployer] = await ethers.getSigners()

  const contractAddress = '0xfA8f36d92cAe11841Cf902C148Ff75AfC73DfD1A'
  const tokenURI = 'https://ceolin.dev/'

  // Cast skyleanNFT to the SkyleanNFT type
  const skyleanNFT = (await ethers.getContractAt('SkyleanNFT', contractAddress)) as SkyleanNFT

  const mint = await skyleanNFT.connect(deployer).safeMint(deployer.address, tokenURI)
  console.log(mint.data)
}

mintNFT()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
