import { ethers } from "hardhat";

async function main() {
  console.log("🚀 Deploying AgentNFTsCollection begins!");

  // Get the contract factory
  const AgentNFTsCollection = await ethers.getContractFactory(
    "AgentNFTsCollection"
  );

  console.log("🔄 Deploying AgentNFTsCollection...");

  // Deploy the contract
  const agentNFTsCollection = await AgentNFTsCollection.deploy(); 

  console.log("🔄 Waiting for AgentNFTsCollection deployment...");

  // Wait for the contract to be deployed
  await agentNFTsCollection.waitForDeployment();

  console.log("🔄 AgentNFTsCollection deployed!");

  // Log the contract address
  console.log(
    "AgentNFTsCollection deployed to:",
    await agentNFTsCollection.getAddress()
  );
}

// Run the deployment script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
