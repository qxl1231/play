// const binarySearch = (sortedArray, input) => {
//     let start = 0;
//     let end = sortedArray.length - 1;
//     while (start <= end) {
//         let mid = parseInt((start + end) / 2);
//
//         if (sortedArray[mid] > input) {//8>5
//             end = mid - 1;
//         } else if (sortedArray[mid] < input) {
//             start = mid + 1;
//         } else return sortedArray[mid] == input ? mid : -1;
//     }
//
// };
//
// console.log(binarySearch([1, 3, 4, 5, 7, 8, 9, 13, 15, 21], 5));

//递归
const binarySearch = (sortedArray, start, end, input) => {
    let mid = Math.floor((start + end) / 2);
    if (sortedArray[mid] > input) {//8>5
        end = mid - 1;
        return binarySearch(sortedArray, start, end, input);
    } else if (sortedArray[mid] < input) {
        start = mid + 1;
        return binarySearch(sortedArray, start, end, input);
    } else return sortedArray[mid] == input ? mid : -1;


};
let test = [1, 3, 4, 5, 7, 8, 9, 13, 15, 21];
console.log(binarySearch(test, 0, test.length - 1, 13));