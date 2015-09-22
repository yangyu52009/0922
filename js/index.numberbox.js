$(function () {


    /*
    * NumberBox 数值输入框，依赖于ValidateBox验证框
    * */

    $('numberbox2').numberbox({
        //还可以使用从validateBox继承了来的属性
        disable : false,
        value  : 20, //默认值
        min : null,//可输入的最小值
        max : null,//可输入的最大值
        precision : 0 ,//显示精度，即小数点之后的位数
        decimalSeparator : '.',//设置用于分割十进制字符整数与小数的符号
        groupSeparator  : null, //设置用于分割区分整数组的符号用于区分大数据 99,999,999.00
        prefix : '￥' ,//前缀符号
        suffix : null ,//后缀
      //  filter : function(e){return false}, //定义如何过滤输入，当返回true时则允许输入，反正禁止
      //  formatter : function(value){return value},//用于格式化数值的函数,其内部value的值不会改变，返回字符串显示在输入框中
      //  parser : function(s){return }           //用于解析字符串的函数是,其内部的value的值也会改变

        //事件
        onChange : function (newValue,oldValue) {}
    });
    $('numberbox2').numberbox('options');
    $('numberbox2').numberbox('disable');
    $('numberbox2').numberbox('enable');
    $('numberbox2').numberbox('destroy');
    $('numberbox2').numberbox('fix'); //修正输入框中的值
    $('numberbox2').numberbox('clear');
    $('numberbox2').numberbox('getValue');
    $('numberbox2').numberbox('setValue');
    $('numberbox2').numberbox('reset');





























});