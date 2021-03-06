# 浮动(float)

## 普通流(normal flow)

这个单词很多人翻译为 文档流 ， 字面翻译  普通流 或者标准流都可以。

前面我们说过，网页布局的核心，就是用CSS来摆放盒子位置。如何把盒子摆放到合适的位置？  

CSS的定位机制有3种：普通流（标准流）、浮动和定位。

html语言当中另外一个相当重要的概念----------标准流！或者普通流。普通流实际上就是一个网页内标签元素正常从上到下，从左到右排列顺序的意思，比如块级元素会独占一行，行内元素会按顺序依次前后排列；按照这种大前提的布局排列之下绝对不会出现例外的情况叫做普通流布局。

<img src="C:/Users/xiaoyaoqing/Desktop/media/t.jpg" />

## 浮动(float)

浮动最早是用来控制图片，以便达到其他元素（特别是文字）实现“环绕”图片的效果。

<img src="C:/Users/xiaoyaoqing/Desktop/media/l.png" style="width: 600px; border: 2px solid #000;"/>

后来，我们发现浮动有个很有意思的事情：就是让任何盒子可以一行排列,因此我们就慢慢的偏离主题，用浮动的特性来布局了。（CSS3已经我们真正意义上的网页布局，具体CSS3我们会详细解释）

<img src="C:/Users/xiaoyaoqing/Desktop/media/d.png" />

## 什么是浮动？

元素的浮动是指设置了浮动属性的元素会脱离标准普通流的控制，移动到其父元素中指定位置的过程。

在CSS中，通过float属性来定义浮动，其基本语法格式如下：

~~~
选择器{float:属性值;}
~~~

| 属性值 | 描述                 |
| ------ | -------------------- |
| left   | 元素向左浮动         |
| right  | 元素向右浮动         |
| none   | 元素不浮动（默认值） |

## 浮动详细内幕特性

浮动脱离标准流，不占位置，会影响标准流。浮动只有左右浮动。

```
浮动首先创建包含块的概念（包裹）。就是说， 浮动的元素总是找理它最近的父级元素对齐。但是不会超出内边距的范围。 
```


   <img src="C:/Users/xiaoyaoqing/Desktop/media/one.jpg" width="500" /> 


```
浮动的元素排列位置，跟上一个元素（块级）有关系。如果上一个元素有浮动，则A元素顶部会和上一个元素的顶部对齐；如果上一个元素是标准流，则A元素的顶部会和上一个元素的底部对齐。
```


  <img src="C:/Users/xiaoyaoqing/Desktop/media/two.jpg" width="400" />


```
由2可以推断出，一个父盒子里面的子盒子，如果其中一个子级有浮动的，则其他子级都需要浮动。这样才能一行对齐显示。
```

```
元素添加浮动后，元素会具有行内块元素的特性。元素的大小完全取决于定义的大小或者默认的内容多少浮动根据元素书写的位置来显示相应的浮动。
```

总结：  浮动 --->    

浮动的目的就是为了让多个块级元素同一行上显示。

float      浮 漏 特   

浮：    加了浮动的元素盒子是浮起来的，漂浮在其他的标准流盒子上面。
漏：    加了浮动的盒子，不占位置的，它浮起来了，它原来的位置漏 给了标准流的盒子。
特：    特别注意，首先浮动的盒子需要和标准流的父级搭配使用， 其次 特别的注意浮动可以使元素显示模式体现为行内块特性。

# 版心和布局流程

阅读报纸时容易发现，虽然报纸中的内容很多，但是经过合理地排版，版面依然清晰、易读。同样，在制作网页时，要想使页面结构清晰、有条理，也需要对网页进行“排版”。

“版心”(可视区) 是指网页中主体内容所在的区域。一般在浏览器窗口中水平居中显示，常见的宽度值为960px、980px、1000px、1200px等。

## 布局流程

为了提高网页制作的效率，布局时通常需要遵守一定的布局流程，具体如下：

1、确定页面的版心（可视区）。

2、分析页面中的行模块，以及每个行模块中的列模块。

3、制作HTML结构 。

4、CSS初始化，然后开始运用盒子模型的原理，通过DIV+CSS布局来控制网页的各个模块。

## 一列固定宽度且居中

<img src="C:/Users/xiaoyaoqing/Desktop/media/yl.jpg" width="400" />

最普通的，最为常用的结构

## 两列左窄右宽型

<img src="C:/Users/xiaoyaoqing/Desktop/media/ll.jpg" width="400" />

比如小米    <a href="http://www.mi.com" target="_blank"> 小米官网 </a>

## 通栏平均分布型

<img src="C:/Users/xiaoyaoqing/Desktop/media/tl.jpg" width="600" />

比如锤子    <a href="http://www.smartisan.com/" target="_blank"> 锤子官网 </a>

# 清除浮动

人生就像乘坐北京地铁一号线：

途经国贸，羡慕繁华；

途经天安门，幻想权力；

途经金融街，梦想发财；

经过公主坟，遥想华丽家族；

经过玉泉路，依然雄心勃勃…

这时，有个声音飘然入耳:乘客你好,八宝山马上就要到了！

顿时醒悟：人生苦短，有始有终。 

好比我们的浮动，有浮动开始，则就应该有浮动结束。

## 为什么要清除浮动

我们前面说过，浮动本质是用来做一些文字混排效果的，但是被我们拿来做布局用，则会有很多的问题出现， 但是，你不能说浮动不好 <img src="C:/Users/xiaoyaoqing/Desktop/media/wq.jpg" height="100" />。  

由于浮动元素不再占用原文档流的位置，所以它会对后面的元素排版产生影响，为了解决这些问题，此时就需要在该元素中清除浮动。

准确地说，并不是清除浮动，而是**清除浮动后造成的影响**

如果浮动一开始就是一个美丽的错误，那么请用正确的方法挽救它。



## 清除浮动本质

清除浮动主要为了解决父级元素因为子级浮动引起内部高度为0 的问题。

<img src="C:/Users/xiaoyaoqing/Desktop/media/n.jpg" />

<img src="C:/Users/xiaoyaoqing/Desktop/media/no.jpg" />

<img src="C:/Users/xiaoyaoqing/Desktop/media/kc.jpg" />

## 清除浮动的方法

其实本质叫做闭合浮动更好一些, 记住，清除浮动就是把浮动的盒子圈到里面，让父盒子闭合出口和入口不让他们出来影响其他元素。

在CSS中，clear属性用于清除浮动，其基本语法格式如下：

```
选择器{clear:属性值;}
```

| 属性值 | 描述                                       |
| ------ | ------------------------------------------ |
| left   | 不允许左侧有浮动元素（清除左侧浮动的影响） |
| right  | 不允许右侧有浮动元素（清除右侧浮动的影响） |
| both   | 同时清除左右两侧浮动的影响                 |

### 额外标签法

```html
是W3C推荐的做法是通过在浮动元素末尾添加一个空的标签例如 <div style=”clear:both”></div>，或则其他标签br等亦可。
```

优点： 通俗易懂，书写方便

缺点： 添加许多无意义的标签，结构化较差。  我只能说，w3c你推荐的方法我不接受，你不值得拥有。。。

### 父级添加overflow属性方法

可以通过触发BFC的方式，可以实现清除浮动效果。（BFC后面讲解）

~~~css
可以给父级添加： overflow为 hidden|auto|scroll  都可以实现。
~~~

优点：  代码简洁

缺点：  内容增多时候容易造成不会自动换行导致内容被隐藏掉，无法显示需要溢出的元素。

### 使用after伪元素清除浮动

**:after 方式为空元素的升级版，好处是不用单独加标签了** 

使用方法：

```css
 .clearfix:after {  content: "."; display: block; height: 0; clear: both; visibility: hidden;  }   

 .clearfix {*zoom: 1;}   /* IE6、7 专有 */
```

优点： 符合闭合浮动思想  结构语义化正确

缺点： 由于IE6-7不支持:after，使用 zoom:1触发 hasLayout。

代表网站： 百度、淘宝网、网易等

<img src="C:/Users/xiaoyaoqing/Desktop/media/163.png" style="border: 1px dashed #3c3c3c;"/>



注意： content:"."  里面尽量跟一个小点，或者其他，尽量不要为空，否则再firefox 7.0前的版本会有生成空格。


### 使用before和after双伪元素清除浮动

使用方法：

```css
.clearfix:before,.clearfix:after { 
  content:"";
  display:table;  /* 这句话可以出发BFC BFC可以清除浮动,BFC我们后面讲 */
}
.clearfix:after {
 clear:both;
}
.clearfix {
  *zoom:1;
}
```

优点：  代码更简洁

缺点：  由于IE6-7不支持:after，使用 zoom:1触发 hasLayout。

代表网站： 小米、腾讯等

 