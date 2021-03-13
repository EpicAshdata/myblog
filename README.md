# gradution

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
### 开发问题记录
```
1、在多个router-link访问同一个路由时
在传递参数后vue窗口并未自动刷新 所以无法访问新的数据
解决办法： 设置跳转触发事件 @click.native 在响应事件中先跳转到一个空白页面
然后再跳转回来 通过store在全局保存对应的key 然后跳转回来的url上添加对应的key值
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
