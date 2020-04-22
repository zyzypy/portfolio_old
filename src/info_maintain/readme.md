作品列表信息 works.js中维护
说明信息维护 src/info_maintain/my_xxx/
静态文件在/public目录下维护。vue-cli3 static files   https://cli.vuejs.org/guide/html-and-static-assets.html#html

示例：
markdown型 src/views/WorkDetail.vue  src/info_maintain/my_access
video型 src/views/WorkVideo.vue  src/info_maintain/my_tutorial_python_base

可能的报错:
- 每一个作品详情说明页面信息 my_app.md 中维护。图片中文名会导致webpack报错。
- vue-markdown-loader  如果md文件中代码块html中有script标签。
- 
---
关于md渲染细节  
需求：md渲染到vue中。
选型：
- html 说明比较简单，搭配buefy也可以做按钮、tab页、画廊等
- md转vue组件
- 加载原始md文件。
最终为了写文章便利性、一致性、易维护，选择加载原始md文件。

搜到一些库，最终选择
[github vue-markdown-loader](https://github.com/QingWei-Li/vue-markdown-loader)
官方demo是挂载到根组件，非常简单，无法成功。    
重要[详见这篇文章](https://evolly.one/2019/07/01/118-vue-markdown-loader/)

安装
cnpm i vue-markdown-loader -D
cnpm i  vue-loader vue-template-compiler -D
插件翻译成的html不带class无法应用buefy的样式，需要再装一个样式。
cnpm i github-markdown-css -D  

这个库的一些bug：


