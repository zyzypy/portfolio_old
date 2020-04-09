<template>
    <div id="v_work">
        <Header>
        </Header>

        <!-- 子目录 -->
        <section id="s_catalogs" class="section"><!-- s_ 本代码文件中的id-->
            <div name="catalogs" class="container">
                <ul class="is-mobile -catalogs">
                    <!-- todo 小屏幕下布局不美观   这里用columns有些问题，flex shrink=0无法覆盖默认效果，is-5无法调整间隙 -->
                    <li class="is-2"
                        v-for="(item,index) in catalogs"
                        :key="index"
                        :class="{'-active is-primary': index===isActiveIndex}"
                        @click="changeCatelogFocus(index, item.key, $event)"
                    >
                        <!-- 这里采用事件方法返回过滤列表，也可以用动态路由和子组件实现功能 -->
                        <!-- 不要href="#"导致子目录更改后页面总是滚动到顶部 -->
                        <a href="javascript: void(0);" class="is-center">
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
                <!-- 正在激活的子目录 -->
                <div name="works-active-catalog" class="is-center has-text-centered is-size-2">
                    <b-icon :icon="activeCatalog.icon" size="is-medium"></b-icon>
                    <span>{{activeCatalog.key}}</span>
                </div>

                <!-- 作品列表 -->
                <div id="works" name="works" class="container">
                    <ul class="">
                        <li name="work" class="columns is-vcentered"
                            v-for="(work, index) in filteredWorks"
                            :key="index"
                        >
                            <div v-show="false">排序{{ work.priority || 50 }}</div>
                            <div name="work-cover" class="column is-two-fifths-desktop-only"><img alt="项目封面图" :src="work.cover"></div>
                            <div name="work-brief" class="column is-three-fifths-desktop-only">
                                <h1 class="is-size-2 has-text-weight-semibold">{{ work.title }}</h1>
                                <h2 class="is-size-5" v-for="attr in work.attributes" :key="attr.key"><b>{{ attr.key }}: &nbsp;</b>{{ attr.content }}</h2>
                                <p class="is-size-6">{{ work.brief }}</p>
                                <div name="work-links">
                                    <a v-for="link in work.links" :key="link.key"
                                       :href="link.link" target="_blank"
                                    >
                                        <b-button type="is-light" outlined size="is-medium" tag="button">
                                            {{ link.key }}
                                        </b-button>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section id="s_single_wave_separator">
            <div class="container -separator">
                <div name="single-wave-separator">
                    <svg class="-animated" viewBox="0 0 7323 300" >
                        <path d="M1213 35c794 12 1123 82 1963 87s1667-93 2647-96 1325 57 1499 86c2 1 0 194 0 194H0V74c-1-25 419-51 1213-39z"
                              fill="#fff"></path>
                    </svg>
                </div>
            </div>
        </section>

        <section id="s_footer">
            <footer class="footer -footer">
                <div name="padding-height"></div>
                <div class="content has-text-centered">
                    <p>&copy;2020 YangZheng, All rights reserved.</p>
                    <p><a href="http://www.beian.miit.gov.cn/" class="has-text-grey-dark">豫ICP备16021043号-2</a></p>
                    <p>Powered By Vue Buefy, Imitate YanDev's style.</p>
                </div>
            </footer>
        </section>


    </div>
</template>

<script>
    // @ is an alias to /src
    import Header from '@/components/Header.vue'
    import {catalogs, works} from '@/info_maintain/works.js'

    export default {
        name: 'Works',
        components: {
            Header
        },
        data: function () {
            return {
                // 子目录激活状态
                isActiveIndex: 0,
                // 目录信息维护  'All Backend UI&UX Frontend Server Hobbies'
                catalogs: catalogs,
                separatorSrc: require('../assets/svgs/separator.svg'),
                // 作品数据 src/info_maintain/works.js中维护
                works: works
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
            },
            // 目录激活时带出其下作品
            filteredWorks: function () {
                let filteredWorks
                let activeCatalogKey = this.catalogs[this.isActiveIndex].key
                if (activeCatalogKey === 'All') {
                    filteredWorks = this.works
                } else {
                    filteredWorks = this.works.filter(function (work) {
                        if (work.ownCatalog.indexOf(activeCatalogKey)===0){  /*js中的in跟python不同，判断key不能用于数组*/
                            return work
                        }
                    })
                }
                return filteredWorks
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
        height: 15rem;
        margin-top: 3rem;
    }
    .-desc [name='illustration'] {
        padding: 0.5em;
    }

    /* 子目录对应的作品列表 */
    .-works {
        height: auto;
        margin-top: 7rem;
        padding-bottom: 10rem;
    }
    .-works.-gradientbg {
        background-image: linear-gradient(45deg, #43CBFF 5%, #9708CC 95%);
    }
    .-works .-separator {
        transform: scale(1.1, 1) translateY(-2px);
    }
    .-works div[name="works-active-catalog"] span {
        margin-left: 1rem;
    }
    .-works div[name="works"] {
        width: 80%;
        max-width: 1200px;
        margin-top: 2rem;
    }
    .-works ul {
    }
    /* 一个作品 */
    .-works li[name="work"] {
        width: 100%;
        /*height: 20rem; !* 文字可能多可能少，定死图片高，li不限制 *!*/
        margin: 0;
        padding: 2rem;
        border-bottom: 2px solid rgba(255,255,255,0.1); /* 分割线 */
        /*align-items: center;  flex导致的缩放比较影响图片效果  */
    }
    .-works li[name="work"] div[name="work-cover"] {
        flex-shrink: 0;
    }
    .-works li[name="work"] div[name="work-cover"] img{
        height: 80%;
        max-height: 20rem; /* 手机布局 图片宽度100%防止过大 */
        max-width: 30rem;
        border-radius: 14px;
    }
    .-works li[name="work"] div[name="work-brief"] {
    }
    .-works li[name="work"] div[name="work-links"] {
        display: flex;
        margin-top: 1rem;
    }
    .-works li[name="work"] div[name="work-links"] button {
        height: auto;   /*默认样式固定的button高度导致border增大时文字不垂直局中*/
        margin-right: 1rem;
        border: 2px solid white;
        flex-grow: 1;
    }
    .-works li[name="work"] div[name="separate-line"] {
        width: 80%;
        border-top: 1px solid rgba(100,100,100,0.5);
        border-bottom: 2px solid rgba(0,0,0,0.5);
    }


    /* 作品列表结束下面的 动态底边 */
    /*  svg图片来自原作者 思路：svg曲线缩放调整平缓程度，慢速左右平移动，遮盖背景。
        我的html结构如果svg在work中即使绝对定位，100%宽度仍然限制在work的container宽度中，所以写到footer中
     */
    .-separator.container {
        position: relative;
        height: 0px;
    }
    .-separator div[name="single-wave-separator"] {
        position: absolute;
        z-index: 0;
        width: 700%; /*7323*/
        height: 200px;
        top: -200px;
        left: -1000px;
        overflow: hidden;
    }
    .-separator div[name="single-wave-separator"] .-animated {
        animation: separatorAnimation 30s ease-in-out infinite;
    }
    @keyframes separatorAnimation {
        0% {
            -webkit-transform:translateX(-25%);
            transform:translateX(-25%)
        } 50% {
            -webkit-transform:translateX(0);
            transform:translateX(0)
        }to{
            -webkit-transform:translateX(-25%);
            transform:translateX(-25%)}
        }


    /* 页脚 */
    .-footer {
        background-color: white;
        padding-bottom: 1rem;
    }
    .-footer div[name="padding-height"] {
        height: 200px;
    }
    .-footer div[name="content"] {
    }
    .-footer a, a:hover {
        color: black;
    }
</style>
