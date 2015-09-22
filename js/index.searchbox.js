$(function () {
   /*
   * SearchBox搜索框，依赖于MenuButton
   * */
        $('.searchbox2').searchbox({
            width : 300,
            height : 30,
            menu : '.SearchBox_menu',
            searcher : function(value,name){},
            prompt : '请输入关键字',
            value : '文本',
            disable : false

        });

    var menuval = $('.searchbox2').searchbox('menu'); //返回绑定的menu 对象
    menuval.menu('setText',{
        target : menuval.menu('findItem','所有').target,
        text   : '全部内容'
    });

    $('.searchbox2').searchbox('textbox'); //返回文本框对象

    $('.searchbox2').searchbox('getValue'); //获取当前文本框的值

    $('.searchbox2').searchbox('setValue','');//

    $('.searchbox2').searchbox('getName');

    $('.searchbox2').searchbox('selectName','movic');

    $('.searchbox2').searchbox('destroy');

    $('.searchbox2').searchbox('resize',300);//重置宽度

    $('.searchbox2').searchbox('disable');//enable

    $('.searchbox2').searchbox('clear'); //清除搜索框的值，无论value是否有

    $('.searchbox2').searchbox('reset'); //重置搜索框的值


});