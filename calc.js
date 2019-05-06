// pages/change/calc.js
Page({

     /**
      * 页面的初始数据
      */
     data: {
          id:1,
       /*   calSign:[
        /*       '+',
         /*      '-',
          /*     '/',
           /*    '*',
            /*       ],
            */
          toNumber:[ 1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          ],
          //numPlay:[],
          result:1,
          jisuan:'+',
          jian:'-',
          cheng:'*',
          chu:'/',
          arr:[],
          screenData:'',
          


     },
     onLoad: function (options) {

     },
     toCalc(e){
          var that = this;
          var id   = e.target.id;




          

     },
     changeNumber :function(e){
          //var num = e.target.id;
          var that = this;
      that.data.id = e.target.id;
      console.log(that.data.id);
    that.setData({
         screenData:that.data.id,
    });
   //   var lastOpertor = '';
      var arr = that.data.arr;
      var oprea = [];
     arr.push(that.data.id);
      for(var i   in arr) {                  //遍历
           if( arr[i] == '+'|| arr[i] == '-' || arr[i] 
           == '/'|| arr[i] == '*'
           ) {
               // lastOperator = arr[i];
               // oprea.push(num);
                oprea.push(arr[i]);
                arr.splice(i,1);
               // num = "";
               }
      } 
      console.log("baocundeshuzushi=" + arr);
      console.log("yunsuanfushi=" + oprea);

     // oprea.push(Number(num));              
    //  var result = Number(oprea[0])*1.0;
     var result = 1;
      for(var i=1;i<arr.length;i++){
           if((oprea[0]) == '+'){
               if(oprea[0] == '+')
               {
                    result = Number(arr[ 0 ]) 
                    + Number(arr[ 1 ]);
               } else if (oprea[0] == '-') {
                    result -= Number(arr[i + 1]);
               } else if (oprea[0] == '*') {
                    result *= Number(arr[i + 1]);
               } else if (oprea[0] == '/') {
                    result /= Number(arr[i + 1]);
               }
        }
          that.setData({
               screenData:result,
          })
      }
          console.log(result);
      },   


     /**
      * 生命周期函数--监听页面初次渲染完成
      */
     onReady: function () {

     },

     /**
      * 生命周期函数--监听页面显示
      */
     onShow: function () {

     },

     /**
      * 生命周期函数--监听页面隐藏
      */
     onHide: function () {

     },

     /**
      * 生命周期函数--监听页面卸载
      */
     onUnload: function () {

     },

     /**
      * 页面相关事件处理函数--监听用户下拉动作
      */
     onPullDownRefresh: function () {

     },

     /**
      * 页面上拉触底事件的处理函数
      */
     onReachBottom: function () {

     },

     /**
      * 用户点击右上角分享
      */
     onShareAppMessage: function () {

     }
})