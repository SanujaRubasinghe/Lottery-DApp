import React from "react";
import { ethers } from "ethers";

const Wallet = ({ account, setAccount, setContract, setManager, contractAbi, contractAddress }) => {
    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const userAccount = await signer.getAddress();
                const lotteryContract = new ethers.Contract(contractAddress, contractAbi, signer);

                setAccount(userAccount);
                setContract(lotteryContract);
                setManager(await lotteryContract.manager());
                alert("Wallet connected successfully!");
            } catch (error) {
                console.error("Failed to connect wallet:", error);
                alert("Failed to connect wallet. Please try again.");
            }
        } else {
            alert("Please install MetaMask or another Ethereum wallet.");
        }
    };

    return (
        <div>
            {account ? (
                <p>Connected Account: {account}</p>
            ) : (
                <button onClick={connectWallet}>Connect Wallet</button>
            )}
        </div>
    );
};

export default Wallet;
