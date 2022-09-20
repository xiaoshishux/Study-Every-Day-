### position 的属性有哪些，区别是什么

position 有以下属性值：

| 属性值   | 概述                                                         |
| -------- | ------------------------------------------------------------ |
| absolute | 生成绝对定位的元素，相对于 static 定位以外的一个父元素进行定位。元素的位置通过 left、top、right、bottom 属性进行规定。 |
| relative | 生成相对定位的元素，相对于其原来的位置进行定位。元素的位置通过 left、top、right、bottom 属性进行规定。 |
| fixed    | 生成绝对定位的元素，指定元素相对于屏幕视⼝（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变，⽐如回到顶部的按钮⼀般都是⽤此定位⽅式。 |
| static   | 默认值，没有定位，元素出现在正常的文档流中，会忽略 top, bottom, left, right 或者 z-index 声明，块级元素从上往下纵向排布，⾏级元素从左向右排列。 |
| inherit  | 规定从父元素继承 position 属性的值                           |

前面三者的定位方式如下：

- **relative：**元素的定位永远是相对于元素自身位置的，和其他元素没关系，也不会影响其他元素。

![img](https://cdn.nlark.com/yuque/0/2020/png/1500604/1603554694939-58dfe7f7-2fc9-45e5-9961-a953f95496a7.png#align=left&display=inline&height=105&margin=%5Bobject%20Object%5D&originHeight=105&originWidth=448&size=0&status=done&style=stroke&width=447)

**fixed：**元素的定位是相对于 window （或者 iframe）边界的，和其他元素没有关系。但是它具有破坏性，会导致其他元素位置的变化。

![img](https://cdn.nlark.com/yuque/0/2020/png/1500604/1603554694841-89472ba9-b236-4098-802f-c3c26ff49466.png#align=left&display=inline&height=117&margin=%5Bobject%20Object%5D&originHeight=135&originWidth=516&size=0&status=done&style=stroke&width=446)

**absolute：**元素的定位相对于前两者要复杂许多。如果为 absolute 设置了 top、left，浏览器会根据什么去确定它的纵向和横向的偏移量呢？答案是浏览器会递归查找该元素的所有父元素，如果找到一个设置了`position:relative/absolute/fixed`的元素，就以该元素为基准定位，如果没找到，就以浏览器边界定位。如下两个图所示：

![img](https://cdn.nlark.com/yuque/0/2020/png/1500604/1603554694882-589670e0-cd52-41d4-a3ed-4ebbdfc88f32.png#align=left&display=inline&height=142&margin=%5Bobject%20Object%5D&originHeight=183&originWidth=576&size=0&status=done&style=stroke&width=446)

![img](https://cdn.nlark.com/yuque/0/2020/png/1500604/1603554694842-2764d9ed-d5fe-45f4-8ede-34a73d237f94.png#align=left&display=inline&height=118&margin=%5Bobject%20Object%5D&originHeight=137&originWidth=516&size=0&status=done&style=stroke&width=446)