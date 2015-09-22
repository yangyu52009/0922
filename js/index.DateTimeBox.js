$(function () {

/*
*
* DateTimeBox 时间日期输入框，依赖于TimeSpinner 时间微调组件 和 DateBox日期输入框
* 其扩展自DateBox，在下拉列表中包含一个时间微调组件
* */


        $('.datetimebox2').datetimebox({
            value  : '2015-9-23 01:00',

            //继承自 DateSpinner 的属性
            showSeconds : false, //是否显示秒
            timeSeparator : ':', //定义在小时、分钟和秒之间的时间分割字符
            spinnerWidth : 100 //设值，内部的时间微调组件的宽度，默认为100%
        });


    $('.datetimebox2').datetimebox('setValue','2015-9-23 01:00');
    $('.datetimebox2').datetimebox('spinner'); // 返回内含的timeSpinner 对象
             $('.datetimebox2').datetimebox('spinner').spinner('getValue');//操作返回的timeSpinner组件












});