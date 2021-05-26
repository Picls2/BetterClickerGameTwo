var newPlayerBank = 0;

var bananaLevel = 1;

var orangeLevel = 1;

var peachLevel = 1;

var bananaVal = document.getElementById('bananaProgressBar');

var orangeVal = document.getElementById('orangeProgressBar');

var peachVal = document.getElementById('peachProgressBar');

var infiniMoneyBananaTrue = false;

var infiniMoneyOrangeTrue = false;

var infiniMoneyPeachTrue = false;

var mouseBought = false;

function updateBank(){
    document.getElementById('playerBank').innerHTML = `Bank: $${newPlayerBank}`;
}

//Banana Stuff

function updateBananaLevel(){
    
    var newBananaProgress = bananaVal.value + 5;
    
    if(bananaVal.value == 100 && bananaLevel < 5){
        newBananaProgress = 0;
        bananaLevel++;
        document.getElementById('bananaLevel').innerHTML = `Lvl: ${bananaLevel}`;
    }
    
    bananaVal.value = newBananaProgress;
    
    
    
}

function hideUpgrade(){
    document.getElementById('itemUnlock').style.zIndex = "-1"
}

function infiniMoneyBanana(){
    if(bananaLevel == 5){
        bananaLevel = 6;
        infiniMoneyBananaTrue = true;
    }
    
    if(infiniMoneyBananaTrue == true){
        setInterval(() => {newPlayerBank += bananaLevel;
        updateBank();}, 2000);
        document.getElementById('orangeCover').style.zIndex = 1;
        infiniMoneyBananaTrue = false;
        document.getElementById('bananaLevel').innerHTML = `Lvl: MAX`
        document.getElementById('itemUnlock').innerHTML = "Oranges Unlocked!"
        document.getElementById('itemUnlock').style.zIndex = 1;
        
        setTimeout(hideUpgrade, 3000);
    }
}
bananaMoneyMaker.onclick = function(){
    newPlayerBank += bananaLevel;
    updateBank();
    updateBananaLevel();
    infiniMoneyBanana();
    
}

//Orange Stuff

function updateOrangeLevel(){
    
    var newOrangeProgress = orangeVal.value + 2;
    
    if(orangeVal.value == 100 && orangeLevel < 5){
        newOrangeProgress = 0;
        orangeLevel++;
        document.getElementById('orangeLevel').innerHTML = `Lvl: ${orangeLevel}`
    }
    
    orangeVal.value = newOrangeProgress;
    
    
    
}

function infiniMoneyOrange(){
    if(orangeLevel == 5){
        orangeLevel = 6;
        infiniMoneyOrangeTrue = true;
    }
    
    if(infiniMoneyOrangeTrue == true){
        setInterval(() => {newPlayerBank += orangeLevel * 2;
        updateBank();}, 2000);
        document.getElementById('peachCover').style.zIndex = 1;
        infiniMoneyOrangeTrue = false;
        document.getElementById('orangeLevel').innerHTML = `Lvl: MAX`
        document.getElementById('itemUnlock').innerHTML = "Peaches Unlocked!"
        document.getElementById('itemUnlock').style.zIndex = 1;
        
        setTimeout(hideUpgrade, 3000);
    }
}
orangeMoneyMaker.onclick = function(){
    newPlayerBank += orangeLevel * 2;
    updateBank();
    updateOrangeLevel();
    infiniMoneyOrange();
    
}

//Peach Stuff

function updatePeachLevel(){
    
    var newPeachProgress = peachVal.value + 1;
    
    if(peachVal.value == 100 && peachLevel < 5){
        newPeachProgress = 0;
        peachLevel++;
        document.getElementById('peachLevel').innerHTML = `Lvl: ${peachLevel}`
    }
    
    peachVal.value = newPeachProgress;
    
    
    
}

function infiniMoneyPeach(){
    if(peachLevel == 5){
        peachLevel = 6;
        infiniMoneyPeachTrue = true;
    }
    
    if(infiniMoneyPeachTrue == true){
        setInterval(() => {newPlayerBank += peachLevel * 4;
        updateBank();}, 2000);
        infiniMoneyPeachTrue = false;
        document.getElementById('peachLevel').innerHTML = `Lvl: MAX`
        document.getElementById('itemUnlock').innerHTML = "All Items Maxed! \n Shop Unlocked!"
        document.getElementById('itemUnlock').style.zIndex = 1;
        document.getElementById('shopContainer').style.zIndex = 1;
        
        setTimeout(hideUpgrade, 3000);
    }
}
peachMoneyMaker.onclick = function(){
    newPlayerBank += peachLevel * 4;
    updateBank();
    updatePeachLevel();
    infiniMoneyPeach();
}

//Help Buttons

helpButton.onclick = function(){
    document.getElementById('helpScreenShade').style.zIndex = 1;
}

closeHelpScreen.onclick = function(){
    document.getElementById('helpScreenShade').style.zIndex = -1;
}

//Shop Buttons

function resetLevels(){
    peachLevel = 6;
    orangeLevel = 6;
    bananaLevel = 6;
}

shopButtonOne.onclick = function(){
    if(newPlayerBank >= 1000){
        newPlayerBank -= 1000;
        updateBank();
     peachLevel = 12;
    orangeLevel = 12;
    bananaLevel = 12;
    
    setTimeout(resetLevels, 15000);
    } else{
        var amountRequired = 1000 - newPlayerBank;
        alert(`Insufficient Funds (${amountRequired} required)`);
    }
}

shopButtonTwo.onclick = function(){
    if(newPlayerBank >= 200){
        if(mouseBought == false){
    document.getElementById('body-container').style.cursor = "progress";
    newPlayerBank -= 200
    updateBank();
    mouseBought = true;
        } else{
            alert("Out of Stock!");
        }
    } else{
        var amountRequired = 200 - newPlayerBank;
        alert(`Insufficient Funds (${amountRequired} required)`);
    }
}

//Gambling

var winAmount = 0;

function updateNumber(){
    document.getElementById('amountGambled').innerHTML = winAmount;
}

function gamble(){
    winAmount = Math.floor(Math.random() * 2001);
    updateNumber();
}

shopButtonThree.onclick = function(){
    if(newPlayerBank >= 1000){
    document.getElementById('gambleScreenShade').style.zIndex = 1;
    const interval = setInterval(gamble, 100);
    setTimeout(() => {clearInterval(interval);
    newPlayerBank += winAmount;
    updateBank();}, 5000);
    } else{
        var amountRequired = 1000 - newPlayerBank;
        alert(`Insufficient Funds (${amountRequired} required)`);
    }
}

closeGambleScreen.onclick = function(){
    document.getElementById('gambleScreenShade').style.zIndex = -1;
}
