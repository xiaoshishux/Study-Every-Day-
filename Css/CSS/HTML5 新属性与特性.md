# HTML5新标签与特性

<img src="C:/Users/xiaoyaoqing/Desktop/media/html.jpg" />

## 文档类型设定

- document
  - HTML:        sublime 输入  html:4s
  - XHTML:      sublime 输入  html:xt
  - HTML5        sublime 输入  html:5       <!DOCTYPE html>

## 字符设定

- <meta http-equiv="charset" content="utf-8">：HTML与XHTML中建议这样去写

- <meta charset="utf-8">：HTML5的标签中建议这样去写

## 常用新标签

 w3c  手册中文官网     :   http://w3school.com.cn/

- header：定义文档的页眉 头部

- nav：定义导航链接的部分

- footer：定义文档或节的页脚 底部

- article：定义文章。

- section：定义文档中的节（section、区段）

- aside：定义其所处内容之外的内容 侧边

  ```html
  <header> 语义 :定义页面的头部  页眉</header>
  <nav>  语义 :定义导航栏 </nav> 
  <footer> 语义: 定义 页面底部 页脚</footer>
  <article> 语义:  定义文章</article>
  <section> 语义： 定义区域</section>
  <aside> 语义： 定义其所处内容之外的内容 侧边</aside>
  ```

  

- datalist   标签定义选项列表。请与 input 元素配合使用该元素

  ```html
  <input type="text" value="输入明星" list="star"/> <!--  input里面用 list -->
  <datalist id="star">   <!-- datalist 里面用 id  来实现和 input 链接 -->  
      		<option>刘德华</option>
      		<option>刘若英</option>
      		<option>刘晓庆</option>
      		<option>郭富城</option>
      		<option>张学友</option>
      		<option>郭郭</option>
  </datalist>
  ```

  

- fieldset 元素可将表单内的相关元素分组，打包      legend 搭配使用

  ```HTML
  <fieldset>
      		<legend>用户登录</legend>  标题
      		用户名: <input type="text"><br /><br />
      		密　码: <input type="password">
  </fieldset>
  ```

  

## 新增的input type属性值：

| **类型******     | **使用示例******        | **含义******         |
| ---------------- | ----------------------- | -------------------- |
| **email******    | <input type="email">    | 输入邮箱格式         |
| **tel******      | <input type="tel">      | 输入手机号码格式     |
| **url******      | <input type="url">      | 输入url格式          |
| **number******   | <input type="number">   | 输入数字格式         |
| **search******   | <input type="search">   | 搜索框（体现语义化） |
| **range******    | <input type="range">    | 自由拖动滑块         |
| **time******     | <input type="time">     | 小时分钟             |
| **date******     | <input type="date">     | 年月日               |
| **datetime****** | <input type="datetime"> | 时间                 |
| **month******    | <input type="month">    | 月年                 |
| **week******     | <input type="week">     | 星期 年              |

##  

## 常用新属性

| **属性******         | **用法******                                   | **含义******                                                 |
| -------------------- | ---------------------------------------------- | ------------------------------------------------------------ |
| **placeholder******  | <input type="text" placeholder="请输入用户名"> | 占位符  当用户输入的时候 里面的文字消失  删除所有文字，自动返回 |
| **autofocus******    | <input type="text" autofocus>                  | 规定当页面加载时 input 元素应该自动获得焦点                  |
| **multiple******     | <input type="file" multiple>                   | 多文件上传                                                   |
| **autocomplete****** | <input type="text" autocomplete="off">         | 规定表单是否应该启用自动完成功能  有2个值，一个是on 一个是off      on 代表记录已经输入的值  1.autocomplete 首先需要提交按钮 <br/>2.这个表单您必须给他名字 |
| **required******     | <input type="text" required>                   | 必填项  内容不能为空                                         |
| **accesskey******    | <input type="text" accesskey="s">              | 规定激活（使元素获得焦点）元素的快捷键   采用 alt + s的形式  |



## 综合案例

```html
<form action="">
  <fieldset>
    <legend>学生档案</legend>
    <label for="userName">姓名:</label>
    <input type="text" name="userName" id="userName" placeholder="请输入用户名"> <br>
    <label for="userPhone">手机号码:</label>
    <input type="tel" name="userPhone" id="userPhone" pattern="^1\d{10}$"><br>
    <label for="email">邮箱地址:</label>
    <input type="email" required name="email" id="email"><br>
    <label for="collage">所属学院:</label>
    <input type="text" name="collage" id="collage" list="cList" placeholder="请选择"><br>
    <datalist id="cList">
      <option value="前端与移动开发学院"></option>
      <option value="java学院"></option>
      <option value="c++学院"></option>
    </datalist><br>
    <label for="score">入学成绩:</label>
    <input type="number" max="100" min="0" value="0" id="score"><br>
   <form action="">
    <fieldset>
    	<legend>学生档案思密达</legend>
    	<label>姓名: <input type="text" placeholder="请输入学生名字"/></label> <br /><br />
    	<label>手机号: <input type="tel" /></label> <br /><br />
    	<label>邮箱: <input type="email" /></label> <br /><br />
    	<label>所属学院:  <input type="text" placeholder="请选择学院" list="xueyuan"/>
    	<datalist id="xueyuan">
    		<option>java学院</option>
    		<option>前端学院</option>
    		<option>php学院</option>
    		<option>设计学院</option>
    	</datalist>

    	<br /><br />

    	<label>出生日期:   <input type="date" /></label> <br /><br />
    	<label>成绩:  <input type="number" /></label> <br /><br />
    	<label>毕业时间:  <input type="date" /></label> <br /><br />
    	<input type="submit" />  <input type="reset" />
    </fieldset>
    </form>
    <label for="inTime">入学日期:</label>
    <input type="date" id="inTime" name="inTime"><br>
    <label for="leaveTime">毕业日期:</label>
    <input type="date" id="leaveTime" name="leaveTime"><br>
    <input type="submit">
  </fieldset>
</form>
```



## 多媒体标签

- embed：标签定义嵌入的内容
- audio：播放音频
- video：播放视频

### 多媒体 embed（会使用）

embed可以用来插入各种多媒体，格式可以是 Midi、Wav、AIFF、AU、MP3等等。url为音频或视频文件及其路径，可以是相对路径或绝对路径。

因为兼容性问题，我们这里只讲解 插入网络视频， 后面H5会讲解 audio 和video 视频多媒体。 

```html
<embed src="http://player.youku.com/player.php/sid/XMTI4MzM2MDIwOA==/v.swf" allowFullScreen="true" quality="high" width="480" height="400" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>
```



 <img src="C:/Users/xiaoyaoqing/Desktop/media/embed.png" />

 优酷，土豆，爱奇艺，腾讯、乐视等等

1. 先上传   
2. 在分享

### 多媒体 audio

HTML5通过<audio>标签来解决音频播放的问题。

使用相当简单，如下图所示

![1498468026526](C:/Users/xiaoyaoqing/Desktop/media/1498468026526.png) 

并且可以通过附加属性可以更友好控制音频的播放，如：

autoplay 自动播放

controls 是否显不默认播放控件

loop 循环播放    如果这个属性不写 默认播放一次        loop  或者  loop = “loop”    表示无限循环

由于版权等原因，不同的浏览器可支持播放的格式是不一样的，如下图供参考

![1498468041058](C:/Users/xiaoyaoqing/Desktop/media/1498468041058.png) 

多浏览器支持的方案，如下图

<source> 标签允许您规定可替换的视频/音频文件供浏览器根据它对媒体类型或者编解码器的支持进行选择

![1498468052965](C:/Users/xiaoyaoqing/Desktop/media/1498468052965.png) 



### 多媒体 video

HTML5通过<audio>标签来解决音频播放的问题。

同音频播放一样，<video>使用也相当简单，如下图

![1498468072194](C:/Users/xiaoyaoqing/Desktop/media/1498468072194.png) 

同样，通过附加属性可以更友好的控制视频的播放

autoplay 自动播放

controls 是否显示默认播放控件

loop 循环播放

width 设置播放窗口宽度

height 设置播放窗口的高度

由于版权等原因，不同的浏览器可支持播放的格式是不一样的，如下图供参考

![1498468086199](C:/Users/xiaoyaoqing/Desktop/media/1498468086199.png) 

**多浏览器支持的方案，如下图******

![1498468097509](C:/Users/xiaoyaoqing/Desktop/media/1498468097509.png)

# 