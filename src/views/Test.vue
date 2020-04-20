q<template>
    <div id="test" >
        test
        <videoPlayer
            :options="playerOptions"
            class="vjs-big-play-centered"
        >

        </videoPlayer>
    </div>
</template>

<script>
    // require styles
    // import 'video.js/dist/video-js.css'
    import { videoPlayer } from 'vue-video-player'

    export default {
        name: "Test",
        components: {
            videoPlayer
        },
        data() {
            return {
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
                    width: '600',
                    controls: true,
                    // fluid: true, //自动充满容器
                    liveui: true
                }
            }
        }
    }
</script>

<style scoped>
@import "~video.js/dist/video-js.css";
</style>