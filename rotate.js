function rotate(arr, newarr){
    if(isValid(arr)){
        n = Math.sqrt(arr.length);
        var index = 0;
        for(var i = 0; i < n; i++){
            for(var j = 0; j < n; j++){
                if((i > n-2-j) && (i<j)){
                    shiftDown(n, arr,newarr,index);
                }
                else if((i < n-j) && (i>j)){
                    shiftUp(n, arr,newarr,index);
                }
                else if((j < n-1-i) && (j>i-1)){
                    shiftRight(arr,newarr,index);
                }
                else if((j > n-1-i) && (j<i+1)){
                    shiftLeft(arr,newarr,index);
                }
                else{
                    dontShift(arr,newarr,index);
                }
                index++;
            }
        }
    }
}

function isValid(arr){
    return arr.length > 0 && Math.sqrt(arr.length) % 1 === 0;
} 
function shiftRight(arr, newarr, index){
    newarr[index+1] = arr[index];
}

function shiftLeft(arr, newarr, index){
    newarr[index-1] = arr[index];
}

function shiftUp(n, arr, newarr, index){
    newarr[index-n] = arr[index];
}

function shiftDown(n, arr, newarr, index){
    newarr[index+n] = arr[index];
}

function dontShift(arr, newarr, index){
    newarr[index] = arr[index];
}

module.exports = { rotate };
