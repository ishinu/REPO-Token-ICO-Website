# REPO Token ICO Sale Sample Project

Use this command in terminal to get this project : `git clone https://github.com/ishinu/REPO-Token-ICO-Website` 

Understand, implement and play with the logic for REPO Token and REPO Token Sale contract.

- Token contract with all the basic functionalities built from scratch. ( transfer, approve, transferfrom functions...) 
- Token sale contract with buying tokens functionality.
- Implement this project in truffle console through terminal :
  - Run Ganache in your system.
  - `npx truffle migrate` 
  - `npx truffle console`
 
With that you can run JS commands in your truffle console and see the magic happen : ( few eg. commands )

```

- REPOToken.deployed().then(function(instance){tokenInstance=instance})
- REPOTokenSale.deployed().then(function(saleinstance){tokenSaleInstance=saleinstance})
- instance.balanceOf(tokenInstance.address)
- instance.transfer(tokenSaleInstance.address,20000)
- instance.balanceOf(tokenSaleInstance.address)
- instance.transfer(accounts[1],5000)
- instance.approve(accounts[2],2000,{from:accounts[1]})
- instance.allowance(accounts[1],accounts[2])
- instance.transferFrom(accounts[1],accounts[3],1000,{from:accounts[2]})
- instance.allowance(accounts[1],accounts[2])
- instance.balanceOf(accounts[3])

```

You can even build a front end and connect with metamask to test buying functionality from website directly! 

1. [Adonis4framework](https://github.com/ishinu/ICO-Cryptocurrency-Theme) ( Front-end + Solidity ) Project in Adonis.Js(v4) framework.
2. [JS&bootstrap4](https://github.com/ishinu/Leaf-Token-ICO-Solidity-Bootstrap-5) ( Front-end + Solidity ) Project using jQuery and Bootstrap4.

With the help of truffle or deploying it to public testnet example Ropsten. [guide](https://github.com/ishinu/Re-Entrancy-Hack-Upgradeable-)

