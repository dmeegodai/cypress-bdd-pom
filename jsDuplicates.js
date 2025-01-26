function traceDuplicates(arr) {
    let newArray = [];
    for (let i = 0; i <= arr.length -1; i++) {
        if(arr.indexOf(arr[i]) != arr.lastIndexOf(arr[i])) {
            if(!newArray.includes(arr[i])){
                newArray.push(arr[i]);
            }
        } 
    }
    if (newArray.length === 0) {
        return "No duplicated array elements";
    } else {
    return newArray;
    }
}

console.log(traceDuplicates([5, 6, 7, 8]));
console.log(traceDuplicates(["apple", "banana", "apple", "orange", "banana"]));