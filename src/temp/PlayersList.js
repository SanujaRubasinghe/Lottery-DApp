import React, { useState } from "react";

const PlayersList = ({ contract }) => {
    const [players, setPlayers] = useState([]);

    const fetchPlayers = async () => {
        if (contract) {
            try {
                // Call the getPlayers function in the smart contract
                const playersList = await contract.getPlayers(); // Ensure this matches your contract
                setPlayers(playersList);
            } catch (error) {
                console.error("Failed to fetch players:", error);
                alert("Could not fetch players. Check the console for details.");
            }
        } else {
            alert("Please connect your wallet first.");
        }
    };

    return (
        <div>
            <h2>Players</h2>
            <button onClick={fetchPlayers}>View Players</button>
            <ul>
                {players.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>
        </div>
    );
};

export default PlayersList;
