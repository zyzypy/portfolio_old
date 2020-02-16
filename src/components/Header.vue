<template>
    <!-- 公共头部 -->
    <!-- https://bulma.io/documentation/layout/hero/ -->
    <div id="header">
        <!-- 两个色值渐变gradient -->
        <section class="hero is-primary is-medium">
            <!-- Hero head: will stick at the top -->
            <div class="hero-head">
                <b-navbar>
                    <template slot="brand">
                        <b-navbar-item tag="router-link" :to="{ path: '/' }">
                            <img
                                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                                    alt="Lightweight UI components for Vue.js based on Bulma"
                            >
                        </b-navbar-item>
                    </template>
                    <template slot="end">
                        <b-navbar-item href="#/about">
                            <!-- https://buefy.org/documentation/icon -->
                            <b-icon
                                    pack="mdi"
                                    icon="account"
                                    size="is-small"
                            >
                            </b-icon>
                            <span>关于我</span>
                        </b-navbar-item>
                        <b-navbar-item href="#/apps">
                            <b-icon
                                    icon="apps"
                                    size="is-small"
                            >
                            </b-icon>
                            <span>作品&demo</span>
                        </b-navbar-item>
                    </template>

                    <template slot="end">
                        <b-navbar-item tag="div">
                            <div class="buttons">
                                <a class="button is-light" href="#/signin">
                                    <span>登录</span>
                                </a>
                            </div>
                        </b-navbar-item>
                    </template>
                </b-navbar>
            </div>

            <!-- Hero content: will be in the middle -->
            <div class="hero-body">
                <div class="container has-text-centered fade-enter-active">
                    <h1 class="title is-size-1 has-text-white">
                        👋你好，我是杨铮！
                    </h1>
                    <h2 class="subtitle is-size-4 has-text-white-lighter "
                        :class="{'-typing-animation': isShowAnimation}"
                        @mouseenter="replayAnimation"
                        @mouseleave="clearTimeout"
                    >
                        {{ subtitleContent }}
                    </h2>
                    <h3 class="subtitle is-size-6 has-text-grey-lighter">
                        <b-icon icon="map-marker" size="is-small"></b-icon>郑州
                    </h3>
                </div>
            </div>

            <!-- Hero footer: will stick at the bottom -->
            <div class="hero-foot">
                <nav class="tabs">
                    <div class="container">
                        <ul>
                            <li class="is-active"><a>Overview</a></li>
                            <li><a>Modifiers</a></li>
                            <li><a>Grid</a></li>
                            <li><a>Elements</a></li>
                            <li><a>Components</a></li>
                            <li><a>Layout</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>


    </div>
</template>

<script>
    export default {
        name: "Header",
        data: function () {
            return {
                subtitleContent: '一位喜欢探究新事物的全栈工程师',
                isShowAnimation: true,
                timer: null,
            }
        },
        methods: {
            sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms))
            },
            // 鼠标悬停重放动画小彩蛋，因为页面刚开始加载的一次可能没被注意到
            replayAnimation() {
                this.timer = setTimeout(async ()=>{
                    this.isShowAnimation = false
                    // 删除class 动画样式再添加可重放动画，但必须间隔短暂延迟不然框架反应不过来
                    await this.sleep(100)
                    this.isShowAnimation = true
                }, 3000)
            },
            clearTimeout() {
                clearTimeout(this.timer)
                this.timer = null
            }
        }
    }


    // 打字特效。（废弃，效果还是纯css好）
    // export default {
    //     name: "Header",
    //     data() {
    //         return{
    //             subtitle: '一位全栈开发工程师',
    //             subtitle2: ''
    //         }
    //     },
    //     methods: {
    //
    //         // setTimeOut()异步执行, for循环下使用导致逻辑问题。
    //         // timeout递归 https://blog.csdn.net/frank_fong/article/details/81567439
    //         // promise封装timeout（终于有像python time.sleep的东西了。。） https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
    //         sleep(ms) {
    //             return new Promise(resolve => setTimeout(resolve, ms))
    //         },
    //         async typing(){
    //             for(let i=0; i<this.subtitle.length; i++) {
    //                 this.subtitle2 = this.subtitle.slice(0, i) + '';
    //                 await this.sleep(200)
    //             }
    //             let _this = this
    //             setInterval(function() {
    //                 console.log(_this, _this.subtitle2.endsWith('|'))
    //                 if (_this.subtitle2.endsWith('|')){
    //                     _this.subtitle2 = _this.subtitle2.replace('|', ' ')
    //                 }else {
    //                     _this.subtitle2 += '|'
    //                 }
    //             }, 2000)
    //         }
    //
    //     },
    //     mounted: function() {
    //         // this.typing()
    //     }
    // }

</script>

<style scoped>
    /* 打字特效
       教程思路巧妙 https://www.weiyiqi.net/html/htmlcss/326.html
                  https://www.zhangxinxu.com/wordpress/2018/06/css3-animation-steps-step-start-end/?shrink=1
       仿yandev的效果
    */
    @keyframes typecursor {
        50% {
            border-color: transparent;
        }
    }
    @keyframes typetext {
        from {
            width: 0;/*容器宽度 from 0(遮住所有字符), to 总宽度*/
        }
    }
    .-typing-animation {
        width: 15.5em;   /*文字容器宽度。ch一英文字符宽度，一汉字约2ch。ch实际效果并不准，最终用em。框架字体1em，乘字数*/
        border-right: solid 4px rgba(249, 249, 249, 0.8);/*容器右边缘作为光标*/
        white-space: nowrap;/*css方式要求文本只能一行*/
        overflow: hidden;
        font: 1em monospace;/*英文最好等宽字体，中文不混用半角字符以获得最佳效果*/
        animation: typetext 3s steps(30) 2s 1 normal both,/*效果完成时间，文字效果延迟2s，两边同时展开动效*/
                   typecursor 1s infinite ease-out ;/*如果不想光标过渡，step-end过度禁止动效。steps非连续动画 值大于字数不用太精确*/
    }
    .hero-body .subtitle.is-size-4{
        margin: -1em auto 0 auto !important;
    }
</style>