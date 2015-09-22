$(function () {


    /*
    * Spinner 微调组件，依赖于ValidateBox 验证框
    *
    *       注意： Spinner 是另外两种微调组件的基本组件，并不具有微调功能，一般不直接使用
    * */

    $('.spinner2').spinner ({
        required : true,
        //扩展自 ValidateBox 的属性
       // width : auto, //该属性默认自动控制
        height : 22,
        value : 1,
        min : null,
        max : null,
        increment : 1, //点击微调按钮的增量值
        editable : false, //是否可以直接输入,默认为true
        disable  : false, //是否禁用字段

        spin : function (down){} ,//用户点击微调按钮时触发，down按上为fasle ，按下为true
        onSpinUp : function (){
            $('.spinner2').spinner('setValue',parseInt($('.spinner2').spinner('getValue') )+ 1);
        },//用户点击向上微调按钮时触发
        onSpinDown : function (){
            $('.spinner2').spinner('setValue',parseInt($('.spinner2').spinner('getValue') )- 1);
        }//用户点击向下微调按钮时触发


    });
    $('.spinner2').spinner('options'); //返回配置信息对象
    $('.spinner2').spinner('destroy'); //销毁
    $('.spinner2').spinner('enable');//禁用
    $('.spinner2').spinner('disable');//启动
    $('.spinner2').spinner('resize');//返回组件宽度，可以传入宽度来重置组件宽度
    $('.spinner2').spinner('getValue');//获取组件值
    $('.spinner2').spinner('setValue');//设置组件值
    $('.spinner2').spinner('clear');//清空组件值
    $('.spinner2').spinner('reset');//重置组件值



        /*
        *  NumberSpinner 数值微调组件，依赖于Spinner微调组件 和 NumerBox数值输入框
        *       其完全依赖于Spinner 组件，没有独立 属性和方法
        *
        * */
            $('.numberspinner').numberspinner({
                //自Spinner 继承了属性和方法
            });

        /*
        *      TimeSpinner 时间微调组件，依赖于Spinner组件
        *
        *
        * */

            $('timespinner2').timespinner({
                //自sapiner继承属性和事件
                editable : false,
                value : '00:00',//默认为null
                //min : '00:00',
               // max : '23:59',
                //separator : ':', //定义在小时，分钟之间的分隔符
                showSeconds : false,//是否显示秒
                highlight : 0,//初始时选中的字段 0为h，1为 min
             });


    $('timespinner2').timespinner('options');
   // $('timespinner2').timespinner('setValue',value);
    $('timespinner2').timespinner('getHours');
    $('timespinner2').timespinner('getMinutes');
    $('timespinner2').timespinner('getSeconds');





















});