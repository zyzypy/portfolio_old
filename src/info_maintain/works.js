// 维护数据  作品页分类catalogs，作品列表works
export const catalogs = [
    {
        key: 'All',
        name: '所有',
        icon: 'apps',
        // 静态文件路径会被编译，绑定src时不能用本地路径,使用require
        // 起名选择困难症😂 一篇图形近义词的文章 https://blog.csdn.net/u010584319/article/details/82704889
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


export const works =
    [
        {
            /* 维护
                封面图 assets/images下 或网址
                h2关键字   4组左右
                brief     50-200字
                links按钮组   1-4个
             */
            ownCatalog: ['Frontend', 'UI&UX', 'Server'],
            cover: require('../assets/images/cubes.gif'),
            title: '个人作品页面',
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
        }, {
            //test2
            ownCatalog: ['Frontend'],
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
