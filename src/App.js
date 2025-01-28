import React, { useState } from "react";
import Wallet from "./temp/Wallet";
import LotteryEntry from "./temp/LotteryEntry";
import PlayersList from "./temp/PlayersList";
import WinnerDisplay from "./temp/WinnerDisplay";
import AdminControls from "./temp/AdminControls";

const CONTRACT_ADDRESS = "0xe5D68dAb0E19A3f2f7197C114C3270Ee219B79aF"; // Replace with deployed contract address
const CONTRACT_ABI = [
	{
		"inputs": [],
		"name": "participate",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pickWinner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPlayers",
		"outputs": [
			{
				"internalType": "address payable[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "manager",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "players",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "winner",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

function App() {
    const [account, setAccount] = useState(null);
    const [contract, setContract] = useState(null);
    const [manager, setManager] = useState("");
    const [winner, setWinner] = useState(null);
    

    return (
        <div className="App">
            <h1>Lottery DApp</h1>
            <Wallet 
                account={account} 
                setAccount={setAccount} 
                setContract={setContract} 
                setManager={setManager} 
                contractAbi={CONTRACT_ABI}
                contractAddress={CONTRACT_ADDRESS}
            />
            <LotteryEntry contract={contract} />
            <PlayersList contract={contract} />
            <WinnerDisplay winner={winner} />

            <h1>Prctice example for array mapping function</h1>

            

            {account === manager && <AdminControls contract={contract} setWinner={setWinner} />}
        </div>
    );
}

export default App;
