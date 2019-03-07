// //十八位
// var _Id_Card = "320283198810222274410";
// var _Bank_Card = "32028319882210274410";
//
//
// const replaceCardNum=(input,start,end)=>{
//     let _str_Start = input.substr(0, start);
//     let _str_End = input.substr(input.length - end, end);
//     let s = "";
//     for (let i = 0; i < input.length - start-end; i++) s += "*";
//     return _str_Start + s + _str_End;
// };
//
// console.log(replaceCardNum(_Id_Card,6,4));
// console.log(replaceCardNum(_Bank_Card,4,4));
//

// var a = {};
// let tmp = 'qqqq';
// Object.defineProperty(a, 'name', {
// configurable:true,  enumerable:true,
//     get() {
//         return tmp
//     },
//     set(v) {
//         tmp = v;
//     }
// });
// a.name = '2222';
// console.log(a.name);

export default {
    methods: {
        //获取到城市信息
        getLocation: (phoneNum) => {
            return axios.post('phoneLocation', {
                phoneNum
            })
        },
        // 获取面值
        getFaceList: (province, city) => {
            return axios.post('/faceList', {
                province,
                city
            })
        },

    }
}

test = () => {

// 点击确定按钮时，获取面值列表
    getFaceResult:async () => {
        let location = await this.getLocation(this.phoneNum);
        if (location.data.success) {
            let province = location.data.obj.province;
            let city = location.data.obj.city;
            let result = await this.getFaceList(province, city);
            if (result.data.success) {
                this.faceList = result.data.obj;
            }
        }
    }
    getFaceResult();
}
