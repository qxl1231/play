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
// selectSort(values);


//另一种选择排序算法
const find = (arr) => {
    let index = 0;
    let small = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < small) {
            small = arr[i];
            index = i;
        }
    }
    console.log(index);
    return index;
};

const sort = (arr2) => {
    let newArr = [];
    for (let i = 0; i < arr2.length; i++) {
        let index = find(arr2);
        let popArr = arr2.splice(index, 1);
        newArr.push(popArr[0]);
    }
    return newArr;
};
console.log(sort(values));//此处有问题,只会排序一部分

//递归求和
const sum = (n) => {
    if (n == 0) return 0;
    return sum(n - 1) + 2;
};
console.log(sum(2))