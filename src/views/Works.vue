<template>
    <div id="v_work">
        <Header>
        </Header>

        <!-- 子目录 -->
        <section id="s_catalogs" class="section"><!-- s_ 本代码文件中的id-->
            <div name="catalogs" class="container">
                <ul class="is-mobile -catalogs">

                    <li class="is-2"
                        v-for="(item,index) in catalogs"
                        :key="index"
                        :class="{'-active is-primary': index===isActiveIndex}"
                        @click="changeCatelogFocus(index, item.key, $event)"
                    >
                        <a href="#" class="is-center">
                            <b-icon
                                :icon="item.icon"
                                size="is-small"
                            ></b-icon>
                            <span>{{ item.name }}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>

        <!-- 当一个子目录激活时带出描述 -->
        <section id="s_catalog_description" class="" >
            <div class="container is-centered -desc">
                <div class="columns is-vcentered is-5">
                    <div name="illustration" class="column is-one-thirds level-left">
                        <img :src="activeCatalog.illustration" alt="illustration">
                    </div>
                    <div class="column is-two-thirds level-right">
                        <p name="introduce" class="has-text-primary is-size-5 has-text-centered"
                            v-html="activeCatalog.introduce"
                        >
                            {{ activeCatalog.introduce }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 当一个子目录激活时带出作品列表 -->
        <section id="s_works" class="-works -gradientbg">
            <div name="curved-separator"><img :src=separatorSrc class="-separator"></div>
            <div class="container is-centered has-text-white-ter">
                <div name="catalog" class="is-center has-text-centered is-size-2">
                    <b-icon :icon="activeCatalog.icon" size="is-medium"></b-icon>
                    <span>{{activeCatalog.key}}</span>
                </div>
                <div name="works" class="container">
                    <ul class="">
                        <li name="work" class="columns is-vcentered">
                            <div name="work-illustration" class="column is-two-fifths-desktop-only"><img alt="项目封面图" :src="activeCatalog.illustration"></div>
                            <div name="work-description" class="column is-three-fifths-desktop-only">
                                <h1 class="is-size-2 has-text-weight-semibold">xxx项目</h1>
                                <h2 class="is-size-5"><b>技术栈: </b>html,python</h2>
                                <h2 class="is-size-5"><b>框架: </b></h2>
                                <h2 class="is-size-5"><b>分类: </b></h2>
                                <h2 class="is-size-5"><b>场景: </b></h2>
                                <p class="is-size-5">简短一段介绍啦啦啦啦啦啦</p>
                                <span name="button-group"><button class="button">aaa</button></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
    // @ is an alias to /src
    import Header from '@/components/Header.vue'

    export default {
        name: 'Works',
        components: {
            Header
        },
        data: function () {
            return {
                // 子目录激活状态
                isActiveIndex: 0,
                // 目录信息维护
                catalogs: [
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
                ],
                separatorSrc: require('../assets/svgs/separator.svg')
            }
        },
        methods: {
            // 点击子目录，更改样式和调出所属目录作品
            changeCatelogFocus(index) {
                this.isActiveIndex = index
            }
        },
        computed: {
            // 点击子目录时带出插图和描述。v-for v-if连用可以办到但vue建议计算属性返回过滤数组
            activeCatalog: function() {
                return this.catalogs[this.isActiveIndex]
            }
        }
    }
</script>

<style scoped>
    /* 子目录 */
    /* buefy自带的布局 https://bulma.io/documentation/columns/basics/  经尝试 gap间隙未生效 flex-shrink css上去但无效，所以手写 */
    /* flex布局 http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html */
    .-catalogs {
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    /* 普通状态 */
    .-catalogs li {
        flex-grow: 0; /*item排完后是否占用主轴方向空间，默认0，内容多宽占多宽。都为1时等分*/
        flex-shrink: 0; /*shrunk缩放，默认1 true，为0禁止屏幕缩小时也跟着变小*/
        border-bottom: 1px solid rgb(200,200,200);/*装饰下滑线*/
        color: rgb(130,130,130);
        padding: 0rem 1rem 0rem 0.8rem; /*图标视觉重量轻，内容居中稍偏左*/
        transition: all 0.15s ease-out; /*状态过渡动效*/
    }
    .-catalogs li a {
        /*扩大a触发范围。文字居中。去除默认链接文字颜色。*/
        display: block;
        width: 100%;
        height: 100%;
        text-align: center;
        color: inherit;
    }
    .-catalogs li a span {
        margin-left: 0.3rem; /*避免图标和文字挨的太近*/
    }
    /* hover状态 */
    .-catalogs li:hover {
        color: rgb(110,110,110);
        border-bottom: 1px solid rgb(150, 150, 150);
    }
    /* 点击激活状态 */
    .-catalogs li.-active {
        font-size: 1.5rem;
        border-bottom: none;
    }
    .-catalogs li.-active a {
        color: #7957d5;/* 因为上面li普通状态时color灰色，buefy自带的is-primary被覆盖，这里再定义一下 */

    }


    /* 子目录对应的描述图片和文字 */
    .-desc.container {
        width: 80%;
        /*padding: ;*/
        margin-top: 3rem;
    }
    .-desc [name='illustration'] {
        padding: 0.5em;
    }

    /* 子目录对应的作品列表 */
    .-works {
        height: 5000px;
        margin-top: 7rem;
    }
    .-works.-gradientbg {
        background-image: linear-gradient(45deg, #43CBFF 5%, #9708CC 95%);
    }
    .-works .-separator {
        transform: scale(1.1, 1) translateY(-2px);
    }
    .-works div[name="catalog"] span {
        margin-left: 1rem;
    }
    .-works div[name="works"] {
        width: 80%;
        max-width: 1200px;
        margin-top: 2rem;
    }
    .-works ul {
    }
    .-works li[name="work"] {
        /* 一个作品 */
        width: 100%;
        /*height: 20rem; !* 文字可能多可能少，定死图片高，li不限制 *!*/
        margin: 0;
        padding: 2rem;
        border-bottom: 2px solid rgba(255,255,255,0.1); /* 分割线 */
        /*align-items: center;  flex导致的缩放比较影响图片效果  */
    }
    .-works li[name="work"] div[name="work-illustration"] {
        flex-shrink: 0;
    }
    .-works li[name="work"] div[name="work-illustration"] img{
        height: 100%;
        max-height: 20rem; /* 手机布局 图片宽度100%防止过大 */
        max-width: 30rem;
        border-radius: 14px;
    }
    .-works li[name="work"] div[name="work-description"] {
    }
    .-works li[name="work"] div[name="separate-line"] {
        width: 80%;
        border-top: 1px solid rgba(100,100,100,0.5);
        border-bottom: 2px solid rgba(0,0,0,0.5);
    }
</style>
