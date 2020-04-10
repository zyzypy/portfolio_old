<template>
    <div class="">
        <HeaderSimple>
            <template v-slot:title>Work Introduce</template>
            <template v-slot:subtitle>{{ work_name }}</template>
        </HeaderSimple>

        <section name="markdown-wrapper" class="container">
            <div class="markdown-body">
                <Post></Post>
            </div>
        </section>

        <Footer></Footer>
    </div>
</template>

<script>
    import Post from '@/info_maintain/my_goaccess/my_goaccess.md'

    import HeaderSimple from '@/components/HeaderSimple.vue'
    import Footer from '@/components/Footer.vue'


    export default {
        name: "WorkDetailMyGoaccess",
        components: {
            Post,
            HeaderSimple,
            Footer,
        },
        data() {
          return {
              work_name: this.$route.params.work_name,
          }
        }
    }
</script>

<style scoped>
@import '~@/assets/css/github-markdown.css';
/* custom 原样式ul没有list-style-type ,在大约260行左右添加 */

section[name='markdown-wrapper'] {
    width: 1000px;
    max-width: 90%;
}
</style>