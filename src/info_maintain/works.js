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
    封面图     assets/images下或网址  30*20rem
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
            //test2
            ownCatalog: ['Frontend'],
            priority: 90,
            cover: require('../assets/images/cubes.gif'),
            title: 'xxx项目-2',
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
        },
        {
            // test
            ownCatalog: ['Frontend'],
            priority: 90,
            cover: require('../assets/images/cubes.gif'),
            title: 'xxx项目-2',
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


// 3.视频类cos和cdn基础地址
export const cdn_base_url= "http://tutorial.cdn.1owo.com"
export const cos_base_url= "https://tutorial-1252072307.cos.ap-shanghai.myqcloud.com"