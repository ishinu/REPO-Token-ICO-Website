const REPOToken = artifacts.require("./REPOToken.sol");
const REPOTokenSale  = artifacts.require("./REPOTokenSale.sol");

module.exports = function (deployer) {
  deployer.deploy(REPOToken,1000000).then(function(){
    var tokenPrice=1000000000000000;
    return deployer.deploy(REPOTokenSale,REPOToken.address,tokenPrice);
  });
};