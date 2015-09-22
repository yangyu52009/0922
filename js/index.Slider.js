$(function () {
        /*
        * Slider滚动条组件，依赖于Draggable拖动组件
        *
        * */

        $('.slider2').slider({
            width : 300,  //水平有效
            height : 300, //垂直有效
            mode : 'h',//设置滚动条的方向，v垂直 ，水平
            reversed : false,//是否将最大值与最小值的位置对调
            showTip : false,//是否显示值信息提示
            disable  : false,
            value : 0,  //默认值
            min : 0,    //最小值
            max : 100,   //最大值
            rule : [25,'|',50,'|',75,'|',100],
            setp : 5,//步长，默认1
            tipFormatter : function (value){return value;}, //设置showTip值提示的内容

            //事件
            onChange : function (newValue,oldValue){
                $('.target_font').css('font-size',newValue);

            }, //在字段值改变时触发
            onSliderStart : function (value){}, //在开始拖动时触发
            onSliderEnd  : function (value){}//在拖动结束时触动


        });
    $('.slider2').slider('options');
   // $('.slider2').slider('destroy');
    $('.slider2').slider('resize',{
        width : 300,height : 100
    });
    $('.slider2').slider('getValue');
    $('.slider2').slider('setValue',12);
    $('.slider2').slider('clear');
    $('.slider2').slider('reset');
    $('.slider2').slider('disable');
    $('.slider2').slider('enable');






























});