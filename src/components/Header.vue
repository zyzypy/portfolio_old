<template>
    <!-- 公共头部 -->
    <!-- https://bulma.io/documentation/layout/hero/ -->
    <div id="c_header">
        <section class="hero is-medium is-primary -gradient-bg">
            <!-- Hero head: will stick at the top -->
            <div class="hero-head">
                <!-- (新版本已修复)buefy v0.8.10 navbar组件存在没有fixed-top属性切换路由报vue warn remove的一个错误，加上后首次进入首页无背景色 -->
                <b-navbar type="is-primary" class="-nav-gradient-bg is-primary" fixed-top>
                    <template slot="brand">
                        <b-navbar-item tag="router-link" :to="{ path: '/' }">
                            <h2 class="is-size-4">PORTFOLIO</h2>
                            <!-- <img -->
                            <!--    src="../assets/logo.png" -->
                            <!--    alt="aaa" -->
                            <!-- > -->
                        </b-navbar-item>
                    </template>
                    <template slot="end">
                        <b-navbar-item tag="router-link" :to="{path: '/works'}">
                            <b-icon
                                    icon="apps"
                                    size="is-medium"
                            >
                            </b-icon>
                            <span class="is-size-5">作品&demo</span>
                        </b-navbar-item>
                        <b-navbar-item tag="router-link" :to="{path: '/contact'}">
                            <!-- https://buefy.org/documentation/icon -->
                            <b-icon
                                    pack="mdi"
                                    icon="account-box"
                                    size="is-medium"
                            >
                            </b-icon>
                            <span class="is-size-5">联系我</span>
                        </b-navbar-item>
                    </template>

                    <!-- todo 移动端 菜单图标为黑色三横杠，应该用插槽改成白色。navitem内容居中。-->
                </b-navbar>
            </div>

            <!-- Hero content: will be in the middle -->
            <div class="hero-body">
                <div class="container has-text-centered fade-enter-active">
                    <!-- 大标题 -->
                    <h1 class="title is-size-1 has-text-white">
                        👋Hello, I'm YZ!
                    <!--  虽然应该大胆推广但还是有点招摇。。 -->
                    <!--  👋<img src="../assets/fonts/你好我是杨铮_微软仿宋.svg"> -->
                    </h1>
                    <h2 class="subtitle is-size-4 has-text-white-lighter "
                        :class="{'-typing-animation': isShowAnimation}"
                        @mouseenter="replayAnimation"
                        @mouseleave="clearTimeout"
                    >
                        {{ subtitleContent }}
                    </h2>
                    <h3 class="subtitle is-size-6 has-text-white-lighter">
                        <b-icon icon="map-marker" size="is-small"></b-icon>郑州
                    </h3>
                </div>
            </div>

            <!-- Hero footer: will stick at the bottom -->
            <div class="hero-foot">
                <!-- 拷贝自 https://yandev.de/contact 他的效果最好，svg负责曲线，搭配了css缩放和动画 -->
                <!-- todo 原作者构造了很长的path为了屏幕显示100%，并用css缩放进行修饰，第三层背景没动。如果像js中已被注释的另一种方法自动构造曲线更好。-->
                <div  style="transform: rotate(180deg) scale(2, 1); margin-top: 1px;" class="">
                    <svg  viewBox="0 0 1600 100" class="separator">
                        <path  d="M0 0v64c35 13 59 31 125 31 104 0 104-44 209-44s105 44 209 44 105-44 209-44 105 44 209 44 105-44 209-44 106 44 209 44 105-44 209-44h12V0z" class="step1"></path>
                        <path  d="M610 77c39 0 39-25 77-25s38 25 76 25 39-25 77-25 38 25 76 25 39-25 77-25 38 25 76 25 39-25 77-25 38 25 76 25 38-25 77-25 38 25 76 25 38-25 76-25 39 25 77 25c32 0 37-18 62-24V0H15v77h9c36 0 37-25 73-25s37 25 74 25 36-25 73-25 37 25 73 25 37-25 74-25 36 25 73 25 37-25 73-25 37 25 74 25" class="step2"></path>
                        <path  d="M0 0v69c25-12 37-32 80-32 60 0 60 40 120 40s60-40 120-40 60 40 120 40 60-40 120-40 60 40 120 40 60-40 120-40 61 40 120 40 60-40 120-40 60 40 120 40 60-40 120-40 60 40 120 40 60-40 120-40c42 0 55 20 80 32V0z" class="step3"></path>
                    </svg>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
    export default {
        name: "Header",
        data: function () {
            return {
                subtitleContent: '一位喜欢探究新事物的全栈工程师',  // 15字
                isShowAnimation: true,
                timer: null,
            }
        },
        methods: {
            sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms))
            },
            // 鼠标悬停重放打字动画小彩蛋
            replayAnimation() {
                this.timer = setTimeout(async ()=>{
                    this.isShowAnimation = false
                    // 删除class 动画样式再添加可重放动画，但必须间隔短暂延迟不然框架反应不过来
                    await this.sleep(100)
                                        // '一位喜欢探究新事物的全栈工程师'
                    this.subtitleContent = '被生活所迫啥都学的全干型人才😭',
                    this.isShowAnimation = true
                }, 3000)
            },
            clearTimeout() {
                clearTimeout(this.timer)
                this.timer = null
            },

            // 波浪特效(废弃 效果不够完美,代码原理挺清晰)
            // 纯svg https://segmentfault.com/a/1190000010627039
            // 或svg静态波浪(AI绘制后导出svg)+css动画
            // github上找了一个 纯svg然后封装的 (基于dom操作)https://github.com/SheldonLaw/svg-wave/blob/master/demo2.html
            // 没有找到其它效果更合适的vue组件
            genWaves(){
                // 组件配置
                var colors = ['rgba(255,255,255,1)', 'rgba(255,255,255,0.6)'],
                    componentWidth = "100%", // 组件宽度，int or 100%(相当于父元素的宽度)
                    componentHeight = "80";// 组件高度，int or 100%
                // 波浪配置
                var width = 200,		// 宽度
                    height = 40,		// 高度
                    deepth = 50,		// 深度
                    speed = 1, 			// 速度，关键：需要满足 width * 2 % speed == 0，否则波浪无法正常归位
                    speedOffset = 1,
                    focus = 0.5, 		// 波峰集中程度 [-1, 1]
                    offset = -width * 0.8, 	// 不同波浪的差
                    waveCount = 5;  	// 波浪数
                var x = [0, offset];
                var cacheData = ["", ""];

                var svgWave = document.querySelector('#svg-area');
                var paths = svgWave.querySelectorAll('path');
                var path1 = paths[0], path2 = paths[1];

                // 配置
                config();
                var oldFunc = window.onresize;
                window.onresize = function() {
                    oldFunc && oldFunc();
                    config(true);
                }

                // 启动
                requestAnimationFrame(wave);

                function config(resize) {
                    cacheData = ["",""];
                    svgWave.setAttribute('width', componentWidth);
                    svgWave.setAttribute('height', componentHeight);
                    var pxWidth = componentWidth == "100%" ? svgWave.parentNode.clientWidth : componentWidth;
                    waveCount = Math.ceil(pxWidth/width/2) + 1; // + 1是考虑到第二个波浪向左移，需要预留宽度
                    if (resize == true) return;
                    path1.setAttribute('fill', colors[0]);
                    path2.setAttribute('fill', colors[1]);

                }

                function wave() {
                    path1.setAttribute('d', generateData(0));
                    path2.setAttribute('d', generateData(1));
                    x[0] -= speed;
                    x[1] -= (speed + speedOffset);
                    requestAnimationFrame(wave);
                }
                // 动态生成path.d
                function generateData(index) {
                    // 起点
                    // 重置起点形成循环
                    if (x[index] % (width * 2) == 0) {
                        x[index] = 0;
                    }
                    var startX = x[index],
                        startY = height;
                    var start = [startX, startY].join(',');

                    if (cacheData[index] == "") {
                        // 波浪 = 贝塞尔曲线组合（正 + 倒）
                        var c_x1 = width / 4 * (focus + 1),
                            c_y1 = - height / 2,
                            c_y2 = - height / 2,
                            c_x2 = width  - c_x1,
                            c_x = width,
                            c_y = 0;
                        var curvetoUp =  [c_x1, c_y1, c_x2, c_y2, c_x, c_y].join(' ');
                        c_y1 = c_y2 = height / 2;
                        var curvetoDown =  [c_x1, c_y1, c_x2, c_y2, c_x, c_y].join(' ');
                        var curvetoData = "";
                        for(var i=0; i<waveCount; i++) {
                            curvetoData = curvetoData + 'c' + curvetoUp + 'c' + curvetoDown;
                        }

                        // 闭合
                        var end = 'l0,' + deepth + ' l-' + waveCount * width * 2 + ',0Z'
                        cacheData[index] = [curvetoData, end].join('');
                    }
                    return ['M', start, cacheData[index]].join('');
                }
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
    /*@import "../assets/fonts/Pacifico.ttf";*/

    .-nav-gradient-bg {
        background-color: transparent !important;
        background-image: linear-gradient(45deg, rgba(95, 174, 247, 0.95) 5%, rgba(151, 8, 204, 0.95) 95%) !important;
    }
    .-gradient-bg{
        /* 渐变背景
           色环相距60度，高饱和，冷暖平衡，时尚青紫渐变
           https://webkul.github.io/coolhue/
        */
        /*background-image: linear-gradient(45deg, #0aabc7, #bb09d3)*/
        background-image: linear-gradient(45deg, #43CBFF 5%, #9708CC 95%);
    }
    .hero.is-medium .hero-body{
        padding-top: 5rem !important;
        padding-bottom: 4rem !important;
    }

    /* 大标题 Hello, I'm YZ */
    @font-face {
        font-family: Pacifico;
        src: url("~@/assets/fonts/Pacifico.ttf");
    }
    .hero.is-medium .hero-body h1.title.is-size-1 {
        font-family: Pacifico, cursive;
        font-weight: bold;
        margin-bottom: 2rem;
    }
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
        width: 16em;   /*文字容器宽度。ch一英文字符宽度，一汉字约2ch。ch实际效果并不准，最终用em。框架字体1em，乘字数*/
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

    /* 波浪特效 */
    .step1 {
        opacity: .25;
        fill: #fff;
    }
    .step2 {
        opacity: .5;
        fill: #fff;
        animation: dividerAnimation2 120s linear infinite;
    }
    .step3 {
        opacity: 1;
        fill: #fff;
        animation: dividerAnimation1 120s linear infinite;
    }

    @keyframes dividerAnimation1 {
        0% {
            transform: translate(-25%)
        }
        50% {
            transform: translate(25%)
        }
        to {
            transform: translate(-25%)
        }
    }

    @keyframes dividerAnimation2 {
        0% {
            transform: translate(18%, 5%) scaleX(1.25)
        }
        50% {
            transform: translate(-18%, 5%) scaleX(1.25)
        }
        to {
            transform: translate(18%, 5%) scaleX(1.25)
        }
    }

    @keyframes dividerAnimation3 {
        0% {
            transform: translate(-8%, 10%)
        }
        50% {
            transform: translate(8%, 10%)
        }
        to {
            transform: translate(-8%, 10%)
        }
    }
</style>