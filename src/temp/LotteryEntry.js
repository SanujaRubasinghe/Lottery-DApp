import React, { Children, useState } from "react";
import { ethers } from "ethers";

const LotteryEntry = ({ contract ,entry}) => {
    const [isEntering, setIsEntering] = useState(false);

    const enterLottery = async () => {
        if (contract) {
            try {
                setIsEntering(true);
                const tx = await contract.participate({ value: ethers.utils.parseEther("1") });
                await tx.wait();
                alert("You have entered the lottery successfully!");
            } catch (error) {
                console.error("Failed to participate:", error);
                alert("Failed to enter lottery.");
            } finally {
                setIsEntering(false);
            }
        } else {
            alert("Please connect your wallet first.");
        }
    };

    return (
        <div className="entry">
            <h2>Enter Lottery</h2>
            <button onClick={enterLottery} disabled={isEntering}>
                {isEntering ? "Processing..." : `Buy ticket 1 ETH : ${entry}`}
            </button>
            {children}
        </div>
    );
};

export default LotteryEntry;


