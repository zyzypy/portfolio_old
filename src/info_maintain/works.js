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
        name: '后端',
        icon: 'console',
        illustration: require('../assets/images/python.gif'),
        introduce: `
                                    从大学时代的C、C++、Java基础<br>
                                    到毕业时以Java入行，但工作一段时间后失去兴趣<br>
                                    再到后来重拾编程，对Python系统自学<br>
                                    在不同公司项目中积累经验<br>
                                    少量接触nodejs、go、ruby、abap等其它语言生态<br>
                                    主语言为Python，我崇尚其简洁的设计哲学，精通核心编程、爬虫、Web开发、ERP、智能硬件等方向<br>
                                    后端深奥仍在学习进步中
                                    `
    },{
        key: 'UI&UX',
        name: '设计&交互',
        icon: 'brush',
        illustration: require('../assets/images/ui_design.gif'),
        introduce: `可能有人奇怪编程和设计相差的有些远<br>
                                    说来话长，有兴趣可以阅读我的故事<br>
                                    设计是个美丽、充满想象力、比编程愉快的职业<br>
                                    合理的交互让纠结低效的流程变得舒心<br>
                                    以下作品时间为2013-2014年，质量跟现在成熟的行业有差距
                                    `
    },{
        key: 'Frontend',
        name: '前端',
        icon: 'console',
        illustration: require('../assets/images/frontend.gif'),
        introduce: `作为后端一直对前端饶有兴趣，想把一个东西展现出来<br>
                                    从大学时代html/js jquery/css基础搭配后端做项目<br>
                                    后来为了让项目好看一点，学习了bootstrap<br>
                                    2015年，郑州一家互联网教育公司中前端组长推广vue2.0、前后端分离，后端组去前端组帮忙赶进度<br>
                                    我才知道nodejs、vue新前端时代已到来<br>
                                    2019下半年，公司前端讲师不够，我兼任带一个前端班学生，从前端基础到node到vue项目<br>
                                    授课过程中前端基础得到锻炼、框架也随之清晰，开始用起来了
                                    `
    },{
        key: 'Server',
        name: '服务器',
        icon: 'server',
        illustration: require('../assets/images/linux_server.gif'),
        introduce: `大学时只听说过linux好像很🐂🍺的样子，但并不了解<br>
                                    虚拟机装了一个ubuntu，尝鲜桌面后就不知道干嘛了<br>
                                    习得python基础后开始玩树莓派<br>
                                    实验楼网站上的linux基础教程很好<br>
                                    发觉linux的精髓是命令行和做服务，只有前期令人生畏，其余只要搜索教程和变更命令就行<br>
                                    我也想像做一个可以访问的网站<br>
                                    云服务器、域名、备案、部署，一套做下来就会了<br>
                                    熟悉各种linux基础操作和搭建常见服务，熟悉阿里云、腾讯云生态
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
            // my_ngrok
            ownCatalog: ['Server'],
            priority: 65,
            cover: require('./my_ngrok/cover.png'),
            title: 'Ngrok内网穿透',
            attributes: [
                {key: '时间', content: '2018-05'},
                {key: '语言', content: 'Go'},
                {key: '关键字', content: '开源自建, 内网穿透, 反向代理'},
                {key: '场景', content: '在家用宽带、个人电脑上架设服务; 本地便捷调试微信小程序项目。'},
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
            // my_srs
            ownCatalog: ['Server'],
            priority: 60,
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
            priority: 50,
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
            priority: 50,
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
