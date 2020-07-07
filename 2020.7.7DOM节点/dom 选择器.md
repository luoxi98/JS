# dom 选择器

请写出选择器 有哪些写出5个？

document.getElementsByTagName()

document.getElementsByClassName()

document.getElementById()

document.querySelector()

document.querySelectorAll()

如何通过js 设置 元素样式 

var wrap = document.getElementsByClassName('wrap')[0];

wrap.style.width = ' '



className与classList区别

className 返回的是类名字符串

classList返回的是类名数组



innerHTML 与 innerText 区别是什么

innerHTML既能获取标签又能获取文本

innerText只能获取文本



什么是原型？ 原型链？ 继承？

原型：构造函数创造出对象的公共祖先

原型链：通过__proto__连接

继承：原型对象中属性是通过原型链进行继承

节点操作

~~~js
var btn = document.getElementByID('btn');
// 如何获取父节点
btn.parentNode

// 获取获取 btn 的子元素集合
btn.children

// 如何获取 上一个兄弟元素
btn.previousElementSibling

// 获取下一个兄弟元素
btn.nextElementSibling

// 如何删除btn
btn.remove()

// 如何给btn 的的元素的父元素，插入元素 
btnparent.innerbefore(newnode,btn)
~~~



