// 视频元信息维护。    作品网站非视频网站，视频录好后不会有变化，下面配置中写死，不用请求存储桶api获取元信息。
export const video_meta = {
    name: "Python视频教程-基础阶段",
    create_time: "2019-07",
    author: "杨铮",
    cdn_base_url: require('../works.js').cdn_base_url,  //cdn基础路径 http://tutorial.cdn.1owo.com
    cos_base_url: require('../works.js').cos_base_url,  //存储桶基础路径 https://tutorial-1252072307.cos.ap-shanghai.myqcloud.com
    episodes: [
        { key: 1, name: "L01语言介绍", size: 692/* Mb*/, duration: '01:30:50' /* H:M:S */, src: "/python_basic/L01语言介绍_v2.mp4"},
        { key: 2, name: "L02解释器安装", size: 292, duration: '00:54:22', src: "/python_basic/L02解释器安装_v2.mp4"},
        { key: 3, name: "L03pycharm安装使用", size: 425, duration: '01:20:30', src: "/python_basic/L03pycharm安装使用_v2.mp4"},
        { key: 4, name: "L04基础", size: 1420, duration: '01:25:21', src: "/python_basic/L04基础.mp4"},
        { key: 5, name: "L05控制语句", size: 1040, duration: '01:18:25', src: "/python_basic/L05控制语句.mp4"},
        { key: 6, name: "L06函数1p", size: 1080, duration: '01:14:00', src: "/python_basic/L06函数1p.mp4"},
        { key: 7, name: "L06函数2p", size: 1200, duration: '01:26:28', src: "/python_basic/L06函数2p.mp4"},
        { key: 8, name: "L07数据结构容器1p", size: 1150, duration: '00:58:44', src: "/python_basic/L07数据结构容器1p.mp4"},
        { key: 9, name: "L07数据结构容器2p", size: 1290, duration: '01:05:40', src: "/python_basic/L07数据结构容器2p.mp4"},
        { key: 10, name: "L08综合项目-学生管理系统", size: 1440, duration: '01:08:46', src: "/python_basic/L08综合项目-学生管理系统.mp4"},
        { key: 11, name: "L09类和实例1p", size: 762, duration: '00:43:46', src: "/python_basic/L09类和实例1p.mp4"},
        { key: 12, name: "L09类和实例2p", size: 731, duration: '00:43:55', src: "/python_basic/L09类和实例2p.mp4"},
        { key: 13, name: "L09类和实例3p", size: 1050, duration: '01:05:21', src: "/python_basic/L09类和实例3p.mp4"},
        { key: 14, name: "L09类和实例4p", size: 413, duration: '00:22:04', src: "/python_basic/L09类和实例4p.mp4"},
        { key: 15, name: "L10包和引用1p", size: 892, duration: '00:54:06', src: "/python_basic/L10包和引用1p.mp4"},
        { key: 16, name: "L10包和引用2p", size: 699, duration: '00:36:23', src: "/python_basic/L10包和引用2p.mp4"},
    ],
    // 简介内容有点多，想要一点格式。markdown依赖插件，渲染成组件也不能放到这个配置文件中。所以维护成html，前端v-html渲染。
    brief: `
        <p>2019年应公司要求，录制⏺️用做大学宣传体验和学生复习的基础课程。<b>完全从零基础开始的教程。</b></p>
        <p><b>优点: </b></p>
        <ul style="list-style: disc">
            <li>零基础入门视频。特意开了干净的虚拟机来展现每一步过程。</li>
            <li>非常细。任何一个不会的知识都可能导致后面做项目卡住。行业中有些人喜欢歧视培训班出来的基础差。所以学习中应该深入和补充软件行业相关知识。
                所以视频中尽可能详细，例如在安装python解释器是介绍了软件测试版本方面的知识，介绍等号时说了内存原理，有地方介绍到行业知识等等。
                在教学过程中，我尽量把我当年初学python的感受和几个班的教学经验带入进去，目标是知其然知其所以然。
            </li>
            <li>良好的音质。因为录制任务公司有奖金，一开心买了个专业级电容麦克风和声卡，想着以后还能录歌录乐器。大夏天关在卧室里、不开空调，录好后剪辑软件里低切掉底噪，改为标准响度，输出200kbps的AAC的音轨。</li>
            <li>剪辑。基础已讲过几遍，对自己发挥满意。但每小时难免会不小心停顿个10s思路断了，后期剪掉了。</li>
            <li>整体满意，比较推荐</li>
        </ul>
        <p><b>缺点: </b></p>
        <ul>
            <li>节奏慢。一是因为细，二是公司要求每大节一小时左右(不然怎么体现工作量😕)，但人的注意力是有限的，特别是自学，网络教程应尽可能简练。</li>
            <li>进度。一共录制8章，分为14p。后面应该还有常用包、数据库、一个命令行管理类项目。才算完成了'Python基础部分'。</li>
            <li>没学生气氛。自己一个人挺无聊的，一个小时到后面实在有点无聊🥱，也不敢夹带闲话。</li>
        </ul>
        <p>后续</p>
        <p>目前算是线下风格，最好有我再来几个学生，录制效果会更好。
        我理想中的线上基础课程应该有趣（我注意到现在一些教程以游戏来贯穿基础知识）、简洁（每小节10分钟以内，重点突出）、图片视频代替文字表达。
        目前进度不会继续往后录了。未来可能重新录制。</p>
        `,
    related_links: [
        // 可以为空数组
        { name: "⇱教案git仓库(gitee)", link:"https://gitee.com/canaan_ge/my_tutorial_python_zhiyou" }
    ],
    license: `<p>
            <b>版权属于本人和智游公司所有。</b>本视频未在其它任何视频平台发布，禁止第三方商用。此视频是前公司宣传推广资料，免费分发至院校学生和咨询者。
            出于个人宣传利益和公司宣传利益，本人在这里也进行无盈利分发。
            </p>
            <p><b>本人已从智游公司离职。</b>本视频是我个人总结和前公司推广资料。除了维持前公司宣传方面的利益，不再对前公司业务进行任何评价。
            我不会直接回答'自学好还是培训好'、'培训机构哪家好'、'智游怎么样'等问题。
            技术问题可以跟我交流，对公司业务有兴趣请直接联系公司。
            </p>
            `
}