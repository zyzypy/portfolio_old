<template>
    <div class="">
        <HeaderSimple>
            <template v-slot:title>Work Introduce</template>
            <template v-slot:subtitle>{{ work_name }}</template>
        </HeaderSimple>

        <section name="markdown-wrapper" class="container">
            <div class="markdown-body">
                <!-- <Post></Post> -->
                <component :is="com_post" ></component>
            </div>
        </section>

        <Footer></Footer>
    </div>
</template>

<script>
    // import Post from '@/info_maintain/my_goaccess/my_goaccess.md'
    // 根据路由动态加载my_xxx.md   在下方组件beforeMount()中引入
    // md文件中的图片如果路径错误会导致加载报错
    // 动态加载组件 https://www.cnblogs.com/PiaoYu/p/10759554.html  https://cn.vuejs.org/v2/api/#component
    import HeaderSimple from '@/components/HeaderSimple.vue'
    import Footer from '@/components/Footer.vue'


    export default {
        name: "WorkDetailMyGoaccess",
        components: {
            // Post: ()=>import('@/info_maintain/my_goaccess/'+this.$route.params.work_name+'.md'),
            // 这时this undefined,应该在实例化后引入路由参数
            HeaderSimple,
            Footer,
        },
        data() {
          return {
              work_name: this.$route.params.work_name,
              com_post: {}
          }
        },
        watch: {
            '$route' (to, from) {
                // 对路由变化作出响应...
                if (to.path !== from.path){
                    this.work_name = to.params.work_name
                }
            }
        },
        beforeMount(){
            this.com_post = ()=>import(`@/info_maintain/${this.work_name}/${this.work_name}.md`)
        }
    }
</script>

<style scoped>
@import '~@/assets/css/github-markdown.css';
/* 原样式ul没有list-style-type ,在github-markdown.css找到ul选择器添加 */

section[name='markdown-wrapper'] {
    width: 1000px;
    max-width: 90%;
}
</style>