import React from "react";
import { ethers } from "ethers";

const Wallet = ({ account, setAccount, setContract, setManager, contractAbi, contractAddress }) => {
    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                // Connect MetaMask to the provider
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                
                // Request user to connect their account
                await window.ethereum.request({ method: "eth_requestAccounts" });

                const signer = provider.getSigner();
                const userAccount = await signer.getAddress();

                // Load the contract
                const lotteryContract = new ethers.Contract(contractAddress, contractAbi, signer);

                // Set the account and contract
                setAccount(userAccount);
                setContract(lotteryContract);

                // Verify the manager from the smart contract
                const managerAddress = await lotteryContract.manager();
                setManager(managerAddress);

                alert("Wallet connected successfully!");

            } catch (error) {
                console.error("Failed to connect wallet:", error);
                if (error.code === 4001) {
                    alert("Connection request denied.");
                } else {
                    alert("Failed to connect wallet. Please try again.");
                }
            }
        } else {
            alert("MetaMask not detected. Please install MetaMask to proceed.");
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
