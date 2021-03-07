//  import React from 'react'


function coin (){
    return Math.random()> 0.5 ? "head" : "tails";
}

function fiveHeads(){
    return new Promise((resolve, reject)=>{
        let headsCount = 0;
        let attempts = 0;
        while (headsCount < 5) {
        attempts++;
        let result = coin();
        console.log(`${result} was flipped`);
        if (result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
        }
        if (attempts <= 100) {
        resolve(`It took ${attempts} tries to flip five "heads"`);
        } else {
        reject("Attempts have exceeded 100 flips.");
        }
    });
    }
    fiveHeads()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    


export default coin;
