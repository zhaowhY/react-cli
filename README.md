# react-cli

## build step

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm start

# build for production with minification
npm run build
```

## 目录结构
  ```bash
  - public
    - favicon.ico
    - index.html  # 入口html
  - src   # 业务代码
    - assets  # 图片，字体等资源
    - api # 接口交互模块
    - config # 配置变量
    - utils # 工具函数
    - styles # 全局样式
    - components  # 公共组件
    - router   # react router
    - store   # mobx
    - views   # 视图组件

    - App.js
    - index.js   # 入口js
    
  - static # 静态文件
  - .env.[mode] # 环境变量
  - README.MD
  ```

## 集成配置·
- stack: `webpack`+`react`+`react-router`+`mobx`+`axios`+`antd` +`mobx持久化js`+`svg-sprite-loader`+`单测`
- style: `less`
- eslint: `airbnb-base`