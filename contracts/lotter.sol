// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Lottery {
    // Entities - manager, players, and winner
    address public manager;
    address payable[] public players;
    address payable public winner;

    constructor() {
        manager = msg.sender;
    }

    function participate() public payable {
        require(msg.value == 1 ether, "Please pay 1 ether only");
        players.push(payable(msg.sender));
    }

    function getBalance() public view returns (uint) {
        require(manager == msg.sender, "You are not the manager");
        return address(this).balance;
    }

    function getPlayers() public view returns (address payable[] memory) {
        return players; // Return the entire array
    }

    function random() internal view returns (uint) {
        return uint(keccak256(abi.encodePacked(block.timestamp, block.number, players.length)));
    }

    function pickWinner() public {
        require(manager == msg.sender, "You are not the manager");
        require(players.length >= 3, "Players are less than 3");
        uint r = random();
        uint index = r % players.length;
        winner = players[index];
        winner.transfer(getBalance());
        delete players; // Correct way to reset the array
    }
}
