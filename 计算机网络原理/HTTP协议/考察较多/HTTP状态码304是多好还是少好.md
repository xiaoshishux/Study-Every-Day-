# HTTP状态码304是多好还是少好

服务器为了提高网站访问速度，对之前访问的部分页面指定缓存机制，当客户端在此对这些页面进行请求，服务器会根据缓存内容判断页面与之前是否相同，若相同便直接返回304，此时客户端调用缓存内容，不必进行二次下载。



状态码304不应该认为是一种错误，而是对客户端**有缓存情况下**服务端的一种响应。



搜索引擎蜘蛛会更加青睐内容源更新频繁的网站（搜索引擎蜘蛛，304越少越好）。通过特定时间内对网站抓取返回的状态码来调节对该网站的抓取频次。若网站在一定时间内一直处于304的状态，那么蜘蛛可能会降低对网站的抓取次数。相反，若网站变化的频率非常之快，每次抓取都能获取新内容，那么日积月累，的回访率也会提高。



**产生较多304状态码的原因：**

- 页面更新周期长或不更新
- 纯静态页面或强制生成静态html



**304状态码出现过多会造成以下问题：**

- 网站快照停止；
- 收录减少；
- 权重下降。