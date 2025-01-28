import React, { useState } from "react";
import Wallet from "../temp/Wallet";
import LotteryEntry from "./temp/LotteryEntry";
import PlayersList from "./temp/PlayersList";
import WinnerDisplay from "./temp/WinnerDisplay";
import AdminControls from "./temp/AdminControls";

const CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS"; // Replace with deployed contract address
const CONTRACT_ABI = [/* Your ABI Here */];

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
            {account === manager && <AdminControls contract={contract} setWinner={setWinner} />}
        </div>
    );
}

export default App;
