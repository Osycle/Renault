


var gulp 					= require('gulp'),
		browserSync 		= require('browser-sync'),
		sass 						= require('gulp-sass'),
		concat					= require('gulp-concat'),
		uglify					= require('gulp-uglifyjs'),
		cssnano					= require('gulp-cssnano'),
		rename					= require('gulp-rename'),
		autoprefixer		= require('gulp-autoprefixer');

var fileinclude = require('gulp-file-include');
var app = "app";



gulp.task('fileinclude', function() {
  return gulp.src(['./app/src/**/*.html', '!./app/src/**/_*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: './'
    }))
    .pipe(gulp.dest('./app/'))
    .pipe( browserSync.reload({stream:true}) )
    
});



// SASS
gulp.task('sass', (done)=>{
		gulp
			.src( app+'/scss/**/*.+(scss|sass)')
			.pipe( sass().on('error', sass.logError) )
			.pipe(autoprefixer({overrideBrowserslist: 'last 2 versions', cascade: false} ))
			.pipe( gulp.dest(app+'/css/') )
			.pipe( browserSync.reload({stream:true}) );
		done();
	}
);


// SCRIPTS
gulp.task('scripts', ()=>{
	return gulp.src([
			app+'/js/plugins/jquery.min.js',
			app+'/js/plugins/bootstrap.min.js',
			app+'/js/plugins/aos.js',
			app+'/js/plugins/owl.carousel.min.js',
			app+'/js/plugins/jquery.fancybox.js',
			app+'/js/plugins/select2.min.js',
			app+'/js/plugins/jquery.mmenu.all.js',
			app+'/js/plugins/smooth-scroll.js',
			app+'/js/plugins/ion.rangeSlider.min.js',
			app+'/js/plugins/ResizeSensor.min.js',
			app+'/js/plugins/theia-sticky-sidebar.min.js',
			app+'/js/plugins/swiper-bundle.min.js',
			app+'/js/plugins/jquery.responsiveTabs.js',
			app+'/js/plugins/flickity.js'
		])
		.pipe( concat('scripts.min.js') )
		.pipe( uglify() )
		.pipe( gulp.dest(app+'/js/') ); //js default
	}
);

// STYLES
gulp.task('cssnano', ()=>{
		return gulp.src(app+'/css/main.css')
		.pipe( cssnano({ reduceIdents :  false }) )
		.pipe(rename({suffix: '.min'}) )
		.pipe( gulp.dest(app+'/css/') ); //css default
	}
);

// RELOADER BROWSER
gulp.task('browser-sync', (done)=>{
		browserSync({
			server: {baseDir: app+''},
			//proxy: "http://taf/",
			notify: false
		});
		done();
	}
);

	




gulp.task('watch', (done)=>{
		//gulp.task('default', gulp.series('watch', 'sass', 'browser-sync'));
		gulp.watch(app+'/scss/**/*.+(scss|sass)', gulp.parallel('sass'));
		gulp.watch(app+'/src/**/*.html', gulp.parallel('fileinclude'));
		//.on("change", function(){browserSync.reload(function(){console.log(111)})} );
		gulp.watch(app+'/js/**/*.js');
		done();
	}
);



//gulp.task('default', gulp.series('watch', 'sass'));
gulp.task('watch', gulp.series('watch','browser-sync', 'scripts', 'fileinclude'));

