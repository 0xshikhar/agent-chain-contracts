import { ethers } from "hardhat";

async function main() {
  // Get the contract factory
  const AgentCoin = await ethers.getContractFactory("AgentCoin");

  console.log("🚀 Deploying AgentCoin Token contract...");
  // Deploy the contract
  const agentCoin = await AgentCoin.deploy(); 

  console.log("🔄 Waiting for contract deployment confirmation...");
  // Wait for contract deployment confirmation
  await agentCoin.waitForDeployment();

  // Get deployed contract address
  const contractAddress = await agentCoin.getAddress();

  console.log(
    `✅ AgentCoin Token contract deployed to: ${contractAddress}` 
  );
}

// Run the script with proper error handling
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Deployment failed:", error);
    process.exit(1);
  });
