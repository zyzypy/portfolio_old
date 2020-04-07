需求：作品说明
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

最终效果见 src/views/details/