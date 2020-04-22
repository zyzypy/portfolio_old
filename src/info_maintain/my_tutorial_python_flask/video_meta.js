export const video_meta = {
    name: "Python视频教程-Flask框架",
    create_time: "2018-06",
    author: "杨铮",
    cdn_base_url: require('../works.js').cdn_base_url,
    cos_base_url: require('../works.js').cos_base_url,
    episodes: [
        { key: 1, name: "L0介绍", size: 219, duration: '00:17:40', src: "/python_flask/L0介绍.mp4"},
        { key: 2, name: "L1环境准备", size: 330, duration: '00:40:00', src: "/python_flask/L1环境准备.mp4"},
        { key: 3, name: "L2最小的应用", size: 330, duration: '00:24:52', src: "/python_flask/L2最小的应用.mp4"},
        { key: 4, name: "L3路由", size: 877, duration: '00:36:39', src: "/python_flask/L3路由.mp4"},
        { key: 5, name: "L4前端基础-空文件未录制", size: 0, duration: '00:00:00', src: "/python_flask/L4前端基础-空文件未录.mp4"},
        { key: 6, name: "L5请求和响应", size: 301, duration: '00:42:58', src: "/python_flask/L5请求和响应.mp4"},
        { key: 7, name: "L6模板引擎", size: 320, duration: '00:43:04', src: "/python_flask/L6模板引擎.mp4"},
        { key: 8, name: "L7表单1", size: 275, duration: '00:38:19', src: "/python_flask/L7表单1p.mp4"},
        { key: 9, name: "L7表单2", size: 527, duration: '00:20:02', src: "/python_flask/L7表单2p.mp4"},
        { key: 10, name: "L8数据库1", size: 609, duration: '00:29:58', src: "/python_flask/L8数据库1p.mp4"},
        { key: 11, name: "L8数据库2", size: 64, duration: '00:9:22', src: "/python_flask/L8数据库2p.mp4"},
    ],
    brief: `
        <p>2018年跟大象互联网圈合作录制的<b>Python Flask Web开发</b>视频教程<b>（半成品）</b>。</p>
        <p>关于终止合作：双方为此项目都投入了大量精力金钱，我花费了两个月时间整理书写图文教程、相关宣传资料、预先录制准备、录制、校对、学生互动等工作精力；
           对方投入了项目管理、活动组织、渠道宣传、一天专业摄像团队等费用。但最终因佣金、运营效果等原因终止合作。双方虽有不快，但最终也互相理解一些。
           本人对大象圈保持中立评价。
        </p>
        <p>学习此教程需要python基础，建议配合下方链接的图文教程。开始学习web开发技能。</p>
        <p>缺点: </p>
        <ul>
            <li>进度终止。只进行到flask框架各项基础，未综合使用，未开始综合项目。</li>
            <li>视频分辨率、码率、底噪控制一般。</li>
            <li>未剪辑。一方面当时个人水平有限，另一方面web开发多文件跳转、边讲边做、一遍录制难免出错，一个小错误可能导致5分钟的中断。
            视频为半成品后期未剪掉。</li>
        </ul>
        <p><b>推荐程度，不太推荐，</b>这个作品更多作用是我的一个总结，建议观看图文教程或另一个项目Python基础视频教程。
           除了因为上述缺点。还因为web开发需求多方面技能。原计划太大了，flask基础、前端基础、
           一个不用插件侧重原理的管理类项目，一个使用插件接近实际产品的项目。最终发现仅仅flask基础部分已消耗大量精力，学生开始学习程度也不好统一。
         </p>
        <p>后续: </p>
        后续不会接着更新。可能会重新录制。
        `,
    related_links: [
        { name: "配套图文教程", link:"https://hexo.1owo.com/categories/flask/" },
        { name: "（todo待更新）推荐书目《Flask Web Development 2nd》pdf", link:"/#" }
    ],
    license: `
            <p>版权本人独有。视频中'大象圈讲师'和logo不再具备意义。禁止转载、商用。</p>
            `
}