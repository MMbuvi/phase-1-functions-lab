function distanceFromHqInBlocks(number){
    if (number > 42){
        return number - 42;
    }
    else{return 42 - number
    }
}
function distanceFromHqInFeet(feet){
    if (feet > 42){
        return (feet - 42) * 264
    }else {
        return (42 - feet) * 264}
}
function distanceTravelledInFeet(start, destination){
    if (destination > start){
        return ((destination - start) * 264);
    } else return ((start - destination) * 264)
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400){
        return 0;
    } else if ( distance >= 400 && distance <= 2000){
        return (distance - 400) * 0.02;
    } else if (distance >= 2000 && distance <= 2500){
        return 25;
    } else distance > 2500
        return 'cannot travel that far'
}
