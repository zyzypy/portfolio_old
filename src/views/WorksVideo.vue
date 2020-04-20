<template>
    <div id="work_video" class="" >
        <HeaderSimple>
            <template v-slot:title>Work Introduce</template>
            <template v-slot:subtitle>{{ work_name }}</template>
        </HeaderSimple>

        <section name="" class="container">
            player...
            {{ video_meta }}
            {{ video_meta.name }}
            <videoPlayer
                    :options="playerOptions"
                    class="vjs-big-play-centered"
            >
            </videoPlayer>
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
        beforeMount(){
            // 引入视频信息
            console.log(`@/info_maintain/${this.work_name}/video_meta.js`)
            console.log(`@/info_maintain/my_tutorial_python_base/video_meta.js`)
            this.video_meta = require(`@/info_maintain/${this.work_name}/video_meta.js`).video_meta
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
                        src: "https://tutorial-1252072307.cos.ap-shanghai.myqcloud.com/python_basic/L02%E8%A7%A3%E9%87%8A%E5%99%A8%E5%AE%89%E8%A3%85_v2.mp4"
                    }],
                    poster: require("@/info_maintain/my_tutorial_python_base/cover.png"),
                    // width: '600', // 值只能是像素。使用fluid和设置容器rem。
                    fluid: true, // 自动充满容器。
                    controls: true,
                    liveui: true
                },
                video_meta: {}
            }
        }


    }
</script>

<style scoped>
@import "~video.js/dist/video-js.css";
</style>