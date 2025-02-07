import React, { useState } from "react";
import './index.css'
import Wallet from "./temp/Wallet";
import LotteryEntry from "./temp/LotteryEntry";
import PlayersList from "./temp/PlayersList";
import WinnerDisplay from "./temp/WinnerDisplay";
import AdminControls from "./temp/AdminControls";
import Ticket from "./temp/ticket";
import Head1 from "./temp/Head1"

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
			
			<Head1/>
			<div className="connect-wallet">

				<Wallet
					account={account}
					setAccount={setAccount}
					setContract={setContract}
					setManager={setManager}
					contractAbi={CONTRACT_ABI}
					contractAddress={CONTRACT_ADDRESS}
				/>

			</div>

			<div className="ticket-container">
				<div className="ticket-pair">
					<Ticket />
					<LotteryEntry contract={contract} entry={"Entry 1"} />
				</div>
				<div className="ticket-pair">
					<Ticket />
					<LotteryEntry contract={contract} entry={"Entry 2"} />
				</div>
				<div className="ticket-pair">
					<Ticket />
					<LotteryEntry contract={contract} entry={"Entry 3"} />
				</div>


				<div className="ticket-pair">
					<Ticket />
					<LotteryEntry contract={contract} entry={"Entry 4"} />
				</div>
				<div className="ticket-pair">
					<Ticket />
					<LotteryEntry contract={contract} entry={"Entry 5"} />
				</div>
				<div className="ticket-pair">
					<Ticket />
					<LotteryEntry contract={contract} entry={"Entry 6"} />
				</div>
			</div>

			<div className="ticket-container">

			</div>


			<PlayersList contract={contract} />
			<WinnerDisplay winner={winner} />





			{account === manager && <AdminControls contract={contract} setWinner={setWinner} />}
		</div>
	);
}

export default App;
