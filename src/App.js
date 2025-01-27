import React, { useState } from "react";
import Wallet from "../components/Wallet";
import LotteryEntry from "../components/LotteryEntry";
import PlayersList from "../components/PlayersList";
import WinnerDisplay from "../components/WinnerDisplay";
import AdminControls from "../components/AdminControls";

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
