import React, { useState } from "react";
import { ethers } from "ethers";

const CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS"; // Replace with your deployed contract address
const CONTRACT_ABI = [/* Use the ABI provided earlier */];

function App() {
    const [account, setAccount] = useState(null);
    const [contract, setContract] = useState(null);
    const [players, setPlayers] = useState([]);
    const [manager, setManager] = useState("");
    const [winner, setWinner] = useState(null);
    const [isEntering, setIsEntering] = useState(false);
    const [contractBalance, setContractBalance] = useState("");

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const userAccount = await signer.getAddress();
                setAccount(userAccount);

                const lotteryContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
                setContract(lotteryContract);

                const contractManager = await lotteryContract.manager();
                setManager(contractManager);

                alert("Wallet connected successfully!");
            } catch (error) {
                console.error("Failed to connect wallet:", error);
                alert("Failed to connect wallet. Please try again.");
            }
        } else {
            alert("Please install MetaMask or another Ethereum wallet.");
        }
    };

    const enterLottery = async () => {
        if (contract) {
            try {
                setIsEntering(true);
                const tx = await contract.participate({ value: ethers.utils.parseEther("1") });
                await tx.wait();
                alert("You have entered the lottery successfully!");
                setIsEntering(false);
            } catch (error) {
                console.error("Failed to enter lottery:", error);
                alert("Failed to enter lottery.");
                setIsEntering(false);
            }
        } else {
            alert("Please connect your wallet first.");
        }
    };

    const getPlayers = async () => {
        if (contract) {
            try {
                const playersList = await contract.players();
                setPlayers(playersList);
            } catch (error) {
                console.error("Failed to get players:", error);
            }
        } else {
            alert("Please connect your wallet first.");
        }
    };

    const pickWinner = async () => {
        if (contract && account === manager) {
            try {
                const numPlayers = await contract.players().length;
                if (numPlayers < 3) {
                    alert("There must be at least 3 players to pick a winner.");
                    return;
                }
                const tx = await contract.pickWinner();
                await tx.wait();
                
                const winnerAddress = await contract.winner();
                setWinner(winnerAddress);

                alert("Winner has been picked!");
            } catch (error) {
                console.error("Failed to pick a winner:", error);
            }
        } else {
            alert("Only the manager can pick a winner.");
        }
    };

    const getBalance = async () => {
        if (contract) {
            try {
                const contractBalance = await contract.getBalance();
                setContractBalance(ethers.utils.formatEther(contractBalance));
            } catch (error) {
                console.error("Failed to fetch balance:", error);
            }
        } else {
            alert("Please connect your wallet first.");
        }
    };

    return (
        <div className="App">
            <h1>Lottery DApp</h1>

            {account ? (
                <p>Connected Account: {account}</p>
            ) : (
                <button onClick={connectWallet}>Connect Wallet</button>
            )}

            <div>
                <h2>Enter Lottery</h2>
                <button onClick={enterLottery} disabled={isEntering}>
                    {isEntering ? "Processing..." : "Enter Lottery"}
                </button>
            </div>

            <div>
                <h2>Players</h2>
                <button onClick={getPlayers}>View Players</button>
                <ul>
                    {players.map((player, index) => (
                        <li key={index}>{player}</li>
                    ))}
                </ul>
            </div>

            {account === manager && (
                <div>
                    <h2>Pick Winner</h2>
                    <button onClick={pickWinner}>Pick Winner</button>
                </div>
            )}

            <div>
                <h2>Winner: {winner ? winner : "No winner yet"}</h2>
            </div>

            {account === manager && contractBalance && (
                <div>
                    <h3>Contract Balance: {contractBalance} ETH</h3>
                    <button onClick={getBalance}>View Contract Balance</button>
                </div>
            )}

            <div>
                <h2>Contract Manager</h2>
                <p>{manager}</p>
            </div>
        </div>
    );
}

export default App;
