
var IPSNFT = artifacts.require("IPSNFT");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(
    IPSNFT,
    "Island Paradise Shareholder NFT", 
    "IPSNFT", 
    "ipfs://QmfCFbvnypykYPmFsByqBTsZzUEymBvynVLzmnd8agMw76", 
    "ipfs://QmfCFbvnypykYPmFsByqBTsZzUEymBvynVLzmnd8agMw76");
};