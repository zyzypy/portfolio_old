<template>
    <div id="contact">
        <Header></Header>

        <section name="contact" class="container is-primary">
            <h2 class="is-size-3 has-text-primary">Contact Me</h2>
            <br>
            <div name="socials" class="columns buttons">
                <b-button
                    v-for="(item, index) in socials"
                    :key="index"
                    :href="item.href"
                    :icon-left="item.icon"
                    :name="item.name"
                    @mouseover="mouseoverSocial(item)"

                    class="column   -button"
                    tag="a" target="_blank" type="is-primary" size="is-medium" outlined rounded
                >
                    {{ item.content }}
                </b-button>
            </div>
            <div v-if="current_social"
                 name="social-remark" class="container column is-one-quarter-desktop">
                <div v-html="current_social.remark"></div>
                <img :src="current_social.remark_img" v-if="current_social.remark_img" alt="备注配图">
            </div>


            <hr>
            <form></form>
        </section>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import {socials} from '@/info_maintain/works'

    export default {
        name: "Contact",
        data() {
            return {
                socials: socials,
                current_social: null   // {}
            }
        },
        components: {
            Header
        },
        methods: {
            mouseoverSocial(item) {
                // 鼠标悬浮在按钮上时带出备注、备注图
                this.current_social = item
            },
            mouseoutSocial() {
                this.current_social = null
            },
        }
    }
</script>

<style scoped>
section[name="contact"] .-button {
    display: inline-flex;
    border-width: 2px;
    border-radius: 0.73rem;
}
</style>