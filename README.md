# 程序员的专属微信公众号编辑器：定制 Markdown 转 HTML


## 效果（Gif）

- [点击我查看](http://img.gitnavi.com/markdown/cdk8s-markdown-to-html-demo.gif)

## 仓库地址

- <https://github.com/cdk8s/cdk8s-markdown-to-html>
- <https://gitee.com/cdk8s/cdk8s-markdown-to-html>

## 使用方法

1. 安装 [nodejs](https://nodejs.org/zh-cn/) 

2. 项目根路径执行 

```
npm config set registry https://registry.npm.taobao.org
```

3. 项目根路径执行 
```
npm install
```

4. 项目根路径执行 
```
npm start
```

## 背景


在程序员的世界里，只要习惯用 Git，写文章必然就是 Markdown 了。

近来几天，重新玩起了微信公众号，最不能忍受的就是那个编辑器，效率很低。虽然微信现在已经提供了模板功能，但是对于喜欢多平台发文的程序员来讲，维护多个内容成本过高。


## 现状

了解了目前市场上主流的编辑器：

- [135 编辑器](https://www.135editor.com/)
- [壹伴](https://yiban.io/?utm=bianjiqihaoyong)
- [秀米](https://xiumi.us/#/)
- [小蚂蚁](http://www.xmyeditor.com/)


结论是：都不是我想要的。

这几个编辑器都是偏向推广玩法的类型，过于花俏。好一点的模板也基本都是收费的，所以只能放弃。

## 转变

经过 Google 几下，发现微信编辑器是可以直接复制 HTML 代码块，这就给我们提供了更多可能。

既然常规主流的玩法无法满足需求，那我就换了一个思路：`继续 Markdown 书写，然后借用转换器转换`

我开始换关键字搜索：`React markdown 组件`

## 运气

在搜索的过程中我偶然遇到了：[markdown-nice](https://github.com/zhning12/markdown-nice)

```
简介
支持自定义样式的 Markdown 编辑器
支持微信公众号排版
支持知乎、稀土掘金、博客园和CSDN等一系列平台
内容和自定义样式浏览器中实时保存
可在工具中提交自定义主题
支持上传图片、脚注、公式
```

因为用了 antd，所以看起来非常简洁，但是也因此非常庞大，但是这一点能接受。

## 需求

研究了作者提供了几个主题，发现彼此审美上有偏差，自己实在忍受不了，所以就 fork 了一份，开始大面积调整。

```
添加了一个 CDK8S 主题
调整默认主题为 CDK8S
调整默认配色为 atomOneLight
添加开关 `IS_STYLE_READ_CACHE_OPEN` 默认主题从 localstorage 读取
修改图床上传接口，改为私有服务的 API
去掉第一次加载弹出的更新弹窗
```

因为 CDK8S 这个关键字是唯一的，所以大家可以参考我的方式，自己定制自己的需求。


## 感谢

- 感谢 zhning12 童鞋
- 感谢 [markdown-nice](https://github.com/zhning12/markdown-nice)

