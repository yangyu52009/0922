$(function () {


    /*
     * calendar 日历组件，独立组件
     * */

    $('.calendar2').calendar({
        //width : 300,
        //height : 300,
        fit : false, //填充父容器
        border : true, //是否显示边框
        firstDay : 0,  //定义一周的星期一是星期几 0=星期日，1=星期一
        //weeks : [],   //周的显示内容，添加了中文包，此项无用
        //months  : [],   //显示月列表的内容
        year : 1990, //初始化时显示的年份
        month : 2 , //初始化时显示的月份
        current : new Date(2015,6,4), //设置选择日
        formatter : function (date) {
            return '#' + date.getData();
        },//在每个日显示前加上#

        styler : function (date) {
            if(date.getDay() == 1)return 'background-color:#ccc';
        },//将每周一背景颜色设为 银色

        validator : function (date){
            if(date.getDay() == 1){
                return true;}else{
                return false;
            }
        },//只有每周一可选

        //事件
        onSelect : function (date) {},
        onChenge : function (newDate,oldDate) {}
    });


    $('.calendar2').calendar('options');
    $('.calendar2').calendar('resize'); //调整日历大小
    $('.calendar2').calendar('moveTo', new Date(2015,1,1));

    //移动日历选择到指定日期

    /*
     * 日历输入框，依赖于Combo自定义下拉框 和 Calendar日历
     * */

    var buttons = $.extend([], $.fn.datebox.defaults.buttons);
    buttons.splice(1,0,{
        text : '新增',
        handler : function (target) {
            window.alert('新增');
        }
    }); //该部分代码通过扩展的方式给日历输入框中增加按钮，一般不使用







    $('.datebox2').datebox({
       width : 150,
       panelWidth  : 300, //弹出日历的宽度
       panelHieght : 300, //弹出日历的高度
       currentText : '今天',
       closeText : '关闭',
      //  okText : '确定',
        disabled : false,//是否禁用
        buttons : [buttons],//
        sharedCalendar : null,//将一个日历组件共享给多个datebox控件使用
        formatter : function (date){
            return date.getFullYear() + '/' + parseInt(date.getMonth() + 1 + '/' + date.getDate());
        }, //该函数用于格式化日期，它有一个‘date’参数并且会返回一个字符串类型
         //的值
      //  parser : function (date) {return date}; // j

        //事件
        onSelect : function (date){ },

    });

    $('.datebox2').datebox('options');

    $('.datebox2').datebox('calendar').calendar({
        firstDay  : 2
    }); //将内置的日历星期三设为一周的开始


    $('.datebox2').datebox('setValue','2015-9-16');


















});