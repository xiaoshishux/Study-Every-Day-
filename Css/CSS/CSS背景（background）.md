# CSS 背景(background)

CSS 可以添加背景颜色和背景图片，以及来进行图片设置。

| background-color                                            | 背景颜色         |
| ----------------------------------------------------------- | ---------------- |
| background-image                                            | 背景图片地址     |
| background-repeat                                           | 是否平铺         |
| background-position                                         | 背景位置         |
| background-attachment                                       | 背景固定还是滚动 |
| 背景的合写（复合属性）                                      |                  |
| background:背景颜色 背景图片地址 背景平铺 背景滚动 背景位置 |                  |

## 背景图片(image)

语法： 

~~~css
background-image : none | url (url) 
~~~

参数： 

none : 　无背景图（默认的）
url : 　使用绝对或相对地址指定背景图像 

background-image 属性允许指定一个图片展示在背景中（只有CSS3才可以多背景）可以和 background-color 连用。 如果图片不重复地话，图片覆盖不到地地方都会被背景色填充。 如果有背景图片平铺，则会覆盖背景颜色。

小技巧：  我们提倡 背景图片后面的地址，url不要加引号。

## 背景平铺（repeat）

语法： 

~~~css
background-repeat : repeat | no-repeat | repeat-x | repeat-y 
~~~

参数： 

repeat : 　背景图像在纵向和横向上平铺（默认的）

no-repeat : 　背景图像不平铺

repeat-x : 　背景图像在横向上平铺

repeat-y : 　背景图像在纵向平铺 

设置背景图片时，默认把图片在水平和垂直方向平铺以铺满整个元素。

repeat-x : 　背景图像在横向上平铺  



repeat-y : 　背景图像在纵向平铺 

<img src="C:/Users/xiaoyaoqing/Desktop/media/y.png" width="600"/>

设置背景图片时，默认把图片在水平和垂直方向平铺以铺满整个元素。

<img src="C:/Users/xiaoyaoqing/Desktop/media/q.png" width="600"/>

## 背景位置(position)

语法： 

~~~css
background-position : length || length

background-position : position || position 
~~~

参数： 

length : 　百分数 | 由浮点数字和单位标识符组成的长度值。请参阅长度单位 
position : 　top | center | bottom | left | center | right 

说明： 

设置或检索对象的背景图像位置。必须先指定background-image属性。默认值为：(0% 0%)。
如果只指定了一个值，该值将用于横坐标。纵坐标将默认为50%。第二个值将用于纵坐标。

注意：

1. position 后面是x坐标和y坐标。 可以使用方位名词或者 精确单位。
2. 如果和精确单位和方位名字混合使用，则必须是x坐标在前，y坐标后面。比如 background-position: 15px top;   则 15px 一定是  x坐标   top是 y坐标。

实际工作用的最多的，就是背景图片居中对齐了。

## 背景附着

语法： 

~~~css
background-attachment : scroll | fixed 
~~~

参数： 

scroll : 　背景图像是随对象内容滚动
fixed : 　背景图像固定 

说明： 

设置或检索背景图像是随对象内容滚动还是固定的。



## 背景简写

background属性的值的书写顺序官方并没有强制标准的。为了可读性，建议大家如下写：

background:背景颜色 背景图片地址 背景平铺 背景滚动 背景位置

~~~css
background: transparent url(image.jpg) repeat-y  scroll 50% 0 ;
~~~

## 背景透明(CSS3)

CSS3支持背景半透明的写法语法格式是:

~~~css
background: rgba(0,0,0,0.3);
~~~

 最后一个参数是alpha 透明度  取值范围 0~1之间

 注意：  背景半透明是指盒子背景半透明， 盒子里面的内容不收影响。

## 导航栏案例

**使用技巧**：在一行内的盒子内，我们设定行高等于盒子的高度，就可以使文字垂直居中。



~~~html
<head>
        <meta charset="utf-8">
        <style>
		body {
			background-color: #000;
		}
		a {
			width: 200px;
			height: 50px;
			/* background-color: orange; */
			display: inline-block;  /* 把a 行内元素转换为行内块元素 */
			text-align: center;  /* 文字水平居中 */
			line-height: 50px;  /* 我们设定行高等于盒子的高度，就可以使文字垂直居中 */
			color: #fff;
			font-size: 22px;
			text-decoration: none;  /* 取消下划线 文本装饰 */
		}
		a:hover {  /* 鼠标经过 给我们的链接添加背景图片*/
			background: url(images/h.png) no-repeat; 
		}
        </style>
    </head>
    <body>
    <a href="#">专区说明</a>
    <a href="#">申请资格</a>
    <a href="#">兑换奖励</a>
    <a href="#">下载游戏</a>
    </body>
~~~

