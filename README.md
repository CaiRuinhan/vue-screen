# vue-screen

利用 vue,charts 封装的可视化大屏快速搭建模板

预览链接：<https://blog.shenzjd.com/vue-screen/#/home>

URL 后面加参数?config=1 开启配置模式

配置模式预览链接：<https://blog.shenzjd.com/vue-screen/#/home?config=1>

- 标题
- 背景颜色
- 字体颜色
- 边框

![20210711220355](https://cdn.jsdelivr.net/gh/wu529778790/image/blog/20210711220355.png)

配置模式会自动加上红色边框，可以在右下角拖拽，点击组件可以拖动

## 注意

### echarts 默认取父级的宽高

在 vue-grid-layout 渲染完以后在开始渲染里面的内容,保证 echarts 在渲染之前就可以拿到真实的宽高

所以在 layoutReadyEvent 事件中做了控制

每次拖拽或者移动修改 layout 的数据的时候，都会从新渲染页面(利用这种模式强制重新渲染拿到实际的宽高，有人有更好的方法可以给我提 PR)

## 未来要做的事

- 标题背景可替换
- 边框可替换
- 组件自动读取文件

## 参考链接

- <https://jbaysolutions.github.io/vue-grid-layout/zh>
