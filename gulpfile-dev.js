// 加载模块
const {task,src,dest,watch,series,parallel} = require('gulp');
// 用于加载其他gulp插件
const load = require('gulp-load-plugins')();
// nodejs的del模块用于删除文件
const del = require('del');

// 删除dist目录
task('delDist',async ()=>{
  await del('./dist');
})

// 处理图片
task('image', async ()=>{
  src('./img/*.*')
  .pipe(dest('./dist/img'))
  .pipe(load.connect.reload())
})

// 处理sass
task('sass', async ()=>{
  src('./sass/*.scss')
  .pipe(load.sassChina())
  .pipe(dest('./dist/sass'))
  .pipe(load.connect.reload())
})

// 处理js
task('script', async ()=>{
  src('./script/*.js')
  .pipe(dest('./dist/script'))
  .pipe(load.connect.reload())
})

// 处理html
task('html', async ()=>{
  src('./html/*.html')
  .pipe(dest('./dist/html'))
  .pipe(load.connect.reload())
})
// 处理json
task('json', async () => {
  src('./data/*.json')
    .pipe(dest('./dist/data'))
    .pipe(load.connect.reload())
})
//处理php
task('php', async () => {
  src('./php/*.php')
    .pipe(dest('./dist/php'))
    .pipe(load.connect.reload())
})
// 监听文件变化
task('watch',async ()=>{
  watch('./img/*.*',series('image'));
  watch('./sass/*.scss',series('sass'));
  watch('./script/*.js',series('script'));
  watch('./html/*.html',series('html'));
  watch('./data/*.json', series('json'));
  watch('./php/*.php', series('php'));
})

// 启动服务，自动刷新
task('connect',async ()=>{
  load.connect.server({
    root: './dist',
    livereload: true,
    port: 3000
  });
})

// 构建开发包
task('dev',series('delDist','image','sass','php','script','html','json','connect','watch'))
