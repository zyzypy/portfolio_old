<template>
    <div id="donate">
        <HeaderSimple>
            <template v-slot:title>付费和捐赠说明</template>
            <template v-slot:subtitle>  </template>
        </HeaderSimple>

        <!-- 捐赠说明 -->
        <section name="donate-wrapper" class="container">
            <div name="qrcode" class="columns box">
                <img src="../info_maintain/donate/images/income_qrcode.png"
                     alt="yang_zheng_income_qrcode" class="column is-full">
            </div>

            <hr>
            <div class="markdown-body">
                <Post></Post>
            </div>
        </section>

        <Footer></Footer>
    </div>
</template>

<script>
    import Post from '@/info_maintain/donate/donate.md'
    import HeaderSimple from '@/components/HeaderSimple.vue'
    import Footer from '@/components/Footer.vue'

    export default {
        name: "Donate",
        components: {
            Post,
            HeaderSimple,
            Footer
        }
    }
</script>

<style scoped>
@import '~@/assets/css/github-markdown.css';

section[name='donate-wrapper'] {
    width: 1000px;
    max-width: 80%;
}
section[name='donate-wrapper'] div[name='qrcode'] {
    width: 80%;
    margin: 3rem auto;
}
</style>