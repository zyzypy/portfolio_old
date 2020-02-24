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
                        <img src="../assets/images/linux_server.gif" alt="illustration">
<!--                        <img :src="activeCatalog.illustration" alt="illustration">-->
                    </div>
                    <div class="column is-two-thirds level-right">
                        <p name="introduce" class="has-text-primary is-size-4 has-text-centered"
                            v-html="activeCatalog.introduce"
                        >
                            {{ activeCatalog.introduce }}
                        </p>
                    </div>
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
                        key: 'all',
                        name: '所有',
                        icon: 'console',
                        // 静态文件路径会被编译，绑定src时不能用本地路径
                        illustration: () => import('../assets/images/linux_server.gif'),
                        introduce: `我拥有7年后端经验....<br>addfd`,
                    },
                    {
                        key: 'backend',
                        name: '后端',
                        icon: 'console',
                        /* 起名选择困难症😂 一篇图形近义词的文章 https://blog.csdn.net/u010584319/article/details/82704889 */
                        illustration: '',
                        introduce: `我拥有7年后端经验....`,
                    },{
                        key: 'backend',
                        name: '后端',
                        icon: 'console',
                        illustration: '',
                        introduce: `我拥有7年后端经验....`,
                    },{
                        key: 'backend',
                        name: '后端',
                        icon: 'console',
                        illustration: '',
                        introduce: `我拥有7年后端经验....`,
                    },{
                        key: 'backend',
                        name: '后端',
                        icon: 'console',
                        illustration: '',
                        introduce: `我拥有7年后端经验....`,
                    },{
                        key: 'backend',
                        name: '后端',
                        icon: 'console',
                        illustration: '',
                        introduce: `我拥有7年后端经验....`,
                    }
                ]
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
        border-bottom: 1px solid rgb(180,180,180);/*装饰下滑线*/
        color: rgb(110,110,110);
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
        color: rgb(130,130,130);
        border-bottom: 1px solid rgb(100, 100, 100);
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
</style>
