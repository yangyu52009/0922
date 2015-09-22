$(function () {


    /*
    * validatebox 表单-验证框，依赖于tooltip 提示框
    * */
        $('.email_validate').validatebox({
            required : true, //是否为必填项
            validType : 'email', //可以为 ： email，url，length[2,10]长度要求2到10位
                //remote[url,name]//使用ajax方式向指定URL发起验证，以post键值对方式提交数据，name为指定
            delay : 200, //验证延迟的时间ms
            missingMeaaage : '', //未填写时的提示信息
            invalidMessage : '您输入的电子邮箱地址不合法', //但验证为无效时，出现的提示信息
            tipPosition : 'right', //提示框显示的位置 ： left，right
            daltaX : 0, //提示框在水平方向上平移的距离
            navalidate : false //是否关闭验证功能
        });

    $('.email_validate').validatebox('options');
    $('.email_validate').validatebox('destory');
    $('.email_validate').validatebox('validate'); //现在文本框内容是否有效
    $('.email_validate').validatebox('isValid'); //调用validate返回验证结果
    $('.email_validate').validatebox('enableValidation'); // 启用验证
    $('.email_validate').validatebox('disableValidation'); //关闭验证

    // 自定义验证 ： 我们可以通过重写默认规则的方式来创建一个新的验证规则
    $.extend($.fn.validatebox.defaults.rules,{
        minLength : {   //validType 的值
            validator : function (value,param) {  //value 为输入的值，param 为 validType 中传入的参数
                return value.length >= param[0];
            },
            message : '其输入长度不小于{0}的字符'
        }
    });




























});