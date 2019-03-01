// const _ = require('lodash');
// const sort = (arr) => {
//
//     let len = arr.length - 1;
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let tmp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = tmp;
//             }
//         }
//     }
//     return arr;
// };
// let arr = [5, 7, 2, 9, 3, 8, 4, 7, 1];
//
// console.log(sort(arr));


//快速排序优化=>基于冒泡+二分查找
const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let midNum = arr.splice(mid, 1)[0];
    // let midNum=arr[mid];//这里为什么要用splice?如果用下面这种,会循环递归,死循环报错,用上面的方式就会执行结束
    console.log(mid);
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < midNum) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    console.log(left,right)
    return quickSort(left).concat(midNum, quickSort(right))

};
let arr = [5, 7, 2, 9, 3, 8, 4, 17, 1, 11];

console.log(quickSort(arr));
