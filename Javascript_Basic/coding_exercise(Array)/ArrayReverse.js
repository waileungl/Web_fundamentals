// 4.Array Reverse
// Write a function that will reverse the values an array and return them.

function reverse(arr) {
    for (var i = 0; i < arr.length/2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 -i];
        arr[arr.length - 1 -i] = temp; 
    }
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e", "1", "2", "3"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
