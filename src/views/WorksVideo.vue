<template>
    <div id="work_video" class="canaan" >
        <HeaderSimple>
            <template v-slot:title>Work Introduce</template>
            <template v-slot:subtitle>{{ work_name }}</template>
        </HeaderSimple>

        <section name="main" class="container">
            <!-- player -->
            <div name="video-player-wrap" class="box">
                <videoPlayer
                        :options="playerOptions"
                        class="vjs-big-play-centered"
                >
                </videoPlayer>
            </div>
            <hr>

            <!-- video meta -->
            <div name="video-meta">
                <h1 class="title">{{ video_meta.name }}</h1>
                <div name="episodes">
                    <h2 class="is-size-5">选集</h2>
                    <div class="buttons">
                        <b-button
                                v-for="(item, index) in video_meta.episodes"
                                :key="index"
                                @click="switch_episode(item.key)"

                                target="_blank"
                                type="is-primary"
                                :class="{'is-outlined': item.key!==current_episode.key}"
                        >
                            {{ item.button }} {{ item.name }}
                        </b-button>
                    </div>
                </div>
                <hr>
                <div name="detail">
                    <h2 class="is-size-5">元信息</h2>
                    <p>大小: {{ current_episode.size }} Mb</p>
                    <p>时长: {{ current_episode.duration }} </p>
                    <p>格式: 1080p mp4 </p>
                    <p>💰流量费: {{ traffic_fee }}元。
                        <router-link :to="{ name: 'Donate' }" target="_blank">(为什么收费🤔？)</router-link>
                    </p>
                </div>
                <div name="breif">
                    <h2 class="is-size-5">介绍</h2>
                    <div v-html="video_meta.brief"></div>
                </div>
                <div name="license">
                    <h2 class="is-size-5">©️版权</h2>
                    <div v-html="video_meta.license"></div>
                </div>
            </div>
        </section>

        <Footer></Footer>
    </div>
</template>

<script>
    // 播放器插件 vue-video-player https://github.com/surmon-china/vue-video-player
    import { videoPlayer } from 'vue-video-player'
    // 作品视频元信息  在beforeMount()中引入
    // import { video_meta } from '@/info_maintain/${this.work_name}/video_meta.js'

    import HeaderSimple from '@/components/HeaderSimple.vue'
    import Footer from '@/components/Footer.vue'

    export default {
        name: "WorksVideo",
        components: {
            HeaderSimple,
            Footer,
            videoPlayer
        },
        data() {
            return {
                work_name: this.$route.params.work_name,
                // videojs文档 https://docs.videojs.com/tutorial-options.html#controls
                playerOptions: {
                    // videojs options
                    muted: false,
                    language: 'zh-Hans',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    sources: [{
                        type: "video/mp4",
                        src: "", //this.current_episode.src
                    }],
                    // poster: require("@/info_maintain/my_tutorial_python_base/cover.png"),  //使用视频第一帧
                    // width: '600', // 单位只能是像素。使用fluid和设置外层容器大小。
                    fluid: true, // 自动充满容器。
                    controls: true,
                    liveui: true
                },
                video_meta: {},
                current_episode: {}
            }
        },
        beforeMount(){
            // 引入视频信息
            this.video_meta = require(`@/info_maintain/${this.work_name}/video_meta.js`).video_meta
            // 默认播放第一集
            this.current_episode = this.video_meta.episodes[0]
        },
        computed: {
            traffic_fee() {
                let price = 0.4  // 对象存储 0.45和cdn 0.31的大约平均费用 元/GB
                return this.current_episode.size /1000 * price
            },

        },
        watch: {
            // 播放器地址跟随当前集。 可以使beforeMount()和switch_episode(key)减少一句赋值代码，增加逻辑独立性。
            current_episode() {
                this.playerOptions.sources[0].src = this.current_episode.src
            }
        },
        methods: {
            // 换集
            switch_episode(key) {
                this.current_episode = this.video_meta.episodes[key-1]
            }
        }


    }
</script>

<style scoped>
@import "~video.js/dist/video-js.css";

/* 播放器 */
section[name="main"] div[name="video-player-wrap"] {
    width: 80%;
    max-width: 1000px;
    margin: 3rem auto;
    padding: 4px; /* .box自带的阴影自然但padding太大，为0时video播放器又会超出边界 */
}
div[name="detail"], div[name="breif"], div[name="license"] {
    margin-top: 2rem;
}

/* */
</style>