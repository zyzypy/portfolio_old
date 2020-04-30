<template>
    <div id="contact">
        <Header></Header>

        <section name="contact" class="container is-primary">
            <h2 class="is-size-3">Contact Me</h2>
            <br>
            <div name="socials" class="columns buttons">
                <b-button
                    v-for="(item, index) in socials"
                    :key="index"
                    :href="item.href"
                    :icon-left="item.icon"
                    :name="item.name"
                    @mouseover="mouseoverSocial(item)"
                    @mouseout="mouseoutSocial"

                    class="column -button"
                    tag="a" target="_blank" type="is-primary" size="is-medium" outlined rounded
                >
                    {{ item.content }}
                </b-button>
            </div>
            <div v-if="current_social"
                 name="social-remark" class="columns is-centered">
                <div v-html="current_social.remark" class="column is-3 "></div>
                <img :src="current_social.remark_img" v-if="current_social.remark_img"  class="column is-2" alt="备注配图">
            </div>

            <div name="divider" class="has-background-primary has-text-centered">
                <span class="has-text-primary">OR</span>
            </div>

            <!-- 表单 -->
            <form>
                <h2 class="is-size-3 ">Contact Form</h2>
                <p class="has-text-grey">⚠️正在开发，表单尚不能提交</p>
                <br>

                <b-field label="姓名*" type="is-primary" class="">
                    <b-input type="text" maxlength="20" icon="account-outline" placeholder="真实姓名或网名" required>
                    </b-input>
                </b-field>
                <b-field label="邮箱*" type="is-primary">
                    <b-input type="email" maxlength="80" icon="email-outline" placeholder="example@xxx.com" required>
                    </b-input>
                </b-field>
                <b-field label="主题*" type="is-primary">
                    <b-input type="text" maxlength="80" icon="text-subject" placeholder="为什么照着教程抄代码还运行报错？/你好我想咨询建站" required>
                    </b-input>
                </b-field>
                <b-field label="正文" type="is-primary">
                    <b-input type="textarea" minlength="0" maxlength="1000" placeholder="正文，字数0～1000。">
                    </b-input>
                </b-field>
                <b-field label="类型" type="is-primary" class="">
                    <b-radio v-model="radio" name="types" native-value="ask_question" size="is-medium" checked>提问</b-radio>
                    <b-radio v-model="radio" name="types" native-value="business" size="is-medium">商业需求</b-radio>
                    <b-radio v-model="radio" name="types" native-value="question" size="is-medium">Bug反馈</b-radio>
                    <b-radio v-model="radio" name="types" native-value="question" size="is-medium">其它</b-radio>
                </b-field>
                <hr>
                <b-button disabled tag="button" native-type="submit" type="is-primary" size="is-medium" icon-left="send-outline" expanded rounded>提交</b-button>
            </form>

            <Footer></Footer>
        </section>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'

    import {socials} from '@/info_maintain/works.js'

    export default {
        name: "Contact",
        data() {
            return {
                socials: socials,
                current_social: null,   // {}

                radio: '',
            }
        },
        components: {
            Header,
            Footer
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
/* 社交按钮组 */
section[name="contact"] .-button {
    display: inline-flex;  /* 覆盖掉column自带的padding，否则文字不居中 */
    border-width: 2px;
    border-radius: 0.73rem;
}

/* 分割线 or */
section[name="contact"] div[name="divider"] {
    position: relative;
    height: 1px;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
}
section[name="contact"] div[name="divider"] span {
    position: absolute;
    top: -0.75rem;
    display: inline-block;
    width: 3rem;
    background-color: white;
}
</style>