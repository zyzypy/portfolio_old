created 2020-04-21
### 关于收费
程序员博客上常常见到捐赠二维码，从前我觉得高傲的程序员何必摇尾乞求，如果一年服务器费用五百块相当一天工资、而且是为自己宣传的，干嘛收费。
如果花费几个月做的项目那么直接要求服务费。总之要么免费要么明收。  
另外收入肯定不多，因为：让人付费是困难的事；一篇文章的价值不够付费；有人支付、付多付少，我付了其它人没付是不是亏了，本来想付的人也不想了。  
后来在网上看到几位程序员谈到这个事，果然如此，一年收入不过五十块。。  

现在我的服务器在腾讯云，服务器2核4G内存5Mbps(0.6Mb/s)带宽，原价一年一千多（国内价格是国外数倍，特别是带宽)，
于是想办法买了个新注册学生用户机3年600元，虽然不在自己账户下用起来稍微麻烦，又不好意思占着学生的名义，但抵不过价格的诱惑。  
新用户➕学生身份👨‍🎓比刚才正常价便宜数倍，这就是新老用户的差距，老用户双十一活动一年也得八百，这跟移动手机老用户不能购买新用户套餐一样，并且差价倍数更大。
一方面对厂商想扩张新用户赚钱表示理解，另一方面，老用户也应该有优惠吧，新是老的0.8倍价格就可以了吧，新是老的2折就过分了吧，同一个东西掏5倍价格😠？
所以有人工信部网站投诉了移动，最终办理了新套餐。也希望未来云服务器领域也能公平些。  
总之，目前云主机方面费用不大。  

然而事情没完。2核4G内存5Mbps的主机在云服务器市场对于个人用还不错，配置比1C1G1M的小鸡(机)🐤配置高多了，但仍然不够用。
带宽单位Mbps，全称million兆 bit位 per每 seconds秒。8bit=1byte字节，换算成平时熟悉的单位Mb/s正好差8倍。厂商喜欢用这个单位因为好看😕。  
所以5Mbps=0.625Mb/s。也就是说有个人访问我的网站，网页上有一些图文共10Mb，那么这位客户浏览器需要10/0.6约**17秒**加载完毕😲。更不用说1Gb多的视频。
如果同时有两人访问并正在请求，那么时间加倍。  
那么为了提速需要更高带宽，而云服务器带宽5M提高到30M每月陡增两千元。  
这时有一个相较更便宜和效果更好的东西叫CDN（内容分发网络），就是把服务器上的网页、图片、视频同步到全国各个其它带宽高的电脑上，当然CDN也有费用。

国内外的服务器费用相差数倍，曾经买过国外主机1C2G200Mbps一年125元，这个配置阿里云一个月几千。阿里云国内和国外价格也相差迥异。
这种现象让人气愤，一方面因为国家垄断割羊毛🦙，我们的水、电等、汽车、房子🏠费用占工资比都比较高。
另一方面其实也不全怨国家，举一下其它行业例子：
- 越发达成本越低，例如一线城市除了房子其它东西（例如数码3c）其实不贵，因为供应链一条龙，物流费低。四线小城市由于多层倒卖、贪污腐败导致成本较高。
- 擅长的行业成本更低，跟上面类似。例如美国汽车便宜，中国衣服便宜。
- 中国只分到了5%的全球IPv4。

为了提供高质量的信息，我的网站  
- 图片。缩略图一般是600x400px。文章内图片为2k 2880x1800，目前常见的是1080p 1920x1080。
别看宽高只增加1.5倍，面积就是平方2.25倍。另外高质量压缩。所以一张图经常1.2Mb,一篇文章几张图就10Mb了。
目前网页内容由云主机提供，内容稳定后会放到CDN加速。总的来说网页这一块流量其实很少。
- 视频。为了保证清晰度。python基础视频为自录无损后压制，2k分辨率中码率，每小时1.5Gb。其它的为1080p普通码率每小时0.5G。

⭐️大头是视频。云主机的硬盘和速度都不足以支撑视频。需要存储到对象存储服务上，我使用的是腾讯云COS，
占用空间存储费寥寥，主要是传输文件的流量费，价格为**0.45元/Gb**。不使用七牛云存储因为腾讯云存储提供流量安全上限和配合云主机比较方便。对象存储跟CDN配合使用，cdn可以提升访问速度和降低价格，只有用户在cdn缓存网络上找不到的资源才会去cos取用。
CDN价格**0.31元/Gb**。所以如果**一个人**看完了我的 python基础视频 14p共32GB，70%cdn命中🎯率，那么我这里约有**12元**费用产生。一百个人就上千了。

有人问为什么不上传网盘、B站：  
- 百度网盘。百度网盘一个月30，网上有人骂百度低速、吃香难看，前几天pandownload开发者被抓，网友更是骂声一片。只有程序员知道，
流量费有多贵。我如果上传网盘，那么其他每个下载资料的人都要掏钱，你付给我还是付给百度的区别。
- B站、优酷、爱奇艺等平台。这些平台看视频是免费的，然后说说无会员下的限制。  
    - 广告。爱奇艺60s广告，中间也可能会有。B站以无广告著称，但毕竟也要赚钱，承包、直播、游戏广告，目前手机端隔几页就来一个'公主链接'的游戏广告，未来哪天视频开头加广告我也觉得很正常。毕竟爱奇艺刚开始也零广告。
    - 清晰度。只能720p，会员下的1080p、1080p+码率其实不够，为了节省流量压缩的厉害，动态画面下马赛克。分辨率1080p，一个小时可以0.5G也可以8G，感官完全不同。
    - 投资。B站、爱奇艺有十几个亿的风投。
    - 收会员费。
    - p2p技术。每个浏览器充当服务器做种，上传给另一人，把压力分担到各个客户端。个人上这个技术需要开发时间，目前没上。
    - 跟idc服务商直接签合同，宽带量大优惠，每Gb低于0.1元。低于个人开发者几倍。
    - 即使上述，它们每年财报还在赔钱😭。再次说明流量费之贵。
- 自己掌控数据。曾经我用过一些产品如百度博客、Acfun，后来它们倒闭了，感觉在上面付出的青春浪费了；往每个视频网站上都发一遍太耗精力；自建网站B格也比较高。
- 版权。视频是给公司录的，公司官方账号没发，我发不合适。

⭐️所以啊，我收流量成本费，视频页面有根据视频大小*0.4(结合cos、cdn、命中率的价)得出的价格。不算拍视频、写文章、做网站付出的几个月精力。
**请支持我的分享，自觉付费，看一集付一集，看几集一块给，一集看一部分的估算着给，想分发给周围人的可以'播放器画面右键/视频存储为'下载后再U盘分发。**
一集大约0.5元，真的不贵。
当然，即使说是收费，仍是自愿的，我可不想再搞个注册登录、视频鉴权。我预计此举能收回十分之一的流量费用😭，重点还是在宣传知识付费习惯。
如果流量费过高撑不住，那么会下架视频。

### 关于捐赠
至于捐赠，是对我知识劳动的认可，0至任意数字均可。  
我仍然觉得捐赠不是靠谱的收入方式。人们依然会有不公平感。  
更自然、理所应当的赚钱方式是商业合作。👏欢迎提问、业务咨询、合作。