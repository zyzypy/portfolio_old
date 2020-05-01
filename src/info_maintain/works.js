// 1.==========作品列表页上部的子目录 catalogs======
// 种类 All\Backend\UI&UX\Frontend\Server\Hobbies
// 作品列表维护在下面works常量
export const catalogs = [
    {
        key: 'All',
        name: '所有',
        icon: 'apps',
        // 静态文件路径会被编译，绑定src时不能用本地路径,使用require
        // 起名选择困难症😂 一篇关于'图形'近义词的文章 https://blog.csdn.net/u010584319/article/details/82704889
        // 插图来自dribbble
        illustration: require('../assets/images/cubes.gif'),
        introduce: `我已经投身软件行业七年<br>
                    在产品、设计、交互、前端、后端开发、服务器等领域任职过或有所研究<br>
                    多技能交叉将会产生有趣的项目<br>
                    欢迎观看个人项目和开源项目Demo<br>
                    `
    },
    {
        key: 'Backend',
        name: '后端⭐️',
        icon: 'console',
        illustration: require('../assets/images/python.gif'),
        introduce: `Python是我的主技能。<br>
                    从大学时代的C、C++、Java基础<br>
                    到毕业时以Java入行，但工作一段时间后失去兴趣<br>
                    再到后来重拾编程，对Python系统自学<br>
                    在不同公司项目中积累经验<br>
                    少量接触nodejs、go、ruby、abap等其它语言生态<br>
                    主语言为Python，我崇尚其简洁的设计哲学<br>
                    精通核心编程、爬虫、Web开发、ERP、智能硬件等方向<br>
                    后端深奥目前仍在学习进步中
                    `
    },{
        key: 'UI&UX',
        name: '设计&交互',
        icon: 'brush',
        illustration: require('../assets/images/ui_design.gif'),
        introduce: `可能有人奇怪编程和设计相差的有些远<br>
                    说来话长，有兴趣可以阅读我的故事<br>
                    设计是个美丽、充满想象力、比编程愉快😓的职业<br>
                    合理的交互让纠结低效的流程变得舒心<br>
                    以下作品时间为2014-2015年，质量跟现在成熟的行业有差距
                    `
    },{
        key: 'Frontend',
        name: '前端',
        icon: 'console',
        illustration: require('../assets/images/frontend.gif'),
        introduce: `作为后端一直对前端饶有兴趣，想把一个东西展现出来<br>
                    刚开始html表单、表格搭配后端做项目<br>
                    但css、js稍微复杂点就不行了<br>
                    后来学习了bootstrap，但不够个性化<br>
                    2015年，在一家公司中做后端，前端组长推广vue2.0、前后端分离<br>
                    我才知道nodejs、vue新前端时代已到来<br>
                    2019年，在一家培训公司我兼任带一个前端班学生<br>
                    现在我能按照想法开发想要的前端界面和交互逻辑。
                    `
    },{
        key: 'Server',
        name: '服务器',
        icon: 'server',
        illustration: require('../assets/images/linux_server.gif'),
        introduce: `大学时听说linux好像很🐂🍺神秘的样子，但并不了解<br>
                    虚拟机装了一个ubuntu，尝鲜桌面后就不知道干嘛了<br>
                    习得python基础后开始玩树莓派，'实验楼'网的基础教程很好<br>
                    适应后发现linux的精髓是命令行和做服务<br>
                    我也想做一个可以访问的网站<br>
                    云服务器、域名备案、上传部署，一套做下来就会了<br>
                    目前熟悉linux基础操作和搭建常见服务，熟悉阿里云、腾讯云生态
                    `
    },{
        key: 'Hobbies',
        name: '爱好',
        icon: 'piano',
        illustration: require('../assets/images/hobbies.gif'),
        introduce: `生活需要趣味<br>
                    动漫👀 新闻🆕 逛论坛💬 游戏🎮 硬件💻 音乐🎵 乐高🤖️️ 绘画🎨 骑行🚴 <br>
                    随性玩，但争取玩的像回事
                    `
    }
]



// 2.==========作品列表 单个作品概要 works================================
/* 维护
    所属目录    ['','']
    排序优先级  0-100  0最高
    封面图     assets/images下或网址  800*500 144dpi
    h2关键字   4组左右
    brief     50-200字
    links按钮组   1-4个   详细说明路由地址与src/info_maintain/my_xxx一致
*/

export const works =
    [
        {
            // my_demo_dashboard
            ownCatalog: ['Frontend', 'UI&UX'],
            priority: 80,
            cover: require('./my_demo_dashboard/cover.png'),
            title: '后台模板Vuetify',
            attributes: [
                {key: '时间', content: '2019-10'},
                {key: '语言', content: 'nodejs'},
                {key: '框架', content: 'Vue, Vuetify'},
                {key: '关键字', content: '后台, 模板, UI'},
                {key: '场景', content: '开发团队为了提升UI买个漂亮的admin模板'},
            ],
            brief: `设计团队creative Tim打磨的前端模板，效果比直接用vue生态的UI插件例如ElementUI、AmazeUI等要漂亮。
                     `,
            links: [
                {key: '在线Demo', link: 'https://demo_dashboard.1owo.com/'},
                {key: '出售说明', link: '/works_detail/my_demo_dashboard'}
            ]
        },
        {
            // my_gitlab
            ownCatalog: ['Server'],
            priority: 65,
            cover: require('./my_gitlab/cover.png'),
            title: 'Gitlab代码版本管理',
            attributes: [
                {key: '时间', content: '2020-02'},
                {key: '语言', content: 'Ruby'},
                {key: '框架', content: 'rails'},
                {key: '关键字', content: '开源自建, 部署, 代码版本管理'},
                {key: '场景', content: '想管理代码又追求安全、自己掌控、访问速度等方面的公司'},
            ],
            brief: `gitlab知名度仅次于github, 是公司内部自建git服务的首选方案。功能成熟、UI美观。
                     `,
            links: [
                {key: '在线Demo', link: 'http://gitlab.1owo.com'},
                {key: '详细说明', link: '/works_detail/my_gitlab'}
            ]
        },
        {
            // my_goaccess
            ownCatalog: ['Server'],
            priority: 70,
            cover: require('./my_goaccess/cover.png'),
            title: 'GoAccess日志分析',
            attributes: [
                {key: '时间', content: '2020-02'},
                {key: '语言', content: 'C'},
                {key: '框架', content: '无'},
                {key: '关键字', content: '开源自建, 部署, 日志分析'},
                {key: '场景', content: '轻量级、数据自维护、命令行或可视化, 的日志分析软件。'},
            ],
            brief: `网站访问量pv、独立访客uv，我的网站有多少人访问？是网站运营者关注的数据。同类工具不少，文章将会分析百度统计、goaccess、ELK三者场景的区别。
                     `,
            links: [
                {key: '在线Demo', link: 'http://goaccess.1owo.com'},
                {key: '详细说明', link: '/works_detail/my_goaccess'}
            ]
        },
        {
            // my_hexo
            ownCatalog: ['Backend', 'Frontend'],
            priority: 30,
            cover: require('./my_hexo/cover.png'),
            title: '博客',
            attributes: [
                {key: '时间', content: '2018-04'},
                {key: '语言', content: 'Nodejs'},
                {key: '框架', content: 'hexo, ejs'},
                {key: '关键字', content: 'blog, 静态博客'},
                {key: '场景', content: '程序员自建博客'},
            ],
            brief: `
                    此博客记录了我在2018年用心书写✍️的近百篇原创文章。因为一些技术和想法原因，目前已停更。
                     `,
            links: [
                {key: '访问', link: 'https://hexo.1owo.com/'},
            ]
        },
        {
            // my_ngrok
            ownCatalog: ['Server'],
            priority: 65,
            cover: require('./my_ngrok/cover.png'),
            title: 'Ngrok内网穿透',
            attributes: [
                {key: '时间', content: '2018-05'},
                {key: '语言', content: 'Go'},
                {key: '关键字', content: '开源自建, 内网穿透, 反向代理'},
                {key: '场景', content: '在家用宽带、个人电脑上架设服务; 本地开发便捷调试微信小程序项目。'},
            ],
            brief: `Ngrok是go语言、内网穿透领域的代表项目。访问公网ip即可直接访问到家中的个人电脑，方便软件开发调试和架设服务。
                     `,
            links: [
                // vue-cli3 static files   https://cli.vuejs.org/guide/html-and-static-assets.html#html
                {key: 'Mac/Linux client', link: '/static/my_ngrok/ngrok'},
                {key: 'Windows client', link: '/static/my_ngrok/ngrok.exe'},
                {key: 'Demo测试说明', link: '/works_detail/my_ngrok'},
            ]
        },
        {
            // my_niaowoyun
            ownCatalog: ['Server', 'UI&UX'],
            priority: 45,
            cover: require('./my_niaowoyun/cover.jpg'),
            title: '鸟窝云在线云虚拟化',
            attributes: [
                {key: '时间', content: '2015-10'},
                {key: '框架', content: 'OpenStack, kvm'},
                {key: '硬件', content: '高配刀片服务器*3'},
                {key: '关键字', content: '虚拟化, 云主机'},
            ],
            brief: `2015年初加入的一家创业公司，我在团队中任职产品兼UI。产品类似阿里云，在当时还是挺先进的，
                    浏览器打开就是一个windows或linux虚拟机，提供图形界面和多种linux发行版，用户有一点，
                    但最终由于老板资金不多又没拿到融资，短短不足两个月就失败了。
                    设计稿在卖电脑时漏转至移动硬盘，很可惜已丢失，只在百度中找到了封面这张模糊的图。
                    老板刘金金在河南本地idc景安工作多年后创业，后来才知道他每次都搞这个每次都失败，故意欺骗员工拖欠工资，
                    我知道的已有三波，唯一一次曝光人名，郑州从业者请避雷。
                     `,
            links: [
            ]
        },
        {
            // my_odoo
            ownCatalog: ['Backend'],
            priority: 80,
            cover: require('./my_odoo/cover.png'),
            title: 'odoo demo',
            attributes: [
                {key: '时间', content: '2016-12'},
                {key: '语言', content: 'Python'},
                {key: '框架', content: 'odoo'},
                {key: '关键字', content: '开源自建, ERP, CRM, 财务, 物料, 工作流, 电商'},
                {key: '场景', content: '用于开发公司任一业务领域的管理系统'},
            ],
            brief: `中大型公司内部使用ERP非常普遍，基于Java语言的金蝶、用友、SAP是国内外ERP领域的代表软件。
                    企业基于这些软件进行二次开发，适应公司财务、物料、人力、电商、工作流等方面业务需求。ERP复杂、开发耗时、核心是公司业务。
                    Python语言中ERP代表软件是odoo，界面不错，以插件模块思想进行功能扩充，国内小众。
                     `,
            links: [
                {key: '在线Demo', link: 'https://odoo.1owo.com/'},
                {key: '安利说明', link: '/works_detail/my_odoo'}
            ]
        },
        {
            // my_portfolio
            ownCatalog: ['Frontend'],
            priority: 29,
            cover: require('./my_portfolio/cover.png'),
            title: '作品集网页（你现在看到的这个页面）',
            attributes: [
                {key: '时间', content: '2020-04'},
                {key: '语言', content: 'html/css'},
                {key: '框架', content: 'Vue, vue-router, vue-cli3, webpack4, Buefy, Bulma'},
            ],
            brief: `2020年初，适逢疫情和换工作，想把这几年好好总结一下。想练习前端，选型美观的Buefy Vue UI组件库。
                    发现了理想中的大神yandev.de，于是模仿他的设计稿编写代码，最终实现了大部分效果。对于一位程序员来说，
                    公司的项目是带不出来的，能力和经验只能通过个人项目来体现，我很高兴这些年留下的一些个人项目，其中不少是商业项目。
                     `,
            links: [
                {key: '说明', link: '/works_detail/my_portfolio'},
                {key: '⇱git仓库', link: 'https://gitee.com/canaan_ge/my_portfolio'}
            ]
        },
        {
            // my_proxy_poll
            ownCatalog: ['Backend'],
            priority: 90,
            cover: require('./my_proxy_poll/cover.png'),
            title: '免费IP代理池',
            attributes: [
                {key: '时间', content: '2018-11'},
                {key: '语言', content: 'Python'},
                {key: '关键字', content: '开源自建, IP, 代理'},
                {key: '场景', content: '用于爬虫行业，暴力突破服务器IP黑名单'},
                {key: '我的看法', content: '爬虫既无web开发有技术、又灰色、不劳而获，对于认为爬虫是python主要领域的风气表示反对。'},
            ],
            brief: `爬虫项目为了高效获取数据请求频繁，服务器根据请求头封锁请求频繁的IP。这时就需要'我的电脑➡️代理到其它人的电脑➡️目标网址'，
                    需要大量'开启http代理服务的别人电脑的ip'伪装成正常请求。代理ip池通常需要购买，平台放出的免费资源可用性极低。
                    本demo可用性很低，聊胜于无，个人学习爬虫项目时如果ip被封可以临时用一下。
                     `,
            links: [
                {key: 'API说明', link: '/works_detail/my_proxy_poll'}
            ]
        },
        {
            // my_tutorial_python_base
            ownCatalog: ['Backend'],
            priority: 20,
            cover: require('./my_tutorial_python_base/cover.png'),
            title: 'Python视频教程-基础',
            attributes: [
                {key: '时间', content: '2019-07'},
                {key: '语言', content: 'Python'},
                {key: '关键字', content: '零基础, 视频教程'},
                {key: '场景', content: 'Python零基础视频教程'},
                {key: '作者', content: '本人'},
            ],
            brief: `2019年前公司用做推广宣传布置的视频录制任务，覆盖python基础，大纲进行了三分之二，视频清晰、讲解细致。
                     `,
            links: [
                {key: '在线视频', link: '/works_video/my_tutorial_python_base'}
            ]
        },
        {
            // my_tutorial_python_flask
            ownCatalog: ['Backend'],
            priority: 30,
            cover: require('./my_tutorial_python_flask/cover.png'),
            title: 'Python视频教程-Flask框架 (半成品)',
            attributes: [
                {key: '时间', content: '2018-06'},
                {key: '语言', content: 'Python'},
                {key: '关键字', content: 'flask框架, 视频教程, Web开发'},
                {key: '场景', content: 'Python Web开发视频教程'},
                {key: '作者', content: '本人'},
            ],
            brief: `2018年与本地一家公司合作录制，是我初次录制视频教程。因种种原因合作终止。图文教程详细，视频教程半成品，大纲进度一半。
                     `,
            links: [
                {key: '在线视频', link: '/works_video/my_tutorial_python_flask'}
            ]
        },
        {
            // my_raspberry_pie_bullettime
            ownCatalog: ['Backend', 'Server'],
            priority: 32,
            cover: require('./my_raspberry_pie_bullettime/cover.gif'),
            title: '基于树莓派的子弹时间拍摄🎬阵列',
            attributes: [
                {key: '时间', content: '2016-12'},
                {key: '语言&框架', content: 'Python, flask, bootstrap, linux'},
                {key: '硬件', content: '测试环境（树莓派3b+官方v2摄像头）*7, 正式环境更多套'},
                {key: '场景', content: '影视行业，商场活动'},
                {key: '难点', content: '并行(不是并发)无延迟请求, 多主机批量管理'},
            ],
            brief: `2016年初玩树莓配不久，刚尝试完上面的PM2.5项目，就恰巧接到这个有趣的商业需求。子弹时间是个非常垂直小众的需求，
                    探索未知领域和技术非常有趣。最终完成了主要需求，但也随着进行出现了一些困难，感觉没做到完善有些可惜。
                    甲方已申请专利，我很高兴。
                     `,
            links: [
                {key: '说明', link: '/works_detail/my_raspberry_pie_bullettime'},
            ]
        },
        {
            // my_raspberry_pie_weather
            ownCatalog: ['Backend', 'Server', 'Frontend'],
            priority: 30,
            cover: require('./my_raspberry_pie_weather/cover.jpg'),
            title: '树莓派粉尘传感器',
            attributes: [
                {key: '时间', content: '2016-10'},
                {key: '语言', content: 'Python, html/css/js'},
                {key: '框架', content: 'Flask, Material-Design-lite, HighCharts'},
                {key: '硬件', content: '树莓派3b, 微雪7寸lcd电容屏'},
                {key: '关键字', content: '树莓派, 传感器, linux, 图表, 智能硬件'},
            ],
            brief: `2016年学过python基础后了解到树莓派。玩硬件很有趣就像玩玩具一样，从简单led灯泡和各种系统玩起。
                    由于当时雾霾🌫️严重就购买了攀藤传感器。折腾过程中熟练了linux，硬件知识。
                    温湿度传感器返回的高低电平需要转换为➡️二进制➡️字节➡️数值，让我明白计算机二进制01到底代表什么。
                     `,
            links: [
                {key: '⇱v1版 git仓库', link: 'https://github.com/canaan-yz/weather'},
                {key: '⇱v2版 git仓库', link: 'https://code.aliyun.com/zzdxyz/weather/tree/master'},
                {key: '⇱说明&大概教程', link: 'https://hexo.1owo.com/硬件/硬件/硬件-树莓派weather项目说明/'},
            ]
        },
        {
            // my_srs
            ownCatalog: ['Server'],
            priority: 65,
            cover: require('./my_srs/cover.jpg'),
            title: 'SRS直播',
            attributes: [
                {key: '时间', content: '2019-10'},
                {key: '语言', content: 'C++'},
                {key: '关键字', content: '开源自建, 直播, rtmp/flv/hls协议'},
                {key: '场景', content: '想了解直播技术的程序员，自建直播服务，视频资源站'},
            ],
            brief: `SRS是一款国人开发的基于rtmp协议的流服务器，用于直播。
                     `,
            links: [
                {key: 'Demo测试说明', link: '/works_detail/my_srs'},
                {key: '客户端', link: 'https://srs.1owo.com/'},
            ]
        },
        {
            // my_spider
            ownCatalog: ['Backend'],
            priority: 70,
            cover: require('./my_spider/cover.jpg'),
            title: '爬虫基础',
            attributes: [
                {key: '时间', content: '2019-10'},
                {key: '语言', content: 'Python'},
                {key: '框架', content: 'Scrapy'},
            ],
            brief: `几个基础例子，来源网络教程。电影网站排名爬虫纯脚本最简单，校花网爬虫使用scrapy，
                    百度百科爬虫自己实现了类似scrapy的结构有利于理解爬虫架构。
                     `,
            links: [
                {key: '⇱脚本爬取电影排行 git仓库', link: 'https://gitee.com/canaan_ge/movie'},
                {key: '⇱scrapy校花网图片下载 git仓库', link: 'https://gitee.com/canaan_ge/xiaohua_spider'},
                {key: '⇱类scrapy架构百科爬虫 git仓库', link: 'https://gitee.com/canaan_ge/baike_spider'}
            ]
        },
        {
            // my_tutorial_python_zhiyou14
            ownCatalog: ['Backend'],
            priority: 25,
            cover: require('./my_tutorial_python_zhiyou/cover.png'),
            title: '完整带完一期线下python班的教案和视频',
            attributes: [
                {key: '时间', content: '2018-08～2019-03'},
                {key: '语言', content: 'Python'},
                {key: '关键字', content: 'flask框架, 视频教程, Web开发'},
                {key: '场景', content: 'Python Web开发视频教程'},
                {key: '作者', content: '本人'},
            ],
            brief: `五个月完整带完一期线下python班的教案和视频，全面的知识和学生工作。对个人各方面都是个锻炼，我对经手的第一期学生也很有感情。
                     `,
            links: [
                {key: '⇱教案git仓库(gitee)', link: 'https://gitee.com/canaan_ge/my_tutorial_python_zhiyou'},
                {key: '说明', link: '/works_detail/my_tutorial_python_zhiyou'},
            ]
        },
        {
            // my_ui
            ownCatalog: ['UI&UX', 'Backend', 'Frontend'],
            priority: 30,
            cover: require('./my_ui/cover.png'),
            title: 'UI素材下载站',
            attributes: [
                {key: '时间', content: '2016-08'},
                {key: '语言', content: 'Python, HTML/CSS'},
                {key: '框架', content: 'Flask, Bootstrap'},
                {key: '软件', content: 'Pycharm, PhotoShop, Illustrator'},
                {key: '部署', content: 'Ubuntu, Nginx, gunicorn, gevent, 对象存储, CDN'},
            ],
            brief: `2016年从UI领域回到编程领域，自学完python和flask基础后，想做一个跟两个领域都有关的东西作为实战练习。
                    想法就是"素材网站"。从网盘、淘宝、国外网站搜集了一些素材，经过挑选，PS手工花了几天整理出一百二十套素材
                    （当时实在找不到处理psd的包)，以psd文件为主、少量ai和sketch文件。是我第一个较为完整的网站。
                     `,
            links: [
                {key: '⇱git仓库', link: 'https://gitee.com/canaan_ge/my_ui'},
                {key: '⇱访问哇哦素材', link: 'https://ui.1owo.com'},
            ]
        },
        {
            // my_ui_house_selling
            ownCatalog: ['UI&UX'],
            priority: 31,
            cover: require('./my_ui_house_selling/cover.jpg'),
            title: '基于xbox体感操作的售楼软件界面',
            attributes: [
                {key: '时间', content: '2015-03'},
                {key: '硬件', content: 'xbox主机🎮、xbox摄像头、电视📺'},
                {key: '工具', content: 'PhotoShop'},
                {key: '关键字', content: 'xbox, 售楼平面'},
            ],
            brief: `甲方很有创意，时至今日用xbox游戏机体感做软件也是很特别的。
                     `,
            links: [
                {key: '效果图', link: '/works_detail/my_ui_house_selling'},
            ]
        },
        {
            // my_ui_jiuyunda
            ownCatalog: ['UI&UX'],
            priority: 30,
            cover: require('./my_ui_jiuyunda/cover.png'),
            title: '酒运达app界面',
            attributes: [
                {key: '时间', content: '2015-05～2015-11'},
                {key: '工具', content: 'PhotoShop'},
                {key: '关键字', content: '垂直电商, app, 多端适配'},
            ],
            brief: `2015年在一家公司里负责app界面版本迭代。时值UI行业初兴，教程短缺，行业不规范，努力做好自己的事和思考应该做的事。
                    完成设计稿的同时配合安卓/IOS端适配。
                     `,
            links: [
                {key: '效果图', link: '/works_detail/my_ui_jiuyunda'},
            ]
        },
        {
            // my_ui_novice
            ownCatalog: ['UI&UX'],
            priority: 32,
            cover: require('./my_ui_novice/cover.jpg'),
            title: '一本UI教材上的所有练习',
            attributes: [
                {key: '时间', content: '2014-10'},
                {key: '工具', content: 'PhotoShop'},
                {key: '关键字', content: '教程, UI, 扁平化'},
            ],
            brief: `2014年初开始关注UI，网上竟然找不到本教程，全是名字UI实则教平面的。年中的时候终于发现本新书
                《APP手机界面创意设计新手通》作者: 王巧伶 。跟着自学、练习了书中所有例子，培养了基本技能和审美。
                     `,
            links: [
                {key: '效果图', link: '/works_detail/my_ui_novice'},
            ]
        },
        {
            // my_ui_others
            ownCatalog: ['UI&UX'],
            priority: 40,
            cover: require('./my_ui_others/cover.jpg'),
            title: '其它零碎的UI作品',
            attributes: [
                {key: '时间', content: '2015'},
                {key: '工具', content: 'PhotoShop'},
                {key: '关键字', content: '私活,'},
            ],
            brief: `其它零碎的UI作品。
                     `,
            links: [
                {key: '效果图', link: '/works_detail/my_ui_others'},
                {key: '⇱UI中国/canaan_ui', link: 'https://i.ui.cn/ucenter/145848'},
            ]
        },
        {
            //test2
            ownCatalog: ['Frontend'],
            priority: 90,
            cover: require('../assets/images/cubes.gif'),
            title: '测试测试2',
            attributes: [
                {key: '语言', content: 'html/css/js, nodejs'},
                {key: '框架', content: 'Vue全家桶(不含vuex), Buefy, Bulma'},
                {key: '分类', content: '前端, UI, 部署'},
                {key: '场景', content: 'H5单页,一般性网站、个人网站、企业官网'},
            ],
            brief: `基于Vue、尝鲜Buefy开发的静态页面网站，追求美观。得益于vue，更易于扩展开发和维护，并具备交互能力。仿照自工程师yandev的网站设计图制作。
                                         `,
            links: [
                {key: '在线Demo', link: 'http://'},
                {key: '详细说明', link: 'http://'}
            ]
        }
    ]




// 3. 联系方式
export const socials = [
    {
        // qq推广 https://shang.qq.com/v3/index.html
        id: 1,
        name: 'qq_group',
        icon: 'account-group',
        recommend: true,
        content: 'QQ群',
        href: 'http://shang.qq.com/wpa/qunwpa?idkey=bb06d2574a9ba69fee5b6df2c48070908b1d51ccc4ca9b9105a20002668262cb',
        remark: `👏欢迎加入「Python新手交流QQ群 775648064」，有问题不用害羞直接问。我一直在线，不用@at，闲时解答。禁止广告、导流。
                <br>点击按钮加入群聊。`,
        remark_img: require('../info_maintain/contact/qq_group_qrcode.jpeg')
    },
    {
        id: 2,
        name: 'qq',
        icon: 'qqchat',
        content: 'QQ',
        href: 'http://wpa.qq.com/msgrd?v=3&uin=969501808&site=qq&menu=yes',
        remark: `QQ在办公方面依然好用，聊天、传文件。我一直在线，看到后会回复。主要接受商业咨询。免费交流优先QQ群，因为那样其它人也可以看到学习。
                <br>点击按钮添加好友。`,
        remark_img: require('../info_maintain/contact/qq_qrcode_1.jpeg')
    },
    {
        id: 3,
        name: 'wechat',
        icon: 'wechat',
        content: '微信',
        remark: `诚然微信是最流行的聊天工具，但我平时工作需要保持专注和双手在键盘上。仅接受商业需求咨询或已合作对象添加，请见谅。`,
        remark_img: require('../info_maintain/contact/wechat_qrcode_1.jpeg')
    },
    {
        id: 4,
        name: 'phone',
        icon: 'phone',
        content: '电话',
        remark: `电话是除了面谈外最有效率的沟通方式，但我平时工作需要保持专注。仅接收商业需求咨询，请见谅。`,
    },
    {
        id: 5,
        name: 'email_qq',
        icon: 'email',
        content: '邮箱-QQ',
        href: 'mailto:969501808@qq.com',
        remark: `QQ邮箱: 969501808@qq.com <br>点击按钮会调用默认邮件客户端`,
    },
    {
        id: 6,
        name: 'email_gmail',
        icon: 'gmail',
        content: '邮箱-Gmail',
        href: 'mailto:canaanyangzheng@gmail.com',
        remark: `谷歌邮箱: canaanyangzheng@gmail.com <br>点击按钮会调用默认邮件客户端`,
    },
    {
        id: 7,
        name: 'email_domain',
        icon: 'email',
        content: '邮箱-1owo',
        href: 'mailto:yz@1owo.com',
        remark: `我的域名邮箱: yz@1owo.com <br>点击按钮会调用默认邮件客户端`,
    },
    {
        id: 8,
        name: 'git',
        icon: 'git',
        content: 'Git',
        remark: `gitee:canaan_ge; github:canaan-yz 
                `,
    },
    {
        id: 9,
        name: 'others',
        icon: 'web',
        content: '其它',
        remark: `贴吧:注冊什么ID好呢; 网易新闻:闷声细软跑; B站:canaanbili; 
                微博、QQ空间、UI中国、csdn、twitter、telegram等停止更新或几乎不玩，不再赘述。
                `,
    },
]





// 4.视频类cos和cdn基础地址
// https网站内的http请求会自动升级，此处不管配置http还是https都会自动升级为https。配置为http会影响主网页的http安全🔐标识。
// 应该配置为https，并在cdn控制台配置cdn域名的https证书。
export const cdn_base_url= "https://tutorial.cdn.1owo.com"
// 回源地址在cdn控制台配置
// export const cos_base_url= "https://tutorial-1252072307.cos.ap-shanghai.myqcloud.com"