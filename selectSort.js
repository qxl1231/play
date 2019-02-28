// let values = [1, 2, 3, 4, 5];
// let sum = values.reduce(function (prev, cur, index, array) {
//     console.log(prev, cur, index, array)
//     return prev + cur;
// });
// console.log(sum); //15


//选择排序
function selectSort(arr) {
    let len = arr.length;
    let index;
    for (let i = 0; i < len - 1; i++) {
        index = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[index] > arr[j]) {//寻找最小值
                index = j;//保存最小值的索引
            }
        }
        if (index != i) {
            let temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
        }
    }
    return arr;
}


let values = [141, 122, 322, 41, 52];

console.log(selectSort(values));