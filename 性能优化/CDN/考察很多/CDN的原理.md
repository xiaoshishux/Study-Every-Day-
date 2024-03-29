### CDN的原理

CDN和DNS有着密不可分的联系，先来看一下DNS的解析域名过程，在浏览器输入 www.test.com 的解析过程如下：

（1） 检查浏览器缓存

（2）检查操作系统缓存，常见的如hosts文件

（3）检查路由器缓存

（4）如果前几步都没没找到，会向ISP(网络服务提供商)的LDNS服务器查询

（5）如果LDNS服务器没找到，会向根域名服务器(Root Server)请求解析，分为以下几步：

- 根服务器返回顶级域名(TLD)服务器如`.com`，`.cn`，`.org`等的地址，该例子中会返回`.com`的地址
- 接着向顶级域名服务器发送请求，然后会返回次级域名(SLD)服务器的地址，本例子会返回`.test`的地址
- 接着向次级域名服务器发送请求，然后会返回通过域名查询到的目标IP，本例子会返回`www.test.com`的地址
- Local DNS Server会缓存结果，并返回给用户，缓存在系统中



**CDN的工作原理：**

（1）用户未使用CDN缓存资源的过程：

1. 浏览器通过DNS对域名进行解析（就是上面的DNS解析过程），依次得到此域名对应的IP地址
2. 浏览器根据得到的IP地址，向域名的服务主机发送数据请求
3. 服务器向浏览器返回响应数据



（2）用户使用CDN缓存资源的过程：

1. 对于点击的数据的URL，经过本地DNS系统的解析，发现该URL对应的是一个CDN专用的DNS服务器，DNS系统就会将域名解析权交给CNAME指向的CDN专用的DNS服务器。
2. CDN专用DNS服务器将CDN的全局负载均衡设备IP地址返回给用户
3. 用户向CDN的全局负载均衡设备发起数据请求
4. CDN的全局负载均衡设备根据用户的IP地址，以及用户请求的内容URL，选择一台用户所属区域的区域负载均衡设备，告诉用户向这台设备发起请求
5. 区域负载均衡设备选择一台合适的缓存服务器来提供服务，将该缓存服务器的IP地址返回给全局负载均衡设备
6. 全局负载均衡设备把服务器的IP地址返回给用户
7. 用户向该缓存服务器发起请求，缓存服务器响应用户的请求，将用户所需内容发送至用户终端。



如果缓存服务器没有用户想要的内容，那么缓存服务器就会向它的上一级缓存服务器请求内容，以此类推，直到获取到需要的资源。最后如果还是没有，就会回到自己的服务器去获取资源。



![image](https://cdn.nlark.com/yuque/0/2020/png/1500604/1603966294889-153271b5-4b9f-4470-b05f-c7a9f030d043.png?x-oss-process=image%2Fresize%2Cw_1500)

CNAME（意为：别名）：在域名解析中，实际上解析出来的指定域名对应的IP地址，或者该域名的一个CNAME，然后再根据这个CNAME来查找对应的IP地址。