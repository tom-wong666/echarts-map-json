# echarts-map-json

echarts地图demo，包含下探到市级的json数据：  
1，全国地图采用china.js(因为实践中使用china.json无法描绘出南海诸岛，不符合测绘法规定)  
2，省市级别使用json文件  
3，资源结构如下  
map  文件夹  
├──china.js  
├──china.json  
├──codeToJson.js code和json的映射文件  
└──province  
   ├──guangdong.json  
   └──guangdong  文件夹  
      └──shenzhen.json  

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
