// 视频元信息维护。    作品网站非视频网站，视频录好后不会有变化，下面配置中写死，不用请求存储桶api获取元信息。
export const video_meta = {
    name: "Python基础视频教程",
    create_time: "2019-07",
    author: "杨铮",
    src_base_url: "http://tutorial.1owo.com", //cdn或存储桶基础路径
    episode: [
        // size Mb  duration H:M:S
        { key: 1, button: "第一集", name: "安装解释器", size: 300/* Mb*/, duration: '01:10:20', src: "/"},
        { key: 2, button: "第二集", name: "变量", size: 300, duration: '01:10:20', src: "/"}
    ],
    // 简介内容有点多，又不想渲染成一段一团。markdown依赖插件，直接维护成html，前端v-html渲染。
    brief: `
        <p>2019年应前公司要求，录制⏺️用做大学宣传体验和学生复习的基础课程。<b>完全从零基础开始。</b></p>
        <p>优点</p>
        <ul>
            <li>麦克风</li>
            <li>已经讲过几遍</li>
            <li>非常细</li>
            <li>剪辑</li>
        </ul>
        <p>缺点</p>
        <ul>
            <li>节奏慢</li>
            <li>一共录制十四节</li>
            <li>没学生</li>
        </ul>
        `,
    related_links: [
        { key: "教案", link:"/#" }
    ],
    license: "属于本人和前公司所有。本视频未在其它任何视频平台发布。"
}