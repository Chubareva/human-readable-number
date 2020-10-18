module.exports = function toReadable (number) {
let single = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'] ;
    let tenStr = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
let decimals = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let numStr = number.toString();
    for(let i = 0; i<numStr.length; i++){
    if(numStr.length == 0 || !numStr){
        i++;
    }
        else if(numStr.length == 1){
            return single[Number(numStr[i])];
        }
        else if(number > 10 && number < 20){
            return tenStr[number - 11];
        }   
        else if(number% 10 == 0 && numStr.length==2){
            return decimals[number/10 -1];
        }
        else if(numStr.length == 2 && number%10 != 0){
            
            return (`${decimals[Number(numStr[0]-1)]} ${single[Number(numStr[1])]}`);
        }
        else if(numStr.length == 3 && number%100 == 0){
            return (`${single[Number(numStr[i])]} hundred`);
        }
        else if(numStr.length == 3 && number%100 != 0 && numStr[1] == 0){
            return (`${single[Number(numStr[0])]} hundred ${single[Number(numStr[2])]}`);
        }
        else if(numStr.length == 3 && number%100 != 0 && numStr[1] == 1 && numStr[2] != 0){
            return (`${single[Number(numStr[0])]} hundred ${tenStr[Number(numStr[2]-1)]}`);
        }
        else if(numStr.length == 3 && number%100 != 0 && numStr[2] == 0){
            return (`${single[Number(numStr[0])]} hundred ${decimals[Number(numStr[1]-1)]}`);
        }
        else{
            return (`${single[Number(numStr[0])]} hundred ${decimals[Number(numStr[1]-1)]} ${single[Number(numStr[2])]}`);
        }
    }
}
