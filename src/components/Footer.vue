<template>
    <section id="s_footer">
        <footer class="-footer footer is-fixed-bottom">
            <div name="padding-height"></div>
            <div class="content has-text-centered">
                <p>&copy;2020 YangZheng, All rights reserved.</p>
                <p><a href="http://www.beian.miit.gov.cn/" class="has-text-grey-dark">豫ICP备16021043号-2</a></p>
                <p>Powered By Vue Buefy, Imitate YanDev's style.</p>
            </div>
        </footer>
    </section>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped type="text/css">
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