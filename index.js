function distanceFromHqInBlocks(blockNum){
    
    if (blockNum > 42){
        return blockNum - 42
    }

    else return 42 - blockNum
}

function distanceFromHqInFeet(blockNum){
    return (distanceFromHqInBlocks(blockNum)* 264)
    
}

function distanceTravelledInFeet(start,destination){
   
   if (start > destination){
    return (start - destination) * 264
   }
   else return (destination - start) *264
    
}

function calculatesFarePrice(start, destination){

    if ((distanceTravelledInFeet)(start, destination) <= 399){
    return 0
    }
    if ((distanceTravelledInFeet)(start, destination) >= 400, (distanceTravelledInFeet(start, destination))<= 2000) {
    return 2.56
    }
    if ((distanceTravelledInFeet)(start,destination) >= 2001, (distanceTravelledInFeet(start, destination))<= 2499) {
        return 25
    }
    if ((distanceTravelledInFeet)(start,destination) >= 2500){
        return "cannot travel that far"
    }
}