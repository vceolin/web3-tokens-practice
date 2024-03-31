const { ethers } = require('hardhat')

async function mintNFT() {
  const [deployer] = await ethers.getSigners()

  const contractAddress = '0xA8ab01b07d7bCE3DE591243cD7598381B3867Ede'
  const tokenId = 1
  const tokenURI = 'https://ceolin.dev/'

  const SkyleanNFT = await ethers.getContractFactory('SkyleanNFT')
  const skyleanNFT = await SkyleanNFT.attach(contractAddress)

  await skyleanNFT.connect(deployer).safeMint(deployer.address, tokenId, tokenURI)
  console.log(`Token ${tokenId} minted to ${deployer.address}`)
}

mintNFT()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
