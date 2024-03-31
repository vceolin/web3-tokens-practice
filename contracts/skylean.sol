// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Skylean is ERC20 {
    address private _owner;

    constructor() ERC20("Skylean", "SKLN") {
        _owner = msg.sender;
        _mint(msg.sender, 1000000 * (10 ** uint256(decimals())));
    }

    modifier onlyOwner() {
        require(msg.sender == _owner, "Caller is not the owner");
        _;
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }
}
