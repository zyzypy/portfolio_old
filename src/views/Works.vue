<template>
    <div id="v_work">
        <Header>
        </Header>

        <section id="s_catalogs" class="section">
            <div class="container">
                <ul name="catalogs" class="is-mobile -catalogs">

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
                isActiveIndex: null,
                // 目录信息维护
                catalogs: [
                    {
                        key: 'all',
                        name: '所有',
                        icon: 'console',
                        illustration: '',
                        introduce: `我拥有7年后端经验....`,
                    },
                    {
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
                    },{
                        key: 'backend',
                        name: '后端',
                        icon: 'console',
                        illustration: '',
                        introduce: `我拥有7年后端经验....`,
                    }
                ],
                works: [

                ]
            }
        },
        methods: {
            // 点击子目录，更改样式和调出所属目录作品
            changeCatelogFocus(index) {
                this.isActiveIndex = index
            }
        }
    }
</script>

<style scoped>
    /* flex布局 http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html */
    .-catalogs {
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .-catalogs li {
        flex-grow: 0; /*item排完后是否占用主轴方向空间，默认0，内容多宽占多宽。都为1时等分*/
        flex-shrink: 0; /*shrunk缩放，默认1 true，为0禁止屏幕缩小时也跟着变小*/
        border-bottom: 1px solid rgb(180,180,180);/*装饰下滑线*/
        color: rgb(110,110,110);
        padding: 0rem 1rem 0rem 0.8rem; /*图标视觉重量轻，内容居中稍偏左*/
    }
    .-catalogs li:hover {
        color: rgb(130,130,130);
        border-bottom: 1px solid rgb(100, 100, 100);
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
    .-catalogs li.-active {
        /*点击目录时*/
        font-size: 1.5rem;
        border-bottom: none;
    }
    .-catalogs li.-active a {
        /*点击目录时。 因为上面li普通状态时color灰色，buefy自带的is-primary被覆盖，这里再定义一下 */
        color: #7957d5;
    }

</style>
