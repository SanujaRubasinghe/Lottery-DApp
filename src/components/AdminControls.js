import React from "react";

const AdminControls = ({ contract, setWinner }) => {
    const pickWinner = async () => {
        if (contract) {
            try {
                const tx = await contract.pickWinner();
                await tx.wait();
                const winnerAddress = await contract.winner();
                setWinner(winnerAddress);
                alert("Winner picked successfully!");
            } catch (error) {
                console.error("Failed to pick winner:", error);
                alert("Failed to pick a winner.");
            }
        }
    };

    return (
        <div>
            <h2>Admin Controls</h2>
            <button onClick={pickWinner}>Pick Winner</button>
        </div>
    );
};

export default AdminControls;
