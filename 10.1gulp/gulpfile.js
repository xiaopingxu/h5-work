var gulp=require('gulp');
	spriter=require('gulp-css-spriter');//雪碧图
	cssmin =require("gulp-clean-css");//文件清理
	uglify = require('gulp-uglify'); // js压缩
	imagemin = require('gulp-imagemin'); // 图片压缩
	pngquant = require('imagemin-pngquant');
var livereload = require('gulp-livereload'); // 网页自动刷新（文件变动后即时刷新页面）
	webserver = require('gulp-webserver'); // 本地服务器
     browserify=require('gulp-browserify');
	 rename=require('gulp-rename');
	 htmlmin = require('gulp-html-minifier');
	 cssver = require('gulp-make-css-url-version'); 



gulp.task('prohtml', function() {
	
	return gulp.src('./src/*.html') // 指明源文件路径、并进行文件匹配
	 	.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('./dist/')); // 输出路径
});

gulp.task('script', function() {
	return gulp.src('./src/js/*.js') // 指明源文件路径、并进行文件匹配
		
		 // .pipe(browserify())//模块化
		.pipe(uglify({ preserveComments:'some' })) // 使用uglify进行压缩，并保留部分注释
		// .pipe(rename({ suffix: '.min' })) // 重命名
		.pipe(gulp.dest('./dist/js')); // 输出路径
		 
});




gulp.task('images', function(){
	return gulp.src('./src/imgmob/*.{png,jpg,gif,ico}') // 指明源文件路径、并进行文件匹配
		.pipe(imagemin({
			progressive: true, // 无损压缩JPG图片
			svgoPlugins: [{removeViewBox: false}], // 不移除svg的viewbox属性
			use: [pngquant()] // 使用pngquant插件进行深度压缩
		}))
		.pipe(gulp.dest('./dist/imgmob')); // 输出路径
});
gulp.task('images2', function(){
	return gulp.src('./src/img/**/*.{png,jpg,gif,ico,JPEG,JPG}') // 指明源文件路径、并进行文件匹配
		.pipe(imagemin({
			progressive: true, // 无损压缩JPG图片
			svgoPlugins: [{removeViewBox: false}], // 不移除svg的viewbox属性
			use: [pngquant()] // 使用pngquant插件进行深度压缩
		}))
		.pipe(gulp.dest('./dist/img')); // 输出路径
});

	//雪碧图
 gulp.task('sprite', function() {
    return gulp.src('./src/css/*.css')
        .pipe(spriter({
            'spriteSheet': './dist/images/spritesheet.png', //雪碧图自动合成的图
           
            'pathToSpriteSheetFromCSS': '../images/spritesheet.png' //在css引用的图片路径
         }))
         .pipe(cssmin({
            advanced: false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            compatibility: '*',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
            keepBreaks: false,//类型：Boolean 默认：false [是否保留换行]
            keepSpecialComments: '*'
            //保留所有特殊前缀 
        }))
       .pipe(cssver()) //给css文件里引用文件加版本号（文件MD5）
        .pipe(gulp.dest('./dist/css')); //最后生成出来
 });


// 注册任务
gulp.task('webserver', function() {
	gulp.src( '.' ) // 服务器目录（.代表根目录）
	.pipe(webserver({ // 运行gulp-webserver
		livereload: true, // 启用LiveReload
		open: true // 服务器启动时自动打开网页
	}));
});

// 监听任务
gulp.task('watch',function(){
	// 监听 html
	gulp.watch('./src/*.html', ['prohtml'])
	// 监听 css
	gulp.watch('./src/css/*.css');
	// 监听 images
	gulp.watch('./src/img/*.{png,jpg,gif,svg}', ['images']);
	// 监听 js
	gulp.watch('./src/js/*.js', ['script']);
});

gulp.task('default',['webserver','watch','prohtml','sprite','script','images','images2'],function(){
	console.log('hello gulp');
});