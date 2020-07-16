getElement('div') //选中html 元素 并返回 元素对象或类数组
getElement('.box')
getElement('#bo');
 function getElement(str){
    if(str.charAt(0)=== '.'){
        return document.getElementsByClassName(str);
    }else if(str.charAt(0) === '#'){
        return document.getElementById(str)
    }else{
        return document.getElementsByTagName(str);
    }
 }

 function html(el,str){
    el.innerHTML = str;
    return el;
}
var div = document.getElementsByTagName('div')[0]
