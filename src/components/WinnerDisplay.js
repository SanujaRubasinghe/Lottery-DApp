import React from "react";

const WinnerDisplay = ({ winner }) => {
    return (
        <div>
            <h2>Winner: {winner ? winner : "No winner yet"}</h2>
        </div>
    );
};

export default WinnerDisplay;
