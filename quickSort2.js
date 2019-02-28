/**
 * 快速排序
 * @param  num 待排序数组
 */
function quickSort(num) {
    _quickSort(num, 0, num.length - 1); // 将整个num数组快速排序，left和right分别指向数组左右两端。
    return num;
}
/**
 * 快速排序(递归)
 * @param num 待排序数组
 * @param left 左指针
 * @param right 右指针
 */
function _quickSort(num, left, right) {
    if (left >= right) return; // 若左右指针相遇，待排序数组长度小宇1，即递归的终点，return(注意不能写成left==right，这里left是有可能大于right的)。
    var i = left, j = right, flag = left; // 定义可移动的左右指针 i，j，定义flag为基数下标。
    while (i < j) { // 在i<j时不断循环，i一旦与j碰头，则跳出循环。
        while (num[j] >= num[flag] && j > flag) j--; // j不断左移，找到在num[flag]右侧且比它大的数。
        if (i >= j) {
            break; // 由于j可能已被改变，需再次判断i与j是否碰头。
        }
        while (num[i] <= num[flag] && i < j) i++; // i不断右移，找到且比基数小的数，且i不能与j碰头。(由于两次交换已合并，此处不需要使得i在flag左侧)
        // num[flag] num[j] num[i]三者换位，可用ES6语法糖[num[flag],num[j],num[i]] = [num[j],num[i],num[flag]];
        let temp = num[flag];
        num[flag] = num[j];
        num[j] = num[i];
        num[i] = temp
        flag = i; // 基数已经在原num[i]的位置，flag同时也要赋值成i。
    }
    _quickSort(num, left, flag - 1); // 将flag左边数组作为待排序数组，递归调用。
    _quickSort(num, flag + 1, right); // 将flag右边数组作为待排序数组，递归调用。
}

let arr = [5, 7, 2, 9, 3, 8, 4, 7, 1];

//对数组进行排序
console.log(quickSort(arr));


