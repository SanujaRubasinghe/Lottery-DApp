import React, { useState } from "react";

const PlayersList = ({ contract }) => {
    const [players, setPlayers] = useState([]);

    const fetchPlayers = async () => {
        if (contract) {
            try {
                const playersList = await contract.players();
                setPlayers(playersList);
            } catch (error) {
                console.error("Failed to fetch players:", error);
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
