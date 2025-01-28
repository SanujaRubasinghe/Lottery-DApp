import React, { useState } from 'react'

function practiceFull() {


    const [isEntering,setIsEntering]= useState(false);


    
    const enterLottery = async ()=>{
        if(contract){
            try{
                setIsEntering(true);
                const tx = await contract.participate(
                    {value:ethers.utils.parseEth("1")}
                )
                await tx.wait();
                alert("You have entered succesfully");
                setIsEntering(false);

            }catch(error){
                console.error("Failed to enter",error);
                alert("Failed to enter to the lottery");
                setIsEntering(false);

            }

        }else{
            alert("Please connect your wallet first");
        }
    }


  return (
    <div>

        <div>
            <h2>Enter to the lottery</h2>
            <button onClick={enterLottery} disabled={isEntering}>
                {isEntering ? "processing" : "Enter to lottery"}
            </button>
        </div>




    </div>
  )
}

export default practiceFull