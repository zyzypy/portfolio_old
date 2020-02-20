<template>
    <div id="v_work">
        <Header>
        </Header>

        <section id="s_catalogs" class="section">
            <div class="container">
                <ul name="catalogs" class=" is-mobile -catalogs">
                    <li class=" is-2"
                        v-for="item in catalogs"
                        :key="item.key"
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
                // 目录信息维护
                catalogs: [
                    {
                        key: 'backend',
                        name: '后端',
                        icon: 'console',
                        introduce: `我拥有7年后端经验....`,
                    },
                    {
                        key: 'backend',
                        name: '后端',
                        icon: 'console',
                        introduce: `我拥有7年后端经验....`,
                    },{
                        key: 'backend',
                        name: '后端',
                        icon: 'console',
                        introduce: `我拥有7年后端经验....`,
                    },{
                        key: 'backend',
                        name: '后端',
                        icon: 'console',
                        introduce: `我拥有7年后端经验....`,
                    },{
                        key: 'backend',
                        name: '后端',
                        icon: 'console',
                        introduce: `我拥有7年后端经验....`,
                    },{
                        key: 'backend',
                        name: '后端',
                        icon: 'console',
                        introduce: `我拥有7年后端经验....`,
                    },
                ],
                works: [

                ]
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
        justify-content: space-between;
    }
    .-catalogs li {
        /*border: 1px solid gray;*/
        flex-grow: 0; /*item排完后是否占用主轴方向空间，默认0，内容多宽占多宽。都为1时等分*/
        flex-shrink: 0; /*shrunk缩放，默认1 true，为0禁止屏幕缩小时也跟着变小*/
        border-bottom: 1px solid rgb(180,180,180);
        color: rgb(95,95,95);
        padding: 0.5rem 1rem;
    }
    .-catalogs li:hover {
        color: rgb(75,75,75);
        border-bottom: 1px solid rgb(100, 100, 100);
    }
    .-catalogs li a {
        display: block; /*扩大a触发范围,如果要求充满li则li需要padding=0*/
        width: 100%;
        height: 100%;
        text-align: center;
        color: inherit;
    }

</style>
