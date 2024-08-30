const { ethers } = require("hardhat");

async function main() {
  const perc20 = await ethers.deployContract("PERC20Token");
  await perc20.waitForDeployment();
  const deployedContract = await perc20.getAddress();
  
  console.log(`PERC20Token was deployed to ${deployedContract}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});